import { FC } from "react"
import Image from "next/image"

export const BloomandbasketPreview: FC = () => {
  return (
    <div className="absolute top-0 left-0 z-[2] h-full w-full">
      <Image src="/assets/bloomandbasket.png" width={2388} height={1668} />
    </div>
  )
}

const Bloomandbasket: FC = () => {
  return (
    <div className="absolute top-[0px] left-0 -z-[2] h-[1886px] w-[2700px] ">
      <Image src="/assets/bloomandbasket.png" width={2388} height={1768} />
    </div>
  )
}

export default Bloomandbasket
