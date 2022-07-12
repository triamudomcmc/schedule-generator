import Image from "next/image"
import { FC } from "react"

export const ExamPreview: FC<{ imgSrc: string }> = ({ imgSrc }) => {
  return (
    <div className="relative h-[350px]">
      <Image layout="fill" objectFit="contain" className="h-full w-full" src={imgSrc} />
    </div>
  )
}
