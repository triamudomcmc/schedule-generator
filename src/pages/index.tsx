import { LearnSchedulePage } from "@components/LearnSchedule/Page"
import { DescribeRoute } from "@components/Meta/DescribeRoute"
import Switch from "@components/Switch"
import { AnimateSharedLayout } from "framer-motion"
import { NextPage } from "next"
import { motion, AnimatePresence } from "framer-motion"
import { CSSProperties, Dispatch, FC, SetStateAction, useEffect, useState } from "react"
import { CheckIcon, ExclamationIcon, StarIcon, XIcon } from "@heroicons/react/solid"
import { rawRgbColorToCss } from "@utils/hexToRgb"
import { DefaultTheme } from "@config/defaultTheme"
import { ExamSchedulePage } from "@components/ExamSchedule/Page"
import classNames from "classnames"
import { useRouter } from "next/router"
import { SocialFacebook, SocialGitHub, SocialInstagram } from "src/vectors/Socials"
import { isDarkOrLightRGBAString } from "@utils/isDarkOrLight"
type TabType = "learn" | "exam"

const PageTab: FC<{
  tab: TabType
  setTab: Dispatch<SetStateAction<TabType>>
  darkMode: boolean
  setDarkMode: Dispatch<SetStateAction<boolean>>
  primaryColor: string
}> = ({ tab, setTab, primaryColor, darkMode, setDarkMode }) => {
  const { replace, query } = useRouter()

  const getTab = (tabName: TabType): CSSProperties => {
    return tab === tabName
      ? {
          backgroundColor: primaryColor,
          color: isDarkOrLightRGBAString(primaryColor, 400) === "light" ? "#111827" : "#fff",
        }
      : {
          backgroundColor: "#fff",
          color: primaryColor,
        }
  }

  const toggleDarkTheme = () => {
    setDarkMode(!darkMode)
  }

  const text = darkMode ? "Dark Mode" : "Light Mode"
  const textColor = darkMode ? "text-white" : "text-black"
  
  return (
    <div>
      <div className="flex justify-end">
        <motion.label 
          initial="initial"
          animate="animate"
          variants={{
            intiial: { y: -20, opacity: 0},
            animate: { 
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.7,
                ease: [0.6, -0.05, 0.01, 0.99]
              }
            }
          }}
          className={`mt-1.5 ${textColor} text-sm`}>{text}
        </motion.label>
        <motion.div
          initial="initial"
          animate="animate"
          variants={{
            initial: { y: -20, opacity: 0 },
            animate: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.7,
                ease: [0.6, -0.05, 0.01, 0.99],
              },
            },
          }}
          className="ml-2 flex"
        >
          <Switch checked={darkMode} onChange={toggleDarkTheme} />
        </motion.div>
      </div>
      <div className="relative mt-3 mb-6 rounded-lg bg-white">
        <div className="mx-auto">
          <div className="grid grid-cols-2 items-center justify-center rounded-lg border border-gray-300">
            <button
              type="button"
              onClick={() => {
                setTab("learn")
                replace({ query: { type: "learn" } }, undefined, { shallow: true })
              }}
              style={getTab("learn")}
              className="flex h-full flex-col items-center justify-center space-x-2 rounded-l-lg px-2 py-4 text-center transition-all hover:brightness-95 sm:px-12"
            >
              {/* {tab === "learn" && <StarIcon className="h-5 w-5" />} */}
              <span>ตารางเรียน</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setTab("exam")
                replace({ query: { type: "exam" } }, undefined, { shallow: true })
              }}
              style={getTab("exam")}
              className="flex h-full flex-col items-center justify-center space-x-2 rounded-r-lg px-2 py-4 text-center transition-all hover:brightness-95 sm:px-12"
            >
              {/* {tab === "exam" && <StarIcon className="h-5 w-5" />} */}
              <span>ตารางสอบ</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const SocialsComponent: FC<{ primaryColor: string }> = ({ primaryColor }) => {
  return (
    <section style={{ color: primaryColor }} className="mt-6 flex items-center justify-center gap-3">
      <a
        onClick={(e) => {
          // @ts-ignore
          window.gtag("event", "social_click", {
            event_category: "social_click",
            event_label: "Facebook",
            type: "Facebook",
          })
        }}
        rel="noreferrer"
        target="_blank"
        href="https://www.facebook.com/triamudomclubs"
      >
        <SocialFacebook className="h-8 w-8 transition-transform hover:scale-105" />
      </a>
      <a
        onClick={(e) => {
          // @ts-ignore
          window.gtag("event", "social_click", {
            event_category: "social_click",
            event_label: "Instagram",
            type: "Instagram",
          })
        }}
        rel="noreferrer"
        target="_blank"
        href="https://instagram.com/tucmc_official"
      >
        <SocialInstagram className="h-8 w-8 transition-transform hover:scale-105" />
      </a>
      <a
        onClick={(e) => {
          // @ts-ignore
          window.gtag("event", "social_click", {
            event_category: "social_click",
            event_label: "GitHub",
            type: "GitHub",
          })
        }}
        rel="noreferrer"
        target="_blank"
        href="https://github.com/triamudomcmc/schedule-generator"
      >
        <SocialGitHub className="h-8 w-8 transition-transform hover:scale-105" />
      </a>
    </section>
  )
}

export const Home: NextPage = () => {
  const [bgColor, setBGcolor] = useState(rawRgbColorToCss(DefaultTheme.Pink.c1))
  const [primaryColor, setPrimaryColor] = useState(rawRgbColorToCss(DefaultTheme.Pink.t1))

  const [tab, setTab] = useState<TabType>("learn")
  const [darkMode, setDarkMode] = useState(false)
  const { query } = useRouter()

  let bgInsideColor = darkMode ? "#000" : "#fff"

  useEffect(() => {
    if (query?.type && ["learn", "exam"].includes(query?.type as string)) {
      setTab(query?.type as TabType)
    }
  }, [query?.type])

  useEffect(() => {
    setDarkMode(window.matchMedia("(prefers-colors-scheme): dark").matches)
  }, [])

  return (
    <>
      <DescribeRoute
        title="TUCMC Schedule Generator"
        description="ระบบนี้เป็นระบบสำหรับดาวน์โหลดตารางที่ทาง กช. จัดทำขึ้น ไม่ได้มีความเกี่ยวข้องกับทางโรงเรียนแต่อย่างใด"
        imgURL="/preview.png"
      >
        <div
          className="flex min-h-screen w-full flex-col items-center justify-center px-4 py-4 transition-colors"
          style={{ backgroundColor: bgColor }}
        >
          <main
            className="max-w-[470px] rounded-xl py-10 px-5 font-ui shadow-lg transition-colors duration-500"
            style={{ backgroundColor: bgInsideColor }}
          >
            <PageTab
              primaryColor={primaryColor}
              tab={tab}
              setTab={setTab}
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            />

            <AnimatePresence>
              <motion.div
                initial="initial"
                animate="animate"
                variants={{
                  initial: { y: -20, opacity: 0 },
                  animate: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.7,
                      ease: [0.6, -0.05, 0.01, 0.99],
                    },
                  },
                }}
                key={tab}
              >
                {tab === "learn" && (
                  <LearnSchedulePage setBGcolor={setBGcolor} setPrimaryColor={setPrimaryColor} darkMode={darkMode} />
                )}
                {tab === "exam" && <ExamSchedulePage primaryColor={primaryColor} darkMode={darkMode} />}
              </motion.div>
            </AnimatePresence>

            <SocialsComponent primaryColor={primaryColor} />
          </main>
        </div>
      </DescribeRoute>
    </>
  )
}

export default Home
