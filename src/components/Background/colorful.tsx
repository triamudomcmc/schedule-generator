/* eslint-disable jsx-a11y/alt-text */
import { FC } from "react"
import Image from "next/image"

export const ColorfulPreview: FC = () => {
  return (
    <div className="absolute top-0 left-0 z-[2] h-full w-full">
      {/* <div className="absolute top-[0px] left-[2.5px] -z-[2] h-[277px] w-[406px]"> */}
      {/* <Image src="/assets/christmas-bg-preview.png" width={2388} height={1668} /> */}

      <Image src="/assets/colorful-bg.png" width={2388} height={1668} />
    </div>
  )
}

const Colorful: FC = () => {
  return (
    // <div className="absolute top-[50px] left-0 z-[2] h-[1668px] w-[2388px]">
    <div className="absolute top-[0px] left-0 -z-[2] h-[1886px] w-[2700px] ">
      {/* <Image src="/assets/christmas-bg.png" width={2388} height={1668} /> */}
      <Image src="/assets/colorful-bg.png" width={2700} height={1886} />
    </div>
  )
}

export default Colorful
