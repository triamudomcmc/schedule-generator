import { CSSProperties, FC, useState } from "react"
import { motion } from "framer-motion"
import classNames from "classnames"
import { Ellipsis } from "@components/Loader/Ellipsis"
import { LevelType, ProgramType, ScreenSizeType, ThemeType } from "../Page"

export const Downloadbutton: FC<{
  level: LevelType
  program: ProgramType
  screenSize: ScreenSizeType
  style: CSSProperties
}> = ({ level, program, screenSize, style }) => {
  const [waiting, setWaiting] = useState(false)

  const imgUrl = `/assets/images/exam/Summative-1-2568/src/M${level}/${screenSize}/${program}.png`

  const download = async () => {
    if (waiting) return

    setWaiting(true)

    // @ts-ignore
    window.gtag("event", "generate_schedule", {
      level,
      program,
      screenSize,
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
        // whileHover={{ scale: !waiting ? 1.05 : 1 }}
        onClick={download}
        className={classNames(
          "w-full rounded-xl text-white transition-colors sm:w-max ",
          waiting ? "cursor-not-allowed px-[60px] pb-[10px] pt-[2px]" : "py-2.5 px-6"
        )}
        style={style}
      >
        {!waiting ? <span>ดาวน์โหลดตารางสอบ</span> : <Ellipsis className="w-10" />}
      </motion.button>
    </div>
  )
}
