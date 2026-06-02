import { FC } from "react"
import Image from "next/image"

export const TheCastleOfCountlessLegaciesPreview: FC = () => {
  return (
    <div className="absolute top-0 left-0 z-[2] h-full w-full">
      {/* <Image src="/assets/christmas-bg-preview.png" width={2388} height={1668} /> */}
      <Image src="/assets/thecastleofcountlesslegacies-preview.png" width={2600} height={1768} alt={""} />
    </div>
  )
}

export const TheCastleOfCountlessLegacies: FC = () => {
  return (
    <div className="absolute top-[0px] left-0 -z-[2] h-[1668px] w-[2700px] ">
      {/* <Image src="/assets/christmas-bg.png" width={2388} height={1668} /> */}
      <Image src="/assets/thecastleofcountlesslegacies.png" width={2388} height={1768} alt={""} />
    </div>
  )
}

export default TheCastleOfCountlessLegacies
