import type { NextApiRequest, NextApiResponse } from "next"
import screenshot from "@utils/screenshot"
import fs from "fs"
import { rooms } from "@utils/constants"
import path from "path"
import JSZip from "jszip"

type Data = {
  name: string
}

const toadd = [
  436, 443, 444, 445,
  642, 651, 652, 654, 655, 656, 657, 812, 813, 814, 815, 822, 823, 824, 825, 832, 833, 931, 932, 933, 934, 935, 936,
  937, 941, 28, 29, 32, 38, 39, 48, 49, 58, 59, 73, 74, 75, 76, 77, 78, 79, 80, 81, 125, 126, 143, 144, 145, 146, 153,
  154, 155, 156, 222, 223, 224, 225, 226, 227, 228, 229, 441, 442
]

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

  const zip = new JSZip()

  for (let i of toadd) {
    const outputPath = path.join(process.cwd(), "_output/", `${i.toString()}.jpg`)

    if (!fs.existsSync(outputPath)) {
      const file = await screenshot(`http://${req.headers.host}/renderer/${i.toString()}`)

      console.log("workingon" + i)

      if (file) {
        fs.writeFileSync("_output/" + i.toString() + ".jpg", file)

        zip.file(`${i.toString()}.jpg`, file)
      }
    }
  }

  console.log("zipping...")
  for (let file of fs.readdirSync("_output")) {
    if (file.endsWith(".jpg")) {
      zip.file(file, fs.readFileSync("_output/" + file))
    }
  }

  res.setHeader("Content-Type", "application/zip")
  res.setHeader("Content-Disposition", "attachment; filename=images.zip")

  const zipBuffer = await zip.generateAsync({ type: "nodebuffer" })
  res.end(zipBuffer)
}
