import { FC } from "react";
import Image from "next/image";

const Mistletoe: FC = () => {
  return (
    <div className="w-[2388px] h-[1668px] absolute top-0 left-0 z-[2]">
      <Image src="/assets/christmas-bg.png" width={2388} height={1668} />
    </div>
  );
};

export default Mistletoe;
