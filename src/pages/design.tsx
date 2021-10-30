import { Logo } from "@components";
import type { NextPage } from "next";
import Head from "next/head";

const Mock = {
  room: "999",
  program: "ภาษา-ฝรั่งเศส",
  teachers: ["ครูเรียนเด่น เล่นดี", "ครูทอปเท็น ทอปเท็น"],
};

const Days = [
  {
    name: "จันทร์",
    color: "#F4CD00",
  },
  {
    name: "อังคาร",
    color: "#FF92A6",
  },
  {
    name: "พุธ",
    color: "#ADE374",
  },
  {
    name: "พฤหัสฯ",
    color: "#FF9417",
  },
  {
    name: "ศุกร์",
    color: "#45D2F1",
  },
];

const Design: NextPage = () => {
  return (
    <>
      <Head>
        <title>ตารางเรียน 2/2021</title>
      </Head>
      <article className="wrapper">
        <header className="header">
          <div className="left">
            <div className="bar"></div>
            <div className="title-container">
              <h1 className="title">ตารางเรียน</h1>
              <p className="subtitle">ภาคเรียนที่ 2/2021</p>
            </div>
          </div>
          <div className="right">
            <h2 className="room">
              ห้อง {Mock.room} | {Mock.program}
            </h2>
            <div className="teacher">
              {Mock.teachers.map((teacher) => (
                <p className="text" key={teacher}>
                  {teacher}
                </p>
              ))}
            </div>
          </div>
        </header>
        <main className="main">
          <div className="days">
            {Days.map((day) => (
              <div className="day" key={day.name}>
                <div className="button" style={{ backgroundColor: day.color }}>
                  {day.name}
                </div>
                <div className="line" style={{ backgroundColor: day.color }}></div>
              </div>
            ))}
          </div>
        </main>
        <Logo color="#2B56A8" />
      </article>
    </>
  );
};

export default Design;
