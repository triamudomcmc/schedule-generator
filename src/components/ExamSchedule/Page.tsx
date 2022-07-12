import { LongLogo } from "@components/Logo/LongLogo"
import { isDarkOrLightRGBAString } from "@utils/isDarkOrLight"
import classNames from "classnames"
import { FC, useState } from "react"
import { Downloadbutton } from "./Components/DownloadButton"
import { ExamPreview } from "./Components/Preview"
import { ScreenSizeButton } from "./Components/ScreenSize"
import { ThemeButton } from "./Components/ThemeButton"

export type LevelType = "4" | "5" | "6"
export type ProgramType = "sci-math" | "arts-math" | "arts-lang"
export type ScreenSizeType = "ipad" | "iphonex" | "iphone" | "huawei"
export type ThemeType = "blue" | "pink" | "purple"

export const ExamSchedulePage: FC<{ primaryColor: string }> = ({ primaryColor }) => {
  const [level, setLevel] = useState<LevelType>("4")
  const [program, setProgram] = useState<ProgramType>("sci-math")
  const [screenSize, setScreenSize] = useState<ScreenSizeType>("ipad")
  const [theme, setTheme] = useState<ThemeType>("blue")

  const getPrimaryTextColor = () => {
    return isDarkOrLightRGBAString(primaryColor, 400) === "light" ? "#111827" : "#fff"
  }

  const genBGButtonLevel = (inputLevel: LevelType) => {
    const bgColor = inputLevel === level ? primaryColor : getPrimaryTextColor()
    const textColor = inputLevel === level ? "#fff" : "rgb(17 24 39)"
    return { backgroundColor: bgColor, color: textColor }
  }

  const genBGButtonProgram = (inputProgram: ProgramType) => {
    const bgColor = inputProgram === program ? primaryColor : getPrimaryTextColor()
    const textColor = inputProgram === program ? "#fff" : "rgb(17 24 39)"
    return { backgroundColor: bgColor, color: textColor }
  }

  const genBGButtonScreenSize = (inputScreenSize: ScreenSizeType) => {
    const bgColor = inputScreenSize === screenSize ? primaryColor : getPrimaryTextColor()
    const textColor = inputScreenSize === screenSize ? "#fff" : "rgb(17 24 39)"
    return { backgroundColor: bgColor, color: textColor }
  }

  const genBGButtonTheme = (inputTheme: ThemeType) => {
    const bgColor = inputTheme === theme ? primaryColor : getPrimaryTextColor()
    const textColor = inputTheme === theme ? "#fff" : "rgb(17 24 39)"
    return { backgroundColor: bgColor, color: textColor }
  }

  return (
    <div>
      <header>
        <h1 className="mb-1 text-xl font-medium text-gray-800 sm:text-2xl">
          ตารางสอบกลางภาค &#40;SUM&#41;
          <br />
          ภาคเรียนที่ 1 ปีการศึกษา 2565
        </h1>
        <p className="mt-3 text-sm leading-5 text-gray-400">เลือกแบบที่ต้องการแล้วกด Download เลย !</p>
      </header>

      <section className="mt-6 space-y-2">
        <h2 className="text-xl font-medium text-gray-600 sm:text-2xl">ระดับชั้น</h2>

        <div className="flex space-x-1">
          <button
            onClick={() => setLevel("4")}
            className="rounded-xl border border-gray-300 px-4 py-2"
            style={genBGButtonLevel("4")}
          >
            ม.4
          </button>
          <button
            onClick={() => setLevel("5")}
            className="rounded-xl border border-gray-300 px-4 py-2"
            style={genBGButtonLevel("5")}
          >
            ม.5
          </button>
          <button
            onClick={() => setLevel("6")}
            className="rounded-xl border border-gray-300 px-4 py-2"
            style={genBGButtonLevel("6")}
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
            style={genBGButtonProgram("sci-math")}
          >
            วิทย์-คณิต
          </button>
          <button
            onClick={() => setProgram("arts-math")}
            className="rounded-xl border border-gray-300 px-4 py-2"
            style={genBGButtonProgram("arts-math")}
          >
            ศิลป์คำนวณ
          </button>
          <button
            onClick={() => setProgram("arts-lang")}
            className="rounded-xl border border-gray-300 px-4 py-2"
            style={genBGButtonProgram("arts-lang")}
          >
            ศิลป์ภาษา
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
            style={genBGButtonScreenSize("ipad")}
          />
          <ScreenSizeButton
            screenSizeID="iphonex"
            title="iPhone X (19.5:9)"
            imgSrc="/assets/images/placeholder/iphonex.png"
            setScreenSize={setScreenSize}
            style={genBGButtonScreenSize("iphonex")}
          />
          <ScreenSizeButton
            screenSizeID="iphone"
            title="iPhone 8 (16:9)"
            imgSrc="/assets/images/placeholder/iphone.png"
            setScreenSize={setScreenSize}
            style={genBGButtonScreenSize("iphone")}
          />
          <ScreenSizeButton
            screenSizeID="huawei"
            title="Huawei (19.5:9, centered)"
            imgSrc="/assets/images/placeholder/huawei.png"
            setScreenSize={setScreenSize}
            style={genBGButtonScreenSize("huawei")}
          />
        </div>
      </section>

      <section className="mt-10 space-y-2">
        <h2 className="text-xl font-medium text-gray-600 sm:text-2xl">ธีมสี</h2>

        <div className="grid grid-cols-2 gap-4">
          <ThemeButton
            themeID="blue"
            title="ธีมสีน้ำเงิน"
            imgSrc="/assets/images/placeholder/blue.jpg"
            setTheme={setTheme}
            style={genBGButtonTheme("blue")}
          />
          <ThemeButton
            themeID="pink"
            title="ธีมสีชมพู"
            imgSrc="/assets/images/placeholder/pink.jpg"
            setTheme={setTheme}
            style={genBGButtonTheme("pink")}
          />
          <ThemeButton
            themeID="purple"
            title="ธีมสีม่วง"
            imgSrc="/assets/images/placeholder/purple.jpg"
            setTheme={setTheme}
            style={genBGButtonTheme("purple")}
          />
        </div>
      </section>

      <section className="mt-10 space-y-2">
        <h2 className="text-center text-xl font-medium text-gray-600 sm:text-2xl">Preview</h2>
        <ExamPreview
          imgSrc={`/assets/images/exam/sum-1-2565/preview/${theme}/M${level}/${screenSize}/${program}.jpg`}
        />
      </section>

      <Downloadbutton
        level={level}
        program={program}
        screenSize={screenSize}
        theme={theme}
        style={{ backgroundColor: primaryColor, color: getPrimaryTextColor() }}
      />

      <LongLogo className="mx-auto mt-6" color={primaryColor} />
    </div>
  )
}
