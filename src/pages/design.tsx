import Logo from "@components/Logo";
import type { NextPage } from "next";

const Design: NextPage = () => {
  return (
    <>
      <main className="wrapper">
        <div className="header">
          <div className="left">
            <div className="bar"></div>
            <div className="title-container">
              <h1 className="title">ตารางเรียน</h1>
              <p className="subtitle">ภาคเรียนที่ 2/2021</p>
            </div>
          </div>
          <div className="right">
            <h2 className="room">ม.4 ห้อง 999 | ภาษา-ฝรั่งเศส</h2>
            <div className="teacher">
              <p className="text">ครูเรียนเด่น เล่นดี</p>
              <p className="text">ครูทอปเท็น ทอปเท็น</p>
            </div>
          </div>
        </div>
        <Logo color="#2B56A8" />
      </main>
    </>
  );
};

export default Design;
