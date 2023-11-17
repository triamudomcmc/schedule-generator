import { LongLogo } from "@components/Logo/LongLogo"
import { isDarkOrLightRGBAString } from "@utils/isDarkOrLight"
import classNames from "classnames"
import { FC, useState } from "react"
import { Downloadbutton } from "./Components/DownloadButton"
import { ExamPreview } from "./Components/Preview"
import { ScreenSizeButton } from "./Components/ScreenSize"
import { ThemeButton } from "./Components/ThemeButton"

export type LevelType = "4" | "5" | "6"
export type ProgramType = "sci-math" | "arts-math" | "arts-lang" | "arts-math-sci"
export type ScreenSizeType = "ipad" | "iphonex" | "iphone8" | "huawei"
export type ThemeType = "blue" | "red" | "yellow"

export const ExamSchedulePage: FC<{ primaryColor: string }> = ({ primaryColor }) => {
  const [level, setLevel] = useState<LevelType>("4")
  const [program, setProgram] = useState<ProgramType>("sci-math")
  const [screenSize, setScreenSize] = useState<ScreenSizeType>("ipad")
  const [theme, setTheme] = useState<ThemeType>("blue")

  const getPrimaryTextColor = () => {
    return isDarkOrLightRGBAString(primaryColor, 400) === "light" ? "#252525" : "#fff"
  }

  const isTheSame = <T,>(a: T, b: T) => {
    const bgColor = a === b ? primaryColor : getPrimaryTextColor()
    const textColor = "#FF69B4"
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

  return (
    <div>
      <header>
        <h1 className="mb-1 text-xl font-medium text-gray-800 sm:text-2xl">
          ตารางสอบปลายภาค &#40;FINAL&#41;
          <br />
          ภาคเรียนที่ 1 ปีการศึกษา 2566
        </h1>
        <p className="mt-3 text-sm leading-5 text-gray-400">เลือกแบบที่ต้องการแล้วกด Download เลย !</p>
      </header>

      <section className="mt-6 space-y-2">
        <h2 className="text-xl font-medium text-gray-600 sm:text-2xl">ระดับชั้น</h2>

        <div className="flex space-x-1">
          <button
            onClick={() => setLevel("4")}
            className="rounded-xl border border-gray-300 px-4 py-2"
            style={genBGButton("level", "4")}
          >
            ม.4
          </button>
          <button
            onClick={() => setLevel("5")}
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
        <h2 className="text-xl font-medium text-gray-600 sm:text-2xl">สายการเรียน</h2>

        <div className="flex space-x-1">
          <button
            onClick={() => setProgram("sci-math")}
            className="rounded-xl border border-gray-300 px-4 py-2"
            style={genBGButton("program", "sci-math")}
          >
            วิทย์-คณิต
          </button>
          <button
            onClick={() => setProgram("arts-math")}
            className="rounded-xl border border-gray-300 px-4 py-2"
            style={genBGButton("program", "arts-math")}
          >
            ศิลป์คำนวณ
          </button>
          <button
            onClick={() => setProgram("arts-lang")}
            className="rounded-xl border border-gray-300 px-4 py-2"
            style={genBGButton("program", "arts-lang")}
          >
            ศิลป์ภาษา
          </button>
          <button
            onClick={() => {
              setLevel("6")
              setProgram("arts-math-sci")
            }}
            className="rounded-xl border border-gray-300 px-4 py-2"
            style={genBGButton("program", "arts-math-sci")}
          >
            ภาษาคณิต(วิทย์)
          </button>
        </div>
      </section>

      <section className="mt-10 space-y-2">
        <h2 className="text-xl font-medium text-gray-600 sm:text-2xl">ขนาดหน้าจอ</h2>

        <div className="grid grid-cols-2 gap-4">
          <ScreenSizeButton
            screenSizeID="ipad"
            title="iPad (3:4)"
            imgSrc="/assets/images/placeholder/ipad.png"
            setScreenSize={setScreenSize}
            style={genBGButton("screenSize", "ipad")}
          />
          <ScreenSizeButton
            screenSizeID="iphonex"
            title="iPhone X (19.5:9)"
            imgSrc="/assets/images/placeholder/iphonex.png"
            setScreenSize={setScreenSize}
            style={genBGButton("screenSize", "iphonex")}
          />
          <ScreenSizeButton
            screenSizeID="iphone8"
            title="iPhone 8 (16:9)"
            imgSrc="/assets/images/placeholder/iphone8.png"
            setScreenSize={setScreenSize}
            style={genBGButton("screenSize", "iphone8")}
          />
          <ScreenSizeButton
            screenSizeID="huawei"
            title="Huawei (19.5:9, centered)"
            imgSrc="/assets/images/placeholder/huawei.png"
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
        <h2 className="text-center text-xl font-medium text-gray-600 sm:text-2xl">Preview</h2>
        <ExamPreview
          imgSrc={`/assets/images/exam/final-1-2566/preview/m${level}/${screenSize}/${program}.JPG`}
        />
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
