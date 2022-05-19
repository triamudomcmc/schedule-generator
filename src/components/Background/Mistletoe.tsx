import { FC } from "react"
import Image from "next/image"

export const MistletoePreview: FC = () => {
  return (
    <div className="absolute top-0 left-0 z-[2] h-full w-full">
      <Image src="/assets/christmas-bg-preview.png" width={2388} height={1668} />
    </div>
  )
}

const Mistletoe: FC = () => {
  return (
    <div className="absolute top-[50px] left-0 z-[2] h-[1668px] w-[2388px]">
      <Image src="/assets/christmas-bg.png" width={2388} height={1668} />
    </div>
  )
}

export default Mistletoe
