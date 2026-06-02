import chromium from "@sparticuz/chromium"
import puppeteer from "puppeteer-core"

export default async function screenshot(url: string, width: number = 2388, height: number = 1768) {
  const browser = await puppeteer.launch({
    args: chromium.args,
    defaultViewport: { width, height },
    executablePath: await chromium.executablePath(),
    headless: true,
  })
  const page = await browser.newPage()
  await page.goto(url, { waitUntil: "networkidle2" })
  return await page.screenshot({ type: "jpeg" })
}
