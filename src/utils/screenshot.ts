import puppeteer from "puppeteer"

export default async function screenshot(url: string, width: number = 2388, height: number = 1768) {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.setViewport({ width, height })
  await page.goto(url, { waitUntil: "networkidle2" })
  return await page.screenshot({ type: "jpeg" })
}
