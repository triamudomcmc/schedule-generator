import Image from "next/image"
import { CSSProperties, Dispatch, FC, SetStateAction } from "react"
import { ScreenSizeType } from "../Page"

export const ScreenSizeButton: FC<{
  title: string
  imgSrc: string
  darkMode: boolean
  screenSizeID: ScreenSizeType
  setScreenSize: Dispatch<SetStateAction<ScreenSizeType>>
  style: CSSProperties
}> = ({ title, imgSrc, screenSizeID, setScreenSize, style, darkMode }) => {
  
  const textColor = darkMode ? "text-white" : "text-black"

  return (
    <button onClick={() => setScreenSize(screenSizeID)} className="flex flex-col gap-2">
      <div style={style} className="rounded-md border border-gray-300 transition-colors">
        <Image width={250} height={250} className="rounded-md" src={imgSrc} />
      </div>
      <p className={`${textColor}`}>{title}</p>
    </button>
  )
}
