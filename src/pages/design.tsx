import { Logo } from "@components";
import type { NextPage } from "next";
import Head from "next/head";

const Theme = {
  primary: "#599BA4",
  secondary: "#DEA54B",
  monday: "#F4CD00",
  tuesday: "#FF92A6",
  wednesday: "#ADE374",
  thursday: "#FF9417",
  logo: "#599BA4",
};

interface MockDataSchedule {
  name: string;
  teacher: string;
}

interface MockData {
  room: string;
  branch: string;
  teachers: string[];
  data: Record<string, MockDataSchedule>;
}

const Mock: MockData = {
  room: "444",
  branch: "วิทยาศาสตร์-บริหาร",
  teachers: ["ครูภวิชช์ อรุณวรรณ", "ครูยุพิน ผลเจริญ"],
  data: {
    "1:1": {
      name: "เคมี",
      teacher: "ครูกัญวนันต์",
    },
    "1:2": {
      name: "ชีววิทยา",
      teacher: "ครูประพนธ์",
    },
    "1:3": {
      name: "คณิตศาสตร์",
      teacher: "ครูพิมวดี",
    },
    "1:4": {
      name: "คณิตศาสตร์",
      teacher: "ครูพิมลพรรณ",
    },
    "1:5": {
      name: "สุขศึกษา\nและพลศึกษา",
      teacher: "ครูพิชาธรณ์+ครูสุภัตรา",
    },
    "1:6": {
      name: "ศิลปะ",
      teacher: "ครูลัดดา",
    },
    "2:1": {
      name: "สังคมศึกษาฯ",
      teacher: "ครูนำโชค",
    },
    "2:2": {
      name: "สังคมศึกษาฯ",
      teacher: "ครูนำโชค",
    },
    "2:3": {
      name: "ฟิสิกส์",
      teacher: "ครูณัฐวัชร์",
    },
    "2:4": {
      name: "ฟิสิกส์",
      teacher: "ครูณัฐวัชร์",
    },
    "2:5": {
      name: "กฎหมายที่ควรรู้\n/ตำรงชีวิต",
      teacher: "ครูธีรศักดิ์",
    },
    "3:1": {
      name: "คณิตศาสตร์",
      teacher: "ครูพิมวดี",
    },
    "3:2": {
      name: "คณิตศาสตร์",
      teacher: "ครูพิมลพรรณ",
    },
    "3:3": {
      name: "ภาษาอังกฤษ",
      teacher: "ครูอดิศักดิ์",
    },
    "3:4": {
      name: "ภาษาอังกฤษ",
      teacher: "ครูอดิศัดิ์",
    },
    "3:5": {
      name: "วิทยาการเกษตร",
      teacher: "ครูกิติยา",
    },
    "4:1": {
      name: "ชีววิทยา",
      teacher: "ครูประพนธ์",
    },
    "4:2": {
      name: "เคมี",
      teacher: "ครูกัญวนันต์",
    },
    "4:3": {
      name: "ภาษาอังกฤษ",
      teacher: "Mr.Michael",
    },
    "4:4": {
      name: "ภาษาไทย",
      teacher: "ครูภวิชช์",
    },
  },
};

const Design: NextPage = () => {
  const genSchedule = (period: number) => {
    return (
      <>
        {Array(4)
          .fill("")
          .map((_, i) => {
            const name = Mock?.data?.hasOwnProperty(`${i + 1}:${period}`)
              ? Mock?.data[`${i + 1}:${period}`].name
              : "" ?? "";
            const teacher = Mock?.data?.hasOwnProperty(`${i + 1}:${period}`)
              ? Mock?.data[`${i + 1}:${period}`].teacher
              : "" ?? "";

            return (
              <div className="button" key={i}>
                <div className="text">
                  <strong className="subject">{name}</strong>
                  <p className="teacher">{teacher.replace("+", " ")}</p>
                </div>
              </div>
            );
          })}
      </>
    );
  };

  const Days = [
    {
      name: "จันทร์",
      color: Theme.monday,
    },
    {
      name: "อังคาร",
      color: Theme.tuesday,
    },
    {
      name: "พุธ",
      color: Theme.wednesday,
    },
    {
      name: "พฤหัสฯ",
      color: Theme.thursday,
    },
    /*
    {
      name: "ศุกร์",
      color: "#45D2F1",
    },
    */
  ];

  return (
    <>
      <Head>
        <title>ตารางเรียน ภาคเรียนที่ 2/2021</title>
      </Head>
      <article className="wrapper">
        <header className="header">
          <div className="left">
            {/*<div className="bar"></div>*/}
            <div className="title-container">
              <h1 className="title" style={{ color: Theme.primary }}>
                ตารางเรียน
              </h1>
              <p className="subtitle" style={{ color: Theme.secondary }}>
                ภาคเรียนที่ 2/2021
              </p>
            </div>
          </div>
          <div className="right">
            <h2 className="room" style={{ color: Theme.primary }}>
              ห้อง {Mock.room} | {Mock.branch}
            </h2>
            <div className="teacher" style={{ color: Theme.secondary }}>
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
          <div className="schedules">
            <div className="mon-to-thurs">
              {/* 1 */}
              <div className="col">
                <div className="time">08.00-08.50</div>
                {genSchedule(1)}
              </div>
              {/* break10 */}
              <div className="col">
                <div className="break10-button">
                  <p className="text">
                    พัก
                    <br />
                    10
                    <br />
                    นาที
                  </p>
                </div>
              </div>
              {/* 2 */}
              <div className="col">
                <div className="time">09.00-09.50</div>
                {genSchedule(2)}
              </div>
              {/* break10 */}
              <div className="col">
                <div className="break10-button">
                  <p className="text">
                    พัก
                    <br />
                    10
                    <br />
                    นาที
                  </p>
                </div>
              </div>
              {/* 3 */}
              <div className="col">
                <div className="time">10.00-10.50</div>
                {genSchedule(3)}
              </div>
              {/* break10 */}
              <div className="col">
                <div className="break10-button">
                  <p className="text">
                    พัก
                    <br />
                    10
                    <br />
                    นาที
                  </p>
                </div>
              </div>
              {/* 4 */}
              <div className="col">
                <div className="time">11.00-11.50</div>
                {genSchedule(4)}
              </div>
              {/* lunchbreak */}
              <div className="col">
                <div className="lunch-button">
                  <p className="text">
                    พัก
                    <br />
                    กลาง
                    <br />
                    วัน
                  </p>
                </div>
              </div>
              {/* 5 */}
              <div className="col">
                <div className="time">13.00-13.50</div>
                {genSchedule(5)}
              </div>
              {/* break10 */}
              <div className="col">
                <div className="break10-button">
                  <p className="text">
                    พัก
                    <br />
                    10
                    <br />
                    นาที
                  </p>
                </div>
              </div>
              {/* 6 */}
              <div className="col">
                <div className="time">14.00-14.50</div>
                {genSchedule(6)}
              </div>
            </div>
            {/*
            <div className="fri">
              <div className="button">
                <p className="text">เรียนวิชารักษาดินแดน</p>
              </div>
            </div>
            */}
          </div>
        </main>
        <Logo color={Theme.logo} />
      </article>
    </>
  );
};

export default Design;
