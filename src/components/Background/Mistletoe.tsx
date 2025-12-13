import { FC } from "react"
import Image from "next/image"

export const MistletoePreview: FC = () => {
  return (
    // <div className="absolute top-0 left-0 z-[2] h-full w-full">
    <div className="absolute top-[13.5px] left-[2.5px] z-[2] h-[277px] w-[406px]">
      {/* <Image src="/assets/christmas-bg-preview.png" width={2388} height={1668} /> */}
      <Image src="/assets/christmas-bg-rordor-preview.png" width={2600} height={1768} alt={""}/>

    </div>
  )
}

const Mistletoe: FC = () => {
  return (
    // <div className="absolute top-[50px] left-0 z-[2] h-[1668px] w-[2388px]">
    <div className="absolute top-[100px] left-0 z-[2] h-[1768px] w-[2600px] ">
      {/* <Image src="/assets/christmas-bg.png" width={2388} height={1668} /> */}
      <Image src="/assets/christmas-bg-rordor.png" width={2700} height={1886} alt={""}/>

    </div>
  )
}

export default Mistletoe
