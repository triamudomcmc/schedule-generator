import { FC } from "react";
import { ColorType } from "@components/ColorPicker";
import { BottomRightDeco, TopLeftDeco, TopRightDeco } from "./Decorations";

const ChristmasDeco: FC<{ color: string }> = ({ color }) => {
  return (
    <div className="w-[2388px] h-[1668px] absolute top-0 left-0 z-[99]">
      <div className="absolute left-[126px] top-[-8px]">
        <TopLeftDeco color={color} />
      </div>
      <div className="absolute right-[168px] top-[-8px]">
        <TopRightDeco color={color} />
      </div>
      <div className="absolute bottom-[10px] right-[68.82px]">
        <BottomRightDeco color={color} />
      </div>
    </div>
  );
};

export default ChristmasDeco;
