import Image from "next/image"
import { Dispatch, FC, SetStateAction } from "react"
import { ThemeType } from "../Page"

export const ThemeButton: FC<{
  title: string
  imgSrc: string
  themeID: ThemeType
  setTheme: Dispatch<SetStateAction<ThemeType>>
  style: object
}> = ({ title, imgSrc, themeID, setTheme, style }) => {
  return (
    <button onClick={() => setTheme(themeID)} className="flex flex-col gap-2">
      <div style={style} className="rounded-md border border-gray-300 p-6 transition-colors">
        <Image width={270} height={480} className="rounded-md" src={imgSrc} alt={""}/>
      </div>
      <p>{title}</p>
    </button>
  )
}
