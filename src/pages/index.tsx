import type { NextPage } from "next";
import { ChevronUpIcon } from "@heroicons/react/outline";
import { ColorPicker } from "@components/ColorPicker";
import React, { useEffect, useState } from "react";
import { hexToRgbA, rawRgbColorToCss } from "@utils/hexToRgb";
import classnames from "classnames";
import Head from "next/head";
import { Preview } from "@components";
import { CheckIcon, ExclamationIcon, XIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";
import { Ellipsis } from "@components/Loader/Ellipsis";

const HomeIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="text-gray-400 h-7 w-7"
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
  );
};

const Theme = {
  Pink: {
    name: "Tooth Fairy",
    bg: hexToRgbA("#FFFFFF"),
    t1: hexToRgbA("#D2488B"),
    t2: hexToRgbA("#EAA4C6"),
    c1: hexToRgbA("#EDB7D2"),
    c2: hexToRgbA("#EAA4C6"),
    c3: hexToRgbA("#E387B3"),
    c4: hexToRgbA("#DD6EA5"),
  },
  Purple: {
    name: "The Witches’ Craft",
    bg: hexToRgbA("#FFFFFF"),
    t1: hexToRgbA("#8861DC"),
    t2: hexToRgbA("#B99CF8"),
    c1: hexToRgbA("#B99CF8"),
    c2: hexToRgbA("#A787EC"),
    c3: hexToRgbA("#916CDF"),
    c4: hexToRgbA("#8860DC"),
  },
  Red: {
    name: "Bloody Mary",
    bg: hexToRgbA("#FFFFFF"),
    t1: hexToRgbA("#D17474"),
    t2: hexToRgbA("#E28B8B"),
    c1: hexToRgbA("#EBB8B8"),
    c2: hexToRgbA("#E49E9E"),
    c3: hexToRgbA("#E08484"),
    c4: hexToRgbA("#D17474"),
  },
  Blue: {
    name: "Fairy Godmother",
    bg: hexToRgbA("#FFFFFF"),
    t1: hexToRgbA("#53ABDC"),
    t2: hexToRgbA("#88CBF1"),
    c1: hexToRgbA("#9CD7F8"),
    c2: hexToRgbA("#88CBF1"),
    c3: hexToRgbA("#65BDEE"),
    c4: hexToRgbA("#53ABDC"),
  },
  Orange: {
    name: "Jack O’Lantern",
    bg: hexToRgbA("#FFFFFF"),
    t1: hexToRgbA("#EA984D"),
    t2: hexToRgbA("#F8BA82"),
    c1: hexToRgbA("#F8BA82"),
    c2: hexToRgbA("#F1AB6A"),
    c3: hexToRgbA("#EA984D"),
    c4: hexToRgbA("#DD8E44"),
  },
  Black: {
    name: "Dracula Untold",
    bg: hexToRgbA("#FFFFFF"),
    t1: hexToRgbA("#828282"),
    t2: hexToRgbA("#A8A8A8"),
    c1: hexToRgbA("#ADADAD"),
    c2: hexToRgbA("#989898"),
    c3: hexToRgbA("#828282"),
    c4: hexToRgbA("#7C7C7C"),
  },
  Green: {
    name: "Mr. Frankenstein",
    bg: hexToRgbA("#FFFFFF"),
    t1: hexToRgbA("#96C060"),
    t2: hexToRgbA("#B5D889"),
    c1: hexToRgbA("#BDDB99"),
    c2: hexToRgbA("#B5D889"),
    c3: hexToRgbA("#A8D174"),
    c4: hexToRgbA("#96C060"),
  },
};

const Home: NextPage = () => {
  const getRandom = (arr: Array<string>) => {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  const [waiting, setWaiting] = useState(false);
  const [error, setError] = useState(false);
  const [recentError, setRecentError] = useState(setTimeout(() => {}));

  const [invalidRoom, setInvalidRoom] = useState(false);
  const [preset, setPreset] = useState(false);
  // const [qualityPanel, setQualityPanel] = useState(false);
  const [room, setRoom] = useState("");
  const rooms = [
    276, 277, 278, 341, 342, 343, 344, 345, 437, 438, 446, 447, 448, 65, 66, 661, 662, 664, 665, 666, 667, 70, 71, 72,
    834, 835, 842, 843, 844, 845, 846, 942, 943, 945, 946, 947, 332, 333, 334, 335, 336, 431, 432, 436, 443, 444, 445,
    642, 651, 652, 654, 655, 656, 657, 812, 813, 814, 815, 822, 823, 824, 825, 832, 833, 931, 932, 933, 934, 935, 936,
    937, 941, 125, 126, 143, 144, 145, 146, 153, 154, 155, 156, 222, 223, 224, 225, 226, 227, 228, 229, 28, 29, 32, 38,
    39, 48, 49, 58, 59, 73, 74, 75, 76, 77, 78, 79, 80, 81,
  ];

  useEffect(() => {
    if (!rooms.includes(parseInt(room))) {
      setInvalidRoom(true);
    } else {
      setInvalidRoom(false);
    }
  }, [room]);

  const [colors, setColors] = useState(Theme.Pink);

  // const qualities = ["low", "standard", "high", "best"];

  // const [quality, setQuality] = useState(0);

  const toggleError = () => {
    setError(true);

    clearTimeout(recentError);

    const timeout = setTimeout(() => {
      setError(false);
    }, 3000);

    setRecentError(timeout);
  };

  const download = async () => {
    if (invalidRoom) {
      toggleError();
      return;
    }

    const requestColors = {
      bg: colors.bg,
      t1: colors.t1,
      t2: colors.t2,
      c1: colors.c1,
      c2: colors.c2,
      c3: colors.c3,
      c4: colors.c4,
    };

    let r = (Math.random() + 1).toString(36).substring(10);
    const imgUrl = `/api/hello?room=${room}&colorScheme=${JSON.stringify(requestColors)}&r=${r}`;

    setWaiting(true);

    const res = await fetch(imgUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    if (res.ok) {
      const a = document.createElement("a");
      a.href = window.URL.createObjectURL(await res.blob());
      a.download = `${room}.jpg`;
      document.body.appendChild(a);
      a.click();
      a.remove();
    }
    setWaiting(false);
  };

  const toggle = {
    open: {
      rotate: 0,
    },
    close: {
      rotate: 180,
    },
  };

  return (
    <>
      <Head>
        <title>ระบบจัดการตารางเรียน 2/2021</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="fixed top-0 flex justify-center w-full">
        <motion.div
          initial={{ y: -40 }}
          animate={error ? { y: 0 } : { y: -40 }}
          className="flex items-center px-4 py-1 space-x-1 text-white bg-red-500 border border-red-600 rounded-full shadow-lg"
        >
          <ExclamationIcon className="w-5 h-5 animate-pulse" />
          <span className="text-sm">หมายเลขห้องไม่ถูกต้อง</span>
        </motion.div>
      </div>
      <div
        className="flex items-center justify-center w-full min-h-screen px-4 py-4 transition-colors"
        style={{ backgroundColor: rawRgbColorToCss(colors.c1) }}
      >
        <div className="font-ui py-10 px-12 rounded-xl shadow-lg bg-white max-w-[500px]">
          <div>
            <h1 className="mb-1 text-xl font-medium text-gray-800 sm:text-2xl">ระบบจัดการตารางเรียน 2/2021</h1>
            <p className="mt-3 text-sm leading-5 text-gray-400">
              ระบบนี้เป็นระบบสำหรับดาวน์โหลดตารางเรียนที่ทาง กช.&nbsp;
              <br className="hidden sm:block" />
              จัดทำขึ้น ไม่ได้มีความเกี่ยวข้องกับทางโรงเรียนแต่อย่างใด
              <br />
            </p>
          </div>
          <div className="mt-12 space-y-2">
            <h2 className="text-xl font-medium text-gray-600 sm:text-2xl">ใส่เลขห้องเรียน</h2>
            <div className="flex flex-col items-start sm:flex-row sm:items-center">
              <div className="relative w-48">
                <input
                  onChange={(e) => {
                    if (e.target.value.length > 3) return;
                    setRoom(e.target.value);
                  }}
                  value={room}
                  placeholder="เลขห้อง"
                  className={classnames(
                    "border border-gray-300 rounded-xl pl-4 pt-2 pb-1.5 w-full text-gray-500 text-xl",
                    invalidRoom ? "border-red-400" : " border-green-400"
                  )}
                />
                <div className="flex items-center justify-end absolute top-0 h-full right-3.5">
                  {!invalidRoom ? (
                    <CheckIcon className="w-5 h-5 text-green-500" />
                  ) : (
                    <XIcon className="w-5 h-5 text-red-400" />
                  )}
                </div>
              </div>
              {/*
              <div className="flex items-center">
                <h1 className="mr-2 text-lg font-medium text-gray-600">ความชัด:</h1>
                <div
                  onClick={() => {
                    setQualityPanel((prev) => !prev);
                  }}
                  className="relative flex items-center cursor-pointer"
                >
                  <PencilIcon className="w-4 h-4 mb-1 text-blue-400" />
                  <span className="text-blue-400">ปกติ</span>
                  {qualityPanel && (
                    <>
                      <div style={{ position: "fixed", top: "0px", right: "0px", bottom: "0px", left: "0px" }} />
                      <div className="absolute top-7 bg-white w-[56px] rounded-lg shadow-lg">
                        <h2 className="px-2 pt-1 text-sm text-center text-gray-800 rounded-t-lg cursor-pointer hover:bg-gray-100">
                          ต่ำ
                        </h2>
                        <h2 className="text-gray-800 cursor-pointer text-sm text-center bg-blue-50 py-0.5 px-2">
                          ปกติ
                        </h2>
                        <h2 className="text-gray-800 cursor-pointer text-sm text-center py-0.5 px-2 hover:bg-gray-100">
                          สูง
                        </h2>
                        <h2 className="px-2 pb-1 text-sm text-center text-gray-800 cursor-pointer hover:bg-gray-100">
                          สูงมาก
                        </h2>
                      </div>
                    </>
                  )}
                </div>
              </div>
              */}
            </div>
          </div>
          <div className="mt-12 space-y-4 sm:space-y-6">
            <h2 className="text-xl font-medium text-gray-600 sm:text-2xl">ปรับแต่งตารางเรียน</h2>
            <div className="flex flex-row items-center">
              <h1 className="mr-2 text-lg font-medium text-gray-600">ธีมสี: </h1>
              <div className="flex relative w-[240px] h-[44px]">
                <div className="flex w-full border border-gray-300 rounded-xl">
                  <div className="flex items-center justify-center w-9/12 cursor-pointer">
                    <div
                      style={{ backgroundColor: rawRgbColorToCss(colors.t1) }}
                      className="w-5 h-5 mr-2 rounded-full shadow-sm"
                    />
                    <span className="mt-1 text-gray-600">{colors.name}</span>
                  </div>
                  <button
                    onClick={() => {
                      setPreset((prev) => !prev);
                    }}
                    className="flex items-center justify-center w-3/12 transition-colors border-l border-gray-300 cursor-pointer hover:bg-gray-100 rounded-r-xl"
                  >
                    <motion.div variants={toggle} animate={preset ? "close" : "open"}>
                      <ChevronUpIcon className="w-5 h-5 text-gray-700" />
                    </motion.div>
                  </button>
                </div>
                {preset && (
                  <>
                    <div
                      style={{ position: "fixed", top: "0px", right: "0px", bottom: "0px", left: "0px" }}
                      onClick={() => {
                        setPreset(false);
                      }}
                    />
                    <div className="absolute w-full px-6 py-4 space-y-2 bg-white rounded-lg shadow-lg bottom-12">
                      <div className="py-2">
                        <h1 className="mb-2">ชุดสี</h1>
                        <hr className="mb-3 border-gray-300 rounded-lg border-1" />
                        <div className="space-y-2.5">
                          {Object.values(Theme).map((cols) => (
                            <div
                              onClick={() => {
                                setColors(cols);
                              }}
                              className="flex mb-1 text-gray-400 cursor-pointer"
                              key={cols.name}
                            >
                              <div
                                style={{ backgroundColor: rawRgbColorToCss(cols.t1) }}
                                className="w-5 h-5 mr-2 rounded-full shadow-sm"
                              />
                              <h1
                                className={classnames(
                                  cols.name !== colors.name ? "hover:text-gray-500 transition-colors" : "text-gray-800"
                                )}
                              >
                                {cols.name}
                              </h1>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="flex flex-col items-start sm:items-center sm:flex-row">
              <div className="flex items-center">
                <h3 className="mr-2 text-lg font-medium text-gray-600">ชุดสี: </h3>
                <div className="flex justify-center mr-4 space-x-1">
                  <ColorPicker
                    onChange={(c) => {
                      setColors((prev) => {
                        return { ...prev, bg: c };
                      });
                    }}
                    defaultColor={colors.bg}
                  />
                  <ColorPicker
                    onChange={(c) => {
                      setColors((prev) => {
                        return { ...prev, t1: c };
                      });
                    }}
                    defaultColor={colors.t1}
                  />
                  <ColorPicker
                    onChange={(c) => {
                      setColors((prev) => {
                        return { ...prev, t2: c };
                      });
                    }}
                    defaultColor={colors.t2}
                  />
                </div>
              </div>
              <div className="flex justify-center space-x-1 ml-[46px] mt-2 sm:ml-0 sm:mt-0">
                <ColorPicker
                  onChange={(c) => {
                    setColors((prev) => {
                      return { ...prev, c1: c };
                    });
                  }}
                  defaultColor={colors.c1}
                />
                <ColorPicker
                  onChange={(c) => {
                    setColors((prev) => {
                      return { ...prev, c2: c };
                    });
                  }}
                  defaultColor={colors.c2}
                />
                <ColorPicker
                  onChange={(c) => {
                    setColors((prev) => {
                      return { ...prev, c3: c };
                    });
                  }}
                  defaultColor={colors.c3}
                />
                <ColorPicker
                  onChange={(c) => {
                    setColors((prev) => {
                      return { ...prev, c4: c };
                    });
                  }}
                  defaultColor={colors.c4}
                />
              </div>
            </div>
          </div>
          <div className="mt-6 sm:mt-10">
            <Preview rawTheme={colors} />
          </div>
          <div className="flex justify-center mt-8 sm:mt-10">
            <button
              onClick={download}
              className={classnames(
                "text-white rounded-xl w-full sm:w-max transition-colors",
                waiting ? "pb-[10px] pt-[2px] px-[60px]" : "py-2.5 px-6"
              )}
              style={{ backgroundColor: rawRgbColorToCss(colors.t1) }}
            >
              {!waiting ? <span>สร้างตารางเรียน</span> : <Ellipsis className="w-10" />}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
