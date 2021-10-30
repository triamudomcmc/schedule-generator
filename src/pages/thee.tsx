import { Preview } from "@components";
import type { NextPage } from "next";
import Head from "next/head";

const rooms = [
  276, 277, 278, 341, 342, 343, 344, 345, 437, 438, 446, 447, 448, 65, 66, 661, 662, 664, 665, 666, 667, 70, 71, 72,
  834, 835, 842, 843, 844, 845, 846, 942, 943, 945, 946, 947, 332, 333, 334, 335, 336, 431, 432, 436, 443, 444, 445,
  642, 651, 652, 654, 655, 656, 657, 812, 813, 814, 815, 822, 823, 824, 825, 832, 833, 931, 932, 933, 934, 935, 936,
  937, 941, 125, 126, 143, 144, 145, 146, 153, 154, 155, 156, 222, 223, 224, 225, 226, 227, 228, 229, 28, 29, 32, 38,
  39, 48, 49, 58, 59, 73, 74, 75, 76, 77, 78, 79, 80, 81,
];

const Theme = {
  Purple: {
    bg: "#FFFFFF",
    t1: "#8861DC",
    t2: "#B99CF8",
    c1: "#B99CF8",
    c2: "#A787EC",
    c3: "#916CDF",
    c4: "#8860DC",
  },
};

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ระบบจัดตารางเรียน 2/2021</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {/*<Preview theme={Theme.Default} />*/}
      <div className="popup">
        <div className="header">
          <h1 className="title">ระบบจัดการตารางเรียน 2/2021</h1>
          <div className="description">
            <p>ระบบนี้เป็นระบบสำหรับดาวน์โหลดตารางเรียนที่ทาง กช.</p>
            <p>จัดทำขึ้น ไม่ได้มีความเกี่ยวข้องกับทางโรงเรียนแต่อย่างใด</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
