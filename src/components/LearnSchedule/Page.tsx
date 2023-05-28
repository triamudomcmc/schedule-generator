import type { NextPage } from "next"
import { CheckCircleIcon, ChevronUpIcon, PlusIcon, TrashIcon } from "@heroicons/react/outline"
import { ColorPicker, ColorType } from "@components/ColorPicker"
import React, { Dispatch, FC, Fragment, SetStateAction, useEffect, useState } from "react"
import { rawRgbColorToCss } from "@utils/hexToRgb"
import { isDarkOrLightRGBACustom } from "@utils/isDarkOrLight"
import classnames from "classnames"
import { _Preview as Preview } from "@components"
import { CheckIcon, ExclamationIcon, XIcon } from "@heroicons/react/solid"
import { motion } from "framer-motion"
import { Ellipsis } from "@components/Loader/Ellipsis"
import classNames from "classnames"
import { DescribeRoute } from "@components/Meta/DescribeRoute"
import { TUCMCLogin, useAuth } from "tucmc-auth"
import { ColorTheme, DefaultTheme } from "@config/defaultTheme"
import { LongLogo } from "@components/Logo/LongLogo"
import { downloadScreenshot } from "@handlers/client/downloadScreenshot"
import { rooms } from "@utils/constants"
import { checkUserInDB } from "@handlers/client/db/checkUserInDB"
import { db } from "@config/firebase"
import { removeKey } from "@utils/object"
import { updateCustomThemes } from "@handlers/client/db/updateCustomThemes"
import Modal from "@components/Modal"
import { Input } from "@components/Input"
import Image from "next/image"
import { v4 as uuidv4 } from "uuid"
import { useTimeout } from "@hooks/useTimeout"
import { useToast } from "@components/Toast/Context"
import { log } from "util"

type BGType = "none" | "mistletoe" | "ordaments" | "sticker" | "flower"

export const LearnSchedulePage: FC<{
  setBGcolor: Dispatch<SetStateAction<string>>
  setPrimaryColor: Dispatch<SetStateAction<string>>
}> = ({ setBGcolor, setPrimaryColor }) => {
  const { loggedUser, signOut } = useAuth()
  const toast = useToast()

  const [waiting, setWaiting] = useState(false)

  const [modalState, setModalState] = useState(false)
  const [closeState, setCloseState] = useState(false)

  const [background, setBackground] = useState("none")
  const [colors, setColors] = useState<ColorTheme>(DefaultTheme.Pink)
  const [customThemes, setCustomThemes] = useState<Record<string, ColorTheme>>({})
  const [theme, setTheme] = useState("d-Pink") // d: default, c: custom
  const [themeName, setThemeName] = useState("")

  const getColorsFromID = (themeID: string) => {
    const trimmedTheme = themeID.replace(/(c|d)-/, "")

    if (theme.startsWith("c-")) {
      return customThemes[trimmedTheme]
    } else if (theme.startsWith("d-")) {
      return DefaultTheme[trimmedTheme]
    } else {
      return DefaultTheme.Pink
    }
  }

  useEffect(() => {
    if (theme.startsWith("c-") || theme.startsWith("d-")) {
      setColors(getColorsFromID(theme))
      return
    } else {
      setTheme("d-Pink")
    }
  }, [theme])

  useEffect(() => {
    if (loggedUser) {
      // set preferences, custom themes
      checkUserInDB(db, loggedUser.user as any, { background: background, theme: theme }, customThemes).then((data) => {
        if (!data) return
        setBackground(data.background)
        setCustomThemes(data.customThemes)
        setTheme(data.theme)
      })
    }
  }, [loggedUser])

  useEffect(() => {
    setBGcolor(rawRgbColorToCss(colors.c1))
    setPrimaryColor(rawRgbColorToCss(colors.t1))
  }, [colors])

  const [invalidRoom, setInvalidRoom] = useState(false)
  const [preset, setPreset] = useState(false)
  const [room, setRoom] = useState("")

  useEffect(() => {
    if (!rooms.includes(parseInt(room))) {
      setInvalidRoom(true)
    } else {
      setInvalidRoom(false)
    }
  }, [room])

  useEffect(() => {
    const cachedRoom = window.localStorage.getItem("room")
    setRoom(cachedRoom ?? "")
  }, [])

  const toggleError = () => {
    // setError(true)
    // useTimeout(() => setError(false), 3000)
    toast?.setToast("error", "หมายเลขห้องไม่ถูกต้อง")
  }

  const toggleSuccess = () => {
    // setSuccess(true)
    // useTimeout(() => setSuccess(false), 3000)
    toast?.setToast("success", "บันทึกข้อมูลสำเร็จ")
  }

  const download = async () => {
    if (waiting) return
    if (invalidRoom) {
      toggleError()
      return
    }

    window.localStorage.setItem("room", room)

    downloadScreenshot(room, colors, background, setWaiting)
  }

  const toggle = {
    open: {
      rotate: 0,
    },
    close: {
      rotate: 180,
    },
  }

  const genBGButton = (inputBG: BGType) => {
    if (inputBG === background)
      return `text-${isDarkOrLightRGBACustom(colors.t1, 400) === "light" ? "gray-900" : "white"}`
    else return "text-gray-900"
  }

  return (
    <Fragment>
      <Modal
        overlayClassName="fixed flex flex-col items-center justify-center top-0 left-0 bg-black bg-opacity-20 w-full min-h-screen z-[99]"
        className="flex min-w-[340px] flex-col items-center rounded-lg bg-white"
        // @ts-ignore
        CloseDep={{
          dep: closeState,
          revert: () => {
            setCloseState(false)
          },
        }}
        // @ts-ignore
        TriggerDep={{
          dep: modalState,
          revert: () => {
            setModalState(false)
          },
        }}
      >
        <div className="flex flex-col items-center px-4 py-4">
          <div className="p-3 mt-1 mb-2">
            <Image src="/assets/art-and-design.png" layout="intrinsic" width={60} height={60} />
          </div>
          <div className="space-y-1">
            <h2 className="text-center text-gray-900">สร้างธีมสีใหม่</h2>
          </div>
        </div>
        <div className="w-full px-4 py-4 space-y-6 bg-gray-100 rounded-b-lg">
          <div className="space-y-2">
            <input
              onChange={(e) => setThemeName(e.target.value)}
              value={themeName}
              type="text"
              className="w-full h-10 px-4 py-2 placeholder-gray-500 border border-gray-300 rounded-md shadow-sm outline-none appearance-none focus:border-pink-500 focus:ring-pink-500"
              placeholder="ชื่อธีมสี"
            />
            <button
              onClick={() => {
                if (themeName === "" || !loggedUser) return

                // save stuff
                const generatedID = uuidv4()

                const newCustomThemes = { ...customThemes, [generatedID]: { ...colors, name: themeName } }
                setCustomThemes(newCustomThemes)
                setTheme(`c-${generatedID}`)
                // save to db
                updateCustomThemes(db, loggedUser.user as any, newCustomThemes, theme)
                toggleSuccess()
                setCloseState(true)
                setThemeName("")
              }}
              className="flex items-center justify-center w-full py-2 space-x-1 text-white bg-green-400 rounded-lg"
            >
              <CheckCircleIcon className="w-5 h-5" />
              <span>ยืนยัน</span>
            </button>
            <button
              onClick={() => {
                setCloseState(true)
              }}
              className="w-full py-2 text-gray-600 bg-white border border-gray-400 rounded-lg"
            >
              ยกเลิก
            </button>
          </div>
        </div>
      </Modal>

      <header>
        <h1 className="mb-1 text-xl font-medium text-gray-800 sm:text-2xl">
          ระบบจัดการตารางเรียน
          <br />
          ภาคเรียนที่ 1 ปีการศึกษา 2566
        </h1>
        <p className="mt-3 text-sm leading-5 text-gray-400">
          ระบบนี้เป็นระบบสำหรับดาวน์โหลดตารางเรียนที่ทาง กช.&nbsp;
          <br className="hidden sm:block" />
          จัดทำขึ้น ไม่ได้มีความเกี่ยวข้องกับทางโรงเรียนแต่อย่างใด
          <br />
        </p>

        <div className="flex flex-col mt-4 space-y-2">
          {!loggedUser ? (
            <>
              <p>เข้าสู่ระบบเพื่อบันทึกธีมสีของคุณ</p>
              <div className="w-48 transition-transform hover:scale-105">
                <TUCMCLogin />
              </div>
            </>
          ) : (
            <button
              onClick={() => signOut()}
              className="px-6 py-2 text-center transition-colors bg-white border border-gray-400 rounded-full w-36 hover:border-gray-600 hover:bg-gray-100"
            >
              ออกจากระบบ
            </button>
          )}
        </div>
      </header>

      {/* classroom */}
      <section className="mt-12 space-y-2">
        <h2 className="text-xl font-medium text-gray-600 sm:text-2xl">ใส่เลขห้องเรียน</h2>
        <div className="flex flex-col items-start sm:flex-row sm:items-center">
          <div className="relative w-48">
            <input
              onChange={(e) => {
                if (e.target.value.length > 3) return
                setRoom(e.target.value)
              }}
              value={room}
              placeholder="เลขห้อง"
              className={classnames(
                "w-full rounded-xl border border-gray-300 pl-4 pt-2 pb-1.5 text-xl text-gray-500",
                invalidRoom ? "border-red-400" : " border-green-400"
              )}
            />
            <div className="absolute top-0 right-3.5 flex h-full items-center justify-end">
              {!invalidRoom ? (
                <CheckIcon className="w-5 h-5 text-green-500" />
              ) : (
                <XIcon className="w-5 h-5 text-red-400" />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* themes */}
      <section className="mt-12 space-y-4 sm:space-y-6">
        <h2 className="text-xl font-medium text-gray-600 sm:text-2xl">ปรับแต่งตารางเรียน</h2>
        <div className="flex flex-col justify-center">
          <h3 className="mb-2 text-lg font-medium text-gray-600">ธีมสี </h3>

          <div className="relative flex h-[44px] w-[240px]">
            {/* dropdown */}
            <div className="flex w-full border border-gray-300 rounded-xl">
              <div className="flex items-center justify-center w-9/12 cursor-pointer">
                <div
                  style={{ backgroundColor: rawRgbColorToCss(colors.t1) }}
                  className="w-5 h-5 mr-2 rounded-full shadow-sm"
                />
                <span className="mt-1 text-gray-600">{getColorsFromID(theme).name}</span>
              </div>
              <button
                onClick={() => {
                  setPreset((prev) => !prev)
                }}
                className="flex items-center justify-center w-3/12 transition-colors border-l border-gray-300 cursor-pointer rounded-r-xl hover:bg-gray-100"
              >
                <motion.div variants={toggle} animate={preset ? "close" : "open"}>
                  <ChevronUpIcon className="w-5 h-5 text-gray-700" />
                </motion.div>
              </button>
            </div>

            {/* expand */}
            {preset && (
              <>
                {/* default presets */}
                <div
                  style={{ position: "fixed", top: "0px", right: "0px", bottom: "0px", left: "0px" }}
                  onClick={() => {
                    setPreset(false)
                  }}
                />
                <div className="absolute bottom-12 max-h-[28rem] w-full space-y-2 overflow-y-auto rounded-lg bg-white px-6 py-4 shadow-lg">
                  <div className="py-2">
                    <h3 className="mb-2">ธีมสีเบื้องต้น</h3>
                    <hr className="mb-3 border-gray-300 rounded-lg border-1" />
                    <div className="space-y-2.5">
                      {Object.keys(DefaultTheme).map((colorID) => (
                        <div
                          onClick={() => {
                            setTheme(`d-${colorID}`)
                          }}
                          className="flex mb-1 text-gray-400 cursor-pointer"
                          key={`d-${colorID}`}
                        >
                          <div
                            style={{ backgroundColor: rawRgbColorToCss(DefaultTheme[colorID].t1) }}
                            className="w-5 h-5 mr-2 rounded-full shadow-sm"
                          />
                          <span
                            className={classnames(
                              `d-${colorID}` !== theme ? "transition-colors hover:text-gray-500" : "text-gray-800"
                            )}
                          >
                            {DefaultTheme[colorID.replace(/(c|d)-/, "")].name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="py-2">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="">ธีมสีที่สร้าง</h3>
                      {!loggedUser ? (
                        <div></div>
                      ) : (
                        <button
                          onClick={() => {
                            setModalState(true)
                          }}
                        >
                          <PlusIcon className="w-4 h-4 text-gray-600" />
                        </button>
                      )}
                    </div>
                    <hr className="mb-3 border-gray-300 rounded-lg border-1" />
                    <div className="space-y-2.5">
                      {!loggedUser ? (
                        <p className="text-sm text-gray-400">เข้าสู่ระบบเพื่อบันทึกธีมสีที่สร้าง</p>
                      ) : (
                        Object.keys(customThemes).map((cTheme) => {
                          return (
                            <div
                              onClick={() => {
                                setTheme(`c-${cTheme}`)
                              }}
                              className="flex mb-1 text-gray-400 cursor-pointer"
                              key={`c-${cTheme}`}
                            >
                              <button
                                onClick={(e) => {
                                  e.stopPropagation()
                                  setTheme("d-Pink")

                                  const newCustomThemes = removeKey(customThemes, cTheme)
                                  setCustomThemes(newCustomThemes)
                                  // save to db
                                  updateCustomThemes(db, loggedUser.user as any, newCustomThemes, theme)
                                  toggleSuccess()
                                }}
                              >
                                <TrashIcon className="w-5 h-5 mr-2 text-gray-400 transition-colors hover:text-red-400" />
                              </button>
                              <div
                                style={{ backgroundColor: rawRgbColorToCss(customThemes[cTheme].t1) }}
                                className="w-5 h-5 mr-2 rounded-full shadow-sm"
                              />
                              <span
                                className={classnames(
                                  `c-${cTheme}` !== theme ? "transition-colors hover:text-gray-500" : "text-gray-800"
                                )}
                              >
                                {customThemes[cTheme].name}
                              </span>
                            </div>
                          )
                        })
                      )}
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* color swatches */}
        <section className="flex flex-col items-start sm:flex-row sm:items-center">
          <div className="flex flex-col justify-center">
            <div className="flex items-center justify-between mb-4 space-x-4">
              <h3 className="text-lg font-medium text-gray-600">ชุดสี </h3>
              {loggedUser ? (
                <button
                  onClick={() => {
                    // if editing default theme, create new customTheme
                    if (theme.startsWith("d-")) {
                      setModalState(true)
                    }
                    // if editing custom theme, override it
                    else if (theme.startsWith("c-")) {
                      const newCustomThemes = { ...customThemes, [theme.replace("c-", "")]: { ...colors } }
                      setCustomThemes(newCustomThemes)
                      // save to db
                      updateCustomThemes(db, loggedUser.user as any, newCustomThemes, theme)
                      toggleSuccess()
                    }
                  }}
                  className="px-6 py-2 text-center transition-colors bg-white border border-gray-300 rounded-full hover:bg-gray-100"
                >
                  บันทึก
                </button>
              ) : (
                <div></div>
              )}
            </div>

            <div className="flex flex-row flex-wrap gap-2">
              <div className="flex items-center mr-2 space-x-1">
                <ColorPicker
                  onChange={(c) => {
                    setColors((prev) => {
                      return { ...prev, bg: c }
                    })
                  }}
                  defaultColor={colors.bg}
                />
                <ColorPicker
                  onChange={(c) => {
                    setColors((prev) => {
                      return { ...prev, t1: c }
                    })
                  }}
                  defaultColor={colors.t1}
                />
                <ColorPicker
                  onChange={(c) => {
                    setColors((prev) => {
                      return { ...prev, t2: c }
                    })
                  }}
                  defaultColor={colors.t2}
                />
              </div>
              <div className="flex items-center space-x-1">
                <ColorPicker
                  onChange={(c) => {
                    setColors((prev) => {
                      return { ...prev, c1: c }
                    })
                  }}
                  defaultColor={colors.c1}
                />
                <ColorPicker
                  onChange={(c) => {
                    setColors((prev) => {
                      return { ...prev, c2: c }
                    })
                  }}
                  defaultColor={colors.c2}
                />
                <ColorPicker
                  onChange={(c) => {
                    setColors((prev) => {
                      return { ...prev, c3: c }
                    })
                  }}
                  defaultColor={colors.c3}
                />
                <ColorPicker
                  onChange={(c) => {
                    setColors((prev) => {
                      return { ...prev, c4: c }
                    })
                  }}
                  defaultColor={colors.c4}
                />
                <ColorPicker
                  onChange={(c) => {
                    setColors((prev) => {
                      return { ...prev, c5: c }
                    })
                  }}
                  defaultColor={colors.c5}
                />
              </div>
            </div>
          </div>
        </section>

        {/* background */}
        <section className="flex flex-col justify-center space-y-2">
          <h3 className="mb-2 text-lg font-medium text-gray-600">พื้นหลัง </h3>
          <div className="flex">
            <div className="space-x-1 space-y-1">
              <button
                onClick={() => setBackground("none")}
                className={classNames(genBGButton("none"), "rounded-xl border border-gray-300 px-4 py-2")}
                style={{ backgroundColor: background === "none" ? rawRgbColorToCss(colors.t1) : "#fff" }}
              >
                ไม่มี
              </button>
              {/* <button
              onClick={() => setBackground("ordaments")}
              className={classNames(genBGButton("ordaments"), "rounded-xl border border-gray-300 px-4 py-2")}
              style={{ backgroundColor: background === "ordaments" ? rawRgbColorToCss(colors.t1) : "#fff" }}
            >
              Christmas Town
            </button>
            <button
              onClick={() => setBackground("mistletoe")}
              className={classNames(genBGButton("mistletoe"), "rounded-xl border border-gray-300 px-4 py-2")}
              style={{ backgroundColor: background === "mistletoe" ? rawRgbColorToCss(colors.t1) : "#fff" }}
            >
              Mistletoe
            </button> */}
              <button
                onClick={() => setBackground("sticker")}
                className={classNames(genBGButton("sticker"), "rounded-xl border border-gray-300 px-4 py-2")}
                style={{ backgroundColor: background === "sticker" ? rawRgbColorToCss(colors.t1) : "#fff" }}
              >
                COOL KIDS starter pack
              </button>
              <button
                onClick={() => setBackground("flower")}
                className={classNames(genBGButton("flower"), "rounded-xl border border-gray-300 px-4 py-2")}
                style={{ backgroundColor: background === "flower" ? rawRgbColorToCss(colors.t1) : "#fff" }}
              >
                Dans le Jardin
              </button>
            </div>
          </div>
        </section>
      </section>

      {/* preview */}
      <>
        <Preview rawTheme={colors} background={background} />
      </>

      {/* download */}
      <div className="flex justify-center mt-8 sm:mt-10">
        <motion.button
          whileHover={{ scale: !waiting ? 1.05 : 1 }}
          onClick={download}
          className={classnames(
            "w-full rounded-xl text-white transition-colors sm:w-max",
            waiting ? "cursor-not-allowed px-[60px] pb-[10px] pt-[2px]" : "py-2.5 px-6"
          )}
          style={{
            backgroundColor: rawRgbColorToCss(colors.t1),
            color: isDarkOrLightRGBACustom(colors.t1, 400) === "light" ? "#111827" : "#fff",
          }}
        >
          {!waiting ? <span>สร้างตารางเรียน</span> : <Ellipsis className="w-10" />}
        </motion.button>
      </div>
      <LongLogo className="mx-auto mt-6" color={rawRgbColorToCss(colors.t1)} />
    </Fragment>
  )
}
