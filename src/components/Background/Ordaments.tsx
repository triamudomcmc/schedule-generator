import { FC } from "react";
import { BottomRightDeco, TopLeftDeco, TopRightDeco } from "./Decorations";

export const OrdamentsPreview: FC<{ color: string }> = ({ color }) => {
  return (
    <div className="w-full h-full absolute top-0 left-0">
      <div className="absolute left-[20px] w-[94px] top-[1px]">
        <TopLeftDeco color={color} />
      </div>
      <div className="absolute right-[23px] w-[93px] top-[1px]">
        <TopRightDeco color={color} />
      </div>
      <div className="absolute bottom-[7px] w-[90px] right-[8.8px]">
        <BottomRightDeco color={color} />
      </div>
    </div>
  );
};

const ChristmasDeco: FC<{ color: string }> = ({ color }) => {
  return (
    <div className="w-[2388px] h-[1668px] absolute top-[50px] left-0 z-[99]">
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
