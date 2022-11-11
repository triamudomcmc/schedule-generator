import { FC } from "react"
import { BottomRightDeco, TopLeftDeco, TopRightDeco } from "./Decorations"

export const OrdamentsPreview: FC<{ color: string }> = ({ color }) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full">
      <div className="relative left-[20px] top-[1px] w-[94px]">
        <TopLeftDeco color={color} />
      </div>
      <div className="relative right-[23px] top-[1px] w-[93px]">
        <TopRightDeco color={color} />
      </div>
      <div className="relative bottom-[7px] right-[8.8px] w-[90px]">
        <BottomRightDeco color={color} />
      </div>
    </div>
  )
}

const ChristmasDeco: FC<{ color: string }> = ({ color }) => {
  return (
    // <div className="absolute top-[50px] left-0 z-[99] h-[1668px] w-[2388px]">
    <div className="absolute top-[50px] left-0 z-[99] h-[1768px] w-[2600px]">
      <div className="relative left-[126px] top-[-8px]">
        <TopLeftDeco color={color} />
      </div>
      <div className="relative right-[168px] top-[-8px]">
        <TopRightDeco color={color} />
      </div>
      <div className="relative bottom-[10px] right-[68.82px]">
        <BottomRightDeco color={color} />
      </div>
    </div>
  )
}

export default ChristmasDeco
