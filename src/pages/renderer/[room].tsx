import {Logo} from "@components";
import type {GetStaticPaths, GetStaticProps} from "next";
import Head from "next/head";
import fs from "fs";
import path from "path";
import {rawRgbColorToCss} from "@utils/hexToRgb";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";

const defaultColors = {
  bg: "#FFFFFF",
  t1: "#599BA4",
  t2: "#DEA54B",
  c1: "#F4CD00",
  c2: "#FF92A6",
  c3: "#ADE374",
  c4: "#FF9417",
};


interface Data {
  name: string;
  teacher: string;
}

interface ScheduleData {
  room: string;
  branch: string;
  teachers: string[];
  data: Record<string, Data>;
}

export const getStaticPaths: GetStaticPaths = async () => {

  const files = fs.readdirSync(path.join(process.cwd(), "_keep/data"))

  const paths = files.filter((i) => (i.includes(".json"))).map((s) => ({
    params: {room: s.replace(".json", "")}
  }))

  return {
    paths, fallback: false
  }

}

export const getStaticProps: GetStaticProps = async ({params}) => {

  const room = params?.room
  let scheduleData: ScheduleData | null = null

  if (params) {
    const raw = fs.readFileSync(path.join(process.cwd(), `_keep/data/${room}.json`)).toString()
    scheduleData = JSON.parse(raw)
  }

  return {
    props: {
      scheduleData: {...scheduleData, room: room}
    }
  }

}

interface RoomProps {
  scheduleData: ScheduleData,
  query: any
}

const Room = ({scheduleData}: RoomProps) => {
  const router = useRouter()

  useEffect(() => {
    if (!router.query.colorScheme) {
      return
    }

    const colorScheme: string = router.query.colorScheme?.toString()
    const parsed = JSON.parse(colorScheme)

    const cssColor: { [k: string]: string } = {}

    Object.keys(parsed).forEach((k) => {
      // @ts-ignore
      cssColor[k] = rawRgbColorToCss(parsed[k])
    })

    // @ts-ignore
    setColor(cssColor)

  }, [router.query.colorScheme])

  const [color, setColor] = useState(defaultColors)

  const genSchedule = (period: number) => {
    return (
      <>
        {Array(4)
          .fill("")
          .map((_, i) => {
            const name = scheduleData?.data?.hasOwnProperty(`${i + 1}:${period}`)
              ? scheduleData?.data[`${i + 1}:${period}`].name
              : "" ?? "";
            const teacher = scheduleData?.data?.hasOwnProperty(`${i + 1}:${period}`)
              ? scheduleData?.data[`${i + 1}:${period}`].teacher
              : "" ?? "";

            return (
              <div style={{backgroundColor: color.bg}} className="button" key={i}>
                <div className="text">
                  <strong className="subject">{name}</strong>
                  <p className="teacher">{teacher?.replace("+", " ")}</p>
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
      color: color.c1,
    },
    {
      name: "อังคาร",
      color: color.c2,
    },
    {
      name: "พุธ",
      color: color.c3,
    },
    {
      name: "พฤหัสฯ",
      color: color.c4,
    },
    /*
    {
      name: "ศุกร์",
      color: "#45D2F1",
    },
    */
  ];

  return (
      <div style={{backgroundColor: color.bg}}>
        <div style={{backgroundColor: color.bg}} className="wrapper">
          <div className="header">
            <div className="left">
              {/*<div className="bar"></div>*/}
              <div className="title-container">
                <h1 className="title" style={{color: color.t1}}>
                  ตารางเรียน
                </h1>
                <p className="subtitle" style={{color: color.t2}}>
                  ภาคเรียนที่ 2/2021
                </p>
              </div>
            </div>
            <div className="right">
              <h2 className="room" style={{color: color.t1}}>
                ห้อง {scheduleData.room} | {scheduleData.branch}
              </h2>
              <div className="teacher" style={{color: color.t2}}>
                {scheduleData.teachers.map((teacher) => (
                  <p className="text" key={teacher}>
                    {teacher}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="main">
            <div className="days">
              {Days.map((day) => (
                <div className="day" key={day.name}>
                  <div className="button" style={{backgroundColor: day.color}}>
                    {day.name}
                  </div>
                  <div className="line" style={{backgroundColor: day.color}}></div>
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
                  <div style={{backgroundColor: color.bg}} className="break10-button">
                    <p className="text">
                      พัก
                      <br/>
                      10
                      <br/>
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
                  <div style={{backgroundColor: color.bg}} className="break10-button">
                    <p className="text">
                      พัก
                      <br/>
                      10
                      <br/>
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
                  <div style={{backgroundColor: color.bg}} className="break10-button">
                    <p className="text">
                      พัก
                      <br/>
                      10
                      <br/>
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
                  <div style={{backgroundColor: color.bg}} className="lunch-button">
                    <p className="text">
                      พัก
                      <br/>
                      กลาง
                      <br/>
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
                  <div style={{backgroundColor: color.bg}} className="break10-button">
                    <p className="text">
                      พัก
                      <br/>
                      10
                      <br/>
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
          </div>
          <Logo color={color.t1}/>
        </div>
      </div>
  );
};

export default Room;
