import { LongLogo } from "@components/Logo/LongLogo"
import { isDarkOrLightRGBAString } from "@utils/isDarkOrLight"
import { CheckCircleIcon, ChevronUpIcon, PlusIcon, TrashIcon } from "@heroicons/react/outline"
import { motion } from "framer-motion"
import classnames from "classnames"
import classNames from "classnames"
import { FC, useState } from "react"
import { Downloadbutton } from "./Components/DownloadButton"
import { ExamPreview } from "./Components/Preview"
import { ScreenSizeButton } from "./Components/ScreenSize"
import { ThemeButton } from "./Components/ThemeButton"

export type LevelType = "4" | "5" | "6"
export type ProgramType = "sci-math" | "arts-math" | "arts-lang" | "arts-math-sci"
export type ProgramTHType = "วิทย์-คณิต" | "ศิลป์-คำนวณ" | "ศิลป์-ภาษา" | "ภาษา-คณิต (วิทย์)"
export type ScreenSizeType = "ipad" | "iphoneX" | "iphone8" | "huawei"
export type ThemeType = "blue" | "red" | "yellow"

export const ExamSchedulePage: FC<{
  primaryColor: string
  darkMode: boolean
}> = ({ primaryColor, darkMode }) => {
  const [level, setLevel] = useState<LevelType>("4")
  const [program, setProgram] = useState<ProgramType>("sci-math")
  const [programTH, setProgramTH] = useState<ProgramTHType>("วิทย์-คณิต")
  const [screenSize, setScreenSize] = useState<ScreenSizeType>("ipad")
  const [theme, setTheme] = useState<ThemeType>("blue")
  const [programPresent,setProgramPresent] = useState(false)

  const primaryBackgroundColor = darkMode ? "bg-black" : "bg-white"
  const primaryTextColor = darkMode ? "text-white" : "text-gray-800"
  const secondaryTextColor = darkMode ? "text-white" : "text-gray-700"
  const tertiaryTextColor = darkMode ? "text-white" : "text-gray-400"
  const hoverTextColor = darkMode ? "text-white" : "text-black font-semibold"

  const getPrimaryTextColor = () => {
    return isDarkOrLightRGBAString(primaryColor, 400) === "light" ? "#252525" : "#fff"
  }

  const isTheSame = <T,>(a: T, b: T) => {
    const bgColor = a === b ? primaryColor : "transparent"
    const textColor = a === b ? "#FFFFFF" : primaryColor
    return { backgroundColor: bgColor, color: textColor }
  }

  const genBGButton = (
    type: "level" | "program" | "screenSize" | "theme",
    input: LevelType | ProgramType | ScreenSizeType | ThemeType
  ) => {
    switch (type) {
      case "level":
        return isTheSame(input, level)
      case "program":
        return isTheSame(input, program)
      case "screenSize":
        return isTheSame(input, screenSize)
      case "theme":
        return isTheSame(input, theme)
      default:
        return { backgroundColor: "", color: "" }
    }
  }

  const toggle = {
    open: {
      rotate: 0,
    },
    close: {
      rotate: 180,
    },
  }

  return (
    <div>
      <header>
        <h1 className={`mb-1 text-xl font-medium ${primaryTextColor} sm:text-2xl`}>
          ตารางสอบกลางภาค &#40;SUMMATIVE&#41;
          <br />
          ภาคเรียนที่ 1 ปีการศึกษา 2568
        </h1>
        <p className={`mt-3 text-sm leading-5 ${secondaryTextColor}`}>เลือกแบบที่ต้องการแล้วกด Download เลย !</p>
      </header>

      <section className="mt-6 space-y-2">
        <h2 className={`text-xl font-medium ${secondaryTextColor} sm:text-2xl`}>ระดับชั้น</h2>

        <div className="flex space-x-1">
          <button
            onClick={() => {
              setLevel("4")
              if (program === "arts-math-sci") {
                setProgram("sci-math")
                setProgramTH("วิทย์-คณิต")
              }
            }}
            className="rounded-xl border border-gray-300 px-4 py-2"
            style={genBGButton("level", "4")}
          >
            ม.4
          </button>
          <button
            onClick={() => {
              setLevel("5")
              if (program === "arts-math-sci") {
                setProgram("sci-math")
                setProgramTH("วิทย์-คณิต")
              }
            }}
            className="rounded-xl border border-gray-300 px-4 py-2"
            style={genBGButton("level", "5")}
          >
            ม.5
          </button>
          <button
            onClick={() => setLevel("6")}
            className="rounded-xl border border-gray-300 px-4 py-2"
            style={genBGButton("level", "6")}
          >
            ม.6
          </button>
        </div>
      </section>

      <section className="mt-10 space-y-2">
        <h2 className={`text-xl font-medium ${secondaryTextColor} sm:text-2xl`}>สายการเรียน</h2>
        <div className="relative flex h-[44px] w-[240px]">
          {/* dropdown */}
          <div className="flex w-full rounded-xl border">
            <div className="flex w-9/12 cursor-pointer items-center justify-center">
              <span className={`mt-1 ${secondaryTextColor}`} style={{ color: primaryColor }}>
                {programTH}
              </span>
            </div>
            <button
              onClick={() => {
                setProgramPresent((prev) => !prev)
              }}
              className={`flex w-3/12 cursor-pointer items-center justify-center rounded-r-xl border-l border-gray-300 transition-colors ${
                darkMode ? "hover:bg-gray-900" : "hover:bg-gray-100"
              }`}
            >
              <motion.div variants={toggle} animate={programPresent ? "close" : "open"}>
                <ChevronUpIcon className="h-5 w-5 text-gray-500" />
              </motion.div>
            </button>
          </div>

          {/* expand */}
          {programPresent && (
            <>
              {/* default presets */}
              <div
                style={{ position: "fixed", top: "0px", right: "0px", bottom: "0px", left: "0px" }}
                onClick={() => {
                  setProgramPresent(false)
                }}
              />
              <div
                className={`absolute bottom-12 max-h-[28rem] w-full space-y-2 overflow-y-auto rounded-lg px-6 py-4 shadow-lg ${primaryBackgroundColor} border border-gray-500`}
              >
                <div className={`py-2`}>
                  <h3 className={`mb-2 ${secondaryTextColor} font-semibold`}>สายการเรียน</h3>
                  <hr className={`border-1 mb-3 rounded-lg border-gray-300`} />
                  <div className="space-y-2.5">
                    <div
                      onClick={() => {
                        setProgram("sci-math")
                        setProgramTH("วิทย์-คณิต")
                      }}
                      className="mb-1 flex cursor-pointer text-gray-400"
                    >
                      <span
                        className={classnames(
                          program !== "sci-math" ? "transition-colors hover:text-gray-800" : `${hoverTextColor}`
                        )}
                      >
                        วิทย์-คณิต
                      </span>
                    </div>
                    <div
                      onClick={() => {
                        setProgram("arts-math")
                        setProgramTH("ศิลป์-คำนวณ")
                      }}
                      className="mb-1 flex cursor-pointer text-gray-400"
                    >
                      <span
                        className={classnames(
                          program !== "arts-math" ? "transition-colors hover:text-gray-800" : `${hoverTextColor}`
                        )}
                      >
                        ศิลป์-คำนวณ
                      </span>
                    </div>
                    <div
                      onClick={() => {
                        setProgram("arts-lang")
                        setProgramTH("ศิลป์-ภาษา")
                      }}
                      className="mb-1 flex cursor-pointer text-gray-400"
                    >
                      <span
                        className={classnames(
                          program !== "arts-lang" ? "transition-colors hover:text-gray-800" : `${hoverTextColor}`
                        )}
                      >
                        ศิลป์-ภาษา
                      </span>
                    </div>
                    <div
                      onClick={() => {
                        setProgram("arts-math-sci")
                        setProgramTH("ภาษา-คณิต (วิทย์)")
                        setLevel("6")
                      }}
                      className="mb-1 flex cursor-pointer text-gray-400"
                    >
                      <span
                        className={classnames(
                          program !== "arts-math-sci" ? "transition-colors hover:text-gray-800" : `${hoverTextColor}`
                        )}
                      >
                        ภาษา-คณิต (วิทย์)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      <section className="mt-10 space-y-2">
        <h2 className={`text-xl font-medium ${secondaryTextColor} sm:text-2xl`}>ขนาดหน้าจอ</h2>

        <div className="grid grid-cols-2 gap-4">
          <ScreenSizeButton
            screenSizeID="ipad"
            title="iPad (3:4)"
            imgSrc="/assets/images/placeholder/ipad.png"
            darkMode={darkMode}
            setScreenSize={setScreenSize}
            style={genBGButton("screenSize", "ipad")}
          />
          <ScreenSizeButton
            screenSizeID="iphoneX"
            title="iPhone X (19.5:9)"
            imgSrc="/assets/images/placeholder/iphonex.png"
            darkMode={darkMode}
            setScreenSize={setScreenSize}
            style={genBGButton("screenSize", "iphoneX")}
          />
          <ScreenSizeButton
            screenSizeID="iphone8"
            title="iPhone 8 (16:9)"
            imgSrc="/assets/images/placeholder/iphone8.png"
            darkMode={darkMode}
            setScreenSize={setScreenSize}
            style={genBGButton("screenSize", "iphone8")}
          />
          <ScreenSizeButton
            screenSizeID="huawei"
            title="Huawei (19.5:9, centered)"
            imgSrc="/assets/images/placeholder/huawei.png"
            darkMode={darkMode}
            setScreenSize={setScreenSize}
            style={genBGButton("screenSize", "huawei")}
          />
        </div>
      </section>

      {/* <section className="mt-10 space-y-2">
        <h2 className="text-xl font-medium text-gray-600 sm:text-2xl">ธีมสี</h2>

        <div className="grid grid-cols-2 gap-4">
          <ThemeButton
            themeID="blue"
            title="Whale of a Time"
            imgSrc="/assets/images/placeholder/blue.png"
            setTheme={setTheme}
            style={genBGButton("theme", "blue")}
          />
          <ThemeButton
            themeID="red"
            title="Paint the Town Red"
            imgSrc="/assets/images/placeholder/red.png"
            setTheme={setTheme}
            style={genBGButton("theme", "red")}
          />
          <ThemeButton
            themeID="yellow"
            title="That‘s the Cheese !"
            imgSrc="/assets/images/placeholder/yellow.png"
            setTheme={setTheme}
            style={genBGButton("theme", "yellow")}
          />
        </div>
      </section> */}

      <section className="mt-10 space-y-2">
        <h2 className={`text-center text-xl font-medium ${secondaryTextColor} sm:text-2xl`}>Preview</h2>
        <ExamPreview imgSrc={`/assets/images/exam/Summative-1-2568/preview/M${level}/${screenSize}/${program}.jpg`} /> 
      </section>

      <Downloadbutton
        level={level}
        program={program}
        screenSize={screenSize}
        style={{ backgroundColor: primaryColor, color: getPrimaryTextColor() }}
      />

      <LongLogo className="mx-auto mt-6" color={primaryColor} />
    </div>
  )
}
