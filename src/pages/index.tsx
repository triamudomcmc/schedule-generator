import type {NextPage} from "next";
import {ChevronDownIcon, PencilIcon} from "@heroicons/react/outline";
import {ColorPicker} from "@components/ColorPicker";
import React, {useState} from "react";
import {hexToRgbA} from "@utils/hexToRgb";

const Home: NextPage = () => {

  const bgColors = ["bg-yellow-50", "bg-green-50", "bg-blue-50", "bg-pink-50"];

  const getRandom = (arr: Array<string>) => {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  const [bgColor, setBgColor] = useState(getRandom(bgColors))
  const [preset, setPreset] = useState(false);
  const [qualityPanel, setQualityPanel] = useState(false);

  const defaultColors = {
    bg: hexToRgbA("#FFFFFF"),
    c1: hexToRgbA("#599BA4"),
    c2: hexToRgbA("#F4CD00"),
    c3: hexToRgbA("#FF92A6"),
    c4: hexToRgbA("#ADE374"),
    c5: hexToRgbA("#FF9417"),
    c6: hexToRgbA("#45D2F1"),
  };

  const [colors, setColors] = useState(defaultColors);

  const qualities = ["low", "standard", "high", "best"];

  const [quality, setQuality] = useState(0);

  const resetDefault = () => {
    setColors(defaultColors);
  };

  return (
    <div className={"flex justify-center items-center min-h-screen " + bgColor}>
      <div className="font-ui py-10 px-12 rounded-xl shadow-lg space-y-12 bg-white max-w-[500px]">
        <div>
          <h1 className="text-2xl font-medium text-gray-800 mb-1">ระบบจัดการตารางเรียน 2/2564</h1>
          <p className="text-gray-400">ระบบนี้เป็นระบบสำหรับดาวน์โหลดตารางเรียนที่ทาง กช.</p>
          <p className="text-gray-400">จัดทำขึ้น ไม่ได้มีความเกี่ยวข้องกับทางโรงเรียนแต่อย่างใด</p>
        </div>
        <div className="space-y-6">
          <h1 className="text-gray-600 font-medium text-2xl">ตั้งค่าตารางสอน</h1>
          <div className="flex items-center space-x-8">
            <div className="relative w-48">
              <span className="flex items-center absolute h-full pl-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.4}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </span>
              <input
                placeholder="เลขห้อง"
                className="border border-gray-300 rounded-xl pl-12 pt-1.5 pb-0.5 w-full text-gray-500 text-xl"
              />
            </div>
            <div className="flex items-center">
              <h1 className="text-gray-600 font-medium text-lg mr-2">ความชัด:</h1>
              <div
                onClick={() => {
                  setQualityPanel((prev) => !prev);
                }}
                className="flex relative items-center cursor-pointer"
              >
                <PencilIcon className="w-4 h-4 text-blue-400 mb-1"/>
                <span className="text-blue-400">ปกติ</span>
                {qualityPanel && (
                  <>
                    <div style={{position: 'fixed', top: '0px', right: '0px', bottom: '0px', left: '0px'}}/>
                    <div className="absolute top-7 bg-white w-[56px] rounded-lg shadow-lg">
                      <h2 className="text-gray-800 cursor-pointer text-sm text-center rounded-t-lg pt-1 px-2 hover:bg-gray-100">
                        ต่ำ
                      </h2>
                      <h2 className="text-gray-800 cursor-pointer text-sm text-center bg-blue-50 py-0.5 px-2">ปกติ</h2>
                      <h2 className="text-gray-800 cursor-pointer text-sm text-center py-0.5 px-2 hover:bg-gray-100">
                        สูง
                      </h2>
                      <h2 className="text-gray-800 cursor-pointer text-sm text-center pb-1 px-2 hover:bg-gray-100">
                        สูงมาก
                      </h2>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <h1 className="text-gray-600 font-medium text-2xl">ปรับแต่งตารางสอน</h1>
          <div className="flex items-center">
            <h1 className="text-gray-600 font-medium text-lg mr-2">ชุดสี: </h1>
            <div className="flex justify-center space-x-1 mr-4">
              <ColorPicker defaultColor={colors.bg}/>
              <ColorPicker defaultColor={colors.c1}/>
            </div>
            <div className="flex justify-center space-x-1">
              <ColorPicker defaultColor={colors.c2}/>
              <ColorPicker defaultColor={colors.c3}/>
              <ColorPicker defaultColor={colors.c4}/>
              <ColorPicker defaultColor={colors.c5}/>
              <ColorPicker defaultColor={colors.c6}/>
            </div>
          </div>
          <div className="flex items-center space-x-10">
            <div className="flex relative w-[200px] h-[44px]">
              <div className="flex border border-gray-300 w-full rounded-xl">
                <div className="flex items-center justify-center w-8/12">
                  <span className="text-gray-600 mt-1">PRESETS</span>
                </div>
                <button
                  onClick={() => {
                    setPreset((prev) => !prev);
                  }}
                  className="flex items-center justify-center w-4/12 border-l border-gray-300 cursor-pointer hover:bg-gray-100 rounded-r-xl"
                >
                  <ChevronDownIcon className="w-5 h-5 text-gray-700"/>
                </button>
              </div>
              {preset && (
                <>
                  <div style={{position: 'fixed', top: '0px', right: '0px', bottom: '0px', left: '0px'}} onClick={() => {
                    setPreset(false)
                  }}/>
                  <div className="absolute top-12 bg-white w-full rounded-lg shadow-lg px-6 py-4 space-y-2">
                    <div className="border-b border-gray-300 py-2">
                      <h1 className="mb-1.5">ชุดสี</h1>
                      <h2 onClick={resetDefault} className="text-gray-400 mb-1 cursor-pointer">
                        ค่าเริ่มต้น
                      </h2>
                    </div>
                    <div className="border-b border-gray-300 py-2">
                      <h1 className="mb-1.5">ธีม (ยังไม่เปิดใช้งาน)</h1>
                      <h2 className="text-gray-400 mb-1">Christmas</h2>
                      <h2 className="text-gray-400 mb-1">Dracula</h2>
                    </div>
                    <div className="py-2">
                      <h1 className="mb-1.5">คำสั่งเพิ่มเติม</h1>
                      <h2 className="text-gray-400 mb-1">นำเข้าชุดสี</h2>
                      <h2 className="text-gray-400 mb-1">ส่งออกชุดสีนี้</h2>
                    </div>
                  </div>
                </>
              )}
            </div>
            <button className="bg-blue-500 text-white rounded-xl px-6 py-2.5">
              <span>สร้างตารางสอน</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
