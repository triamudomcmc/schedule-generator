import { hexToRgbA } from "@utils/hexToRgb";
import type { NextPage } from "next";
import { useEffect } from "react";
const InApp = require("detect-inapp");

const Generate: NextPage = () => {
  const rooms = [
    276, 277, 278, 341, 342, 343, 344, 345, 437, 438, 446, 447, 448, 65, 66, 661, 662, 664, 665, 666, 667, 70, 71, 72,
    834, 835, 842, 843, 844, 845, 846, 942, 943, 945, 946, 947, 332, 333, 334, 335, 336, 431, 432, 436, 443, 444, 445,
    642, 651, 652, 654, 655, 656, 657, 812, 813, 814, 815, 822, 823, 824, 825, 832, 833, 931, 932, 933, 934, 935, 936,
    937, 941, 125, 126, 143, 144, 145, 146, 153, 154, 155, 156, 222, 223, 224, 225, 226, 227, 228, 229, 28, 29, 32, 38,
    39, 48, 49, 58, 59, 73, 74, 75, 76, 77, 78, 79, 80, 81,
  ];

  const download = async (room: number) => {
    const requestColors = {
      bg: hexToRgbA("#FFFFFF"),
      t1: hexToRgbA("#A40A14"),
      t2: hexToRgbA("#2B4A05"),
      c1: hexToRgbA("#4B6C57"),
      c2: hexToRgbA("#718049"),
      c3: hexToRgbA("#B19B8C"),
      c4: hexToRgbA("#9A715D"),
      c5: hexToRgbA("#B0000C"),
    };

    let r = (Math.random() + 1).toString(36).substring(10);
    const imgUrl = `/api/hello?room=${room}&colorScheme=${JSON.stringify(requestColors)}&r=${r}&bg=${"mistletoe"}`;

    const res = await fetch(imgUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    if (res.ok) {
      const inapp = new InApp(navigator.userAgent || navigator.vendor);
      if (inapp.browser === "line" || inapp.browser === "messenger" || inapp.browser === "facebook") {
        const a = document.createElement("a");
        a.href = imgUrl;
        a.download = `${room}.jpg`;
        document.body.appendChild(a);
        a.click();
        a.remove();
      } else {
        const a = document.createElement("a");
        a.href = window.URL.createObjectURL(await res.blob());
        a.download = `${room}.jpg`;
        document.body.appendChild(a);
        a.click();
        a.remove();
      }
    }
  };

  useEffect(async () => {
    for (const r of rooms) {
      await download(r);
    }
  }, []);

  return <span>ok</span>;
};

export default Generate;
