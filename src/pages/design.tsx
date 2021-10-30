import { Logo } from "@components";
import type { NextPage } from "next";
import Head from "next/head";

const Mock = {
  room: "444",
  branch: "วิทยาศาสตร์ - บริหาร",
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
      name: "สุขศึกษาและพลศึกษา",
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
      name: "กฎหมายที่ควรรู้/ตำรงชีวิต",
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
        <title>ตารางเรียน ภาคเรียนที่ 2/2021</title>
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
              ห้อง {Mock.room} | {Mock.branch}
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
          <div className="schedules">
            <div className="mon-to-thurs">
              {/* 1 */}
              <div className="col">
                <div className="button">
                  <div className="text">
                    <strong className="subject">เทนนิส</strong>
                    <p className="teacher">ครูนิซาฮ์</p>
                  </div>
                </div>
                <div className="button">
                  <div className="text">
                    <strong className="subject">เทนนิส</strong>
                    <p className="teacher">ครูนิซาฮ์</p>
                  </div>
                </div>
                <div className="button">
                  <div className="text">
                    <strong className="subject">เทนนิส</strong>
                    <p className="teacher">ครูนิซาฮ์</p>
                  </div>
                </div>
                <div className="button">
                  <div className="text">
                    <strong className="subject">เทนนิส</strong>
                    <p className="teacher">ครูนิซาฮ์</p>
                  </div>
                </div>
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
                <div className="button">
                  <div className="text">
                    <strong className="subject">เทนนิส</strong>
                    <p className="teacher">ครูนิซาฮ์</p>
                  </div>
                </div>
                <div className="button">
                  <div className="text">
                    <strong className="subject">เทนนิส</strong>
                    <p className="teacher">ครูนิซาฮ์</p>
                  </div>
                </div>
                <div className="button">
                  <div className="text">
                    <strong className="subject">เทนนิส</strong>
                    <p className="teacher">ครูนิซาฮ์</p>
                  </div>
                </div>
                <div className="button">
                  <div className="text">
                    <strong className="subject">เทนนิส</strong>
                    <p className="teacher">ครูนิซาฮ์</p>
                  </div>
                </div>
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
                <div className="button">
                  <div className="text">
                    <strong className="subject">เทนนิส</strong>
                    <p className="teacher">ครูนิซาฮ์</p>
                  </div>
                </div>
                <div className="button">
                  <div className="text">
                    <strong className="subject">เทนนิส</strong>
                    <p className="teacher">ครูนิซาฮ์</p>
                  </div>
                </div>
                <div className="button">
                  <div className="text">
                    <strong className="subject">เทนนิส</strong>
                    <p className="teacher">ครูนิซาฮ์</p>
                  </div>
                </div>
                <div className="button">
                  <div className="text">
                    <strong className="subject">เทนนิส</strong>
                    <p className="teacher">ครูนิซาฮ์</p>
                  </div>
                </div>
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
                <div className="button">
                  <div className="text">
                    <strong className="subject">เทนนิส</strong>
                    <p className="teacher">ครูนิซาฮ์</p>
                  </div>
                </div>
                <div className="button">
                  <div className="text">
                    <strong className="subject">เทนนิส</strong>
                    <p className="teacher">ครูนิซาฮ์</p>
                  </div>
                </div>
                <div className="button">
                  <div className="text">
                    <strong className="subject">เทนนิส</strong>
                    <p className="teacher">ครูนิซาฮ์</p>
                  </div>
                </div>
                <div className="button">
                  <div className="text">
                    <strong className="subject">เทนนิส</strong>
                    <p className="teacher">ครูนิซาฮ์</p>
                  </div>
                </div>
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
                <div className="button">
                  <div className="text">
                    <strong className="subject">เทนนิส</strong>
                    <p className="teacher">ครูนิซาฮ์</p>
                  </div>
                </div>
                <div className="button">
                  <div className="text">
                    <strong className="subject">เทนนิส</strong>
                    <p className="teacher">ครูนิซาฮ์</p>
                  </div>
                </div>
                <div className="button">
                  <div className="text">
                    <strong className="subject">เทนนิส</strong>
                    <p className="teacher">ครูนิซาฮ์</p>
                  </div>
                </div>
                <div className="button">
                  <div className="text">
                    <strong className="subject">เทนนิส</strong>
                    <p className="teacher">ครูนิซาฮ์</p>
                  </div>
                </div>
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
                <div className="button">
                  <div className="text">
                    <strong className="subject"></strong>
                    <p className="teacher"></p>
                  </div>
                </div>
                <div className="button">
                  <div className="text">
                    <strong className="subject"></strong>
                    <p className="teacher"></p>
                  </div>
                </div>
                <div className="button">
                  <div className="text">
                    <strong className="subject"></strong>
                    <p className="teacher"></p>
                  </div>
                </div>
                <div className="button">
                  <div className="text">
                    <strong className="subject"></strong>
                    <p className="teacher"></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="fri">
              <div className="button">
                <p className="text">เรียนวิชารักษาดินแดน</p>
              </div>
            </div>
          </div>
        </main>
        <Logo color="#2B56A8" />
      </article>
    </>
  );
};

export default Design;
