import { ColorTheme } from "@config/defaultTheme"
import { removeKey } from "@utils/object"
import { Dispatch, SetStateAction } from "react"
const InApp = require("detect-inapp")

export const downloadScreenshot = async (
  room: string,
  requestColors: ColorTheme,
  background: string,
  setWaiting: Dispatch<SetStateAction<boolean>>
) => {
  let r = (Math.random() + 1).toString(36).substring(10)
  const imgUrl = `/api/screenshot?room=${room}&colorScheme=${JSON.stringify(
    removeKey(requestColors, "name")
  )}&r=${r}&bg=${background}`

  setWaiting(true)

  const res = await fetch(imgUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  })

  if (res.ok) {
    // @ts-ignore
    window.gtag("event", "generate_schedule", {
      event_category: "generate_schedule",
      event_label: `room_${room}`,
      room: room,
      colors: requestColors,
    })
    const inapp = new InApp(navigator.userAgent || navigator.vendor)
    if (inapp.browser === "line" || inapp.browser === "messenger" || inapp.browser === "facebook") {
      const a = document.createElement("a")
      a.href = imgUrl
      a.download = `${room}.jpg`
      document.body.appendChild(a)
      a.click()
      a.remove()
    } else {
      const a = document.createElement("a")
      a.href = window.URL.createObjectURL(await res.blob())
      a.download = `${room}.jpg`
      document.body.appendChild(a)
      a.click()
      a.remove()
    }
  }

  setWaiting(false)
}
