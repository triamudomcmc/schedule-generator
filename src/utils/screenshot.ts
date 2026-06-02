import chromium from "@sparticuz/chromium"
import puppeteer from "puppeteer-core"

export default async function screenshot(url: string, width: number = 2388, height: number = 1768) {
  const isVercel = process.env.VERCEL === "1"

  const browser = await puppeteer.launch({
    args: isVercel ? chromium.args : ["--no-sandbox"],
    defaultViewport: { width, height },
    executablePath: isVercel
      ? await chromium.executablePath()
      : "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    headless: true,
  })
  const page = await browser.newPage()
  await page.goto(url, { waitUntil: "networkidle2" })
  return await page.screenshot({ type: "jpeg" })
}
