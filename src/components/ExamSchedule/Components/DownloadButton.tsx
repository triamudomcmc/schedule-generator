import { CSSProperties, FC, useState } from "react"
import { motion } from "framer-motion"
import classNames from "classnames"
import { Ellipsis } from "@components/Loader/Ellipsis"
import { LevelType, ProgramType, ScreenSizeType, ThemeType } from "../Page"

export const Downloadbutton: FC<{
  level: LevelType
  program: ProgramType
  screenSize: ScreenSizeType
  theme: ThemeType
  style: CSSProperties
}> = ({ level, program, screenSize, theme, style }) => {
  const [waiting, setWaiting] = useState(false)

  // const imgUrl = `/assets/images/exam/final-1-2565/src/${theme}/m${level}/${screenSize}/${program}.png`
  let imgUrl = `/assets/images/exam/sum-1-2566/src/${theme}/m${level}/${screenSize}/${program}.png`

  if (screenSize == "ipad") {
    imgUrl = `/assets/images/exam/sum-1-2566/src/m${level}/${screenSize}/${program}.png`
  }

  const download = async () => {
    if (waiting) {
      return
    }

    setWaiting(true)

    // @ts-ignore
    window.gtag("event", "generate_schedule", {
      level,
      program,
      screenSize,
      theme,
    })

    const a = document.createElement("a")
    a.href = imgUrl
    a.download = `schedule.png`
    document.body.appendChild(a)
    a.click()
    a.remove()

    setWaiting(false)
  }

  return (
    <div className="mt-2 flex justify-center sm:mt-10">
      <motion.button
        whileHover={{ scale: !waiting ? 1.05 : 1 }}
        onClick={download}
        className={classNames(
          "w-full rounded-xl text-white transition-colors sm:w-max",
          waiting ? "cursor-not-allowed px-[60px] pb-[10px] pt-[2px]" : "py-2.5 px-6"
        )}
        style={style}
      >
        {!waiting ? <span>ดาวน์โหลดตารางสอบ</span> : <Ellipsis className="w-10" />}
      </motion.button>
    </div>
  )
}
