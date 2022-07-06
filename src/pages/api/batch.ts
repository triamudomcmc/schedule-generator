import type { NextApiRequest, NextApiResponse } from "next"
import screenshot from "@utils/screenshot"
import fs from "fs"
import { rooms } from "@utils/constants"
import path from "path"
import JSZip from "jszip"

// type Data = {
//   name: string
// }

// export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
//   const {
//     query: { room, colorScheme },
//   } = req

//   const zip = new JSZip()

//   for (let i of rooms) {
//     const outputPath = path.join(process.cwd(), "_output/", `${i.toString()}.jpg`)

//     if (!fs.existsSync(outputPath)) {
//       const file = await screenshot(`http://${req.headers.host}/renderer/${i.toString()}`)

//       console.log("workingon" + i)

//       if (file) {
//         fs.writeFileSync("_output/" + i.toString() + ".jpg", file)

//         zip.file(`${i.toString()}.jpg`, file)
//       }
//     }
//   }

//   console.log("zipping...")
//   for (let file of fs.readdirSync("_output")) {
//     if (file.endsWith(".jpg")) {
//       zip.file(file, fs.readFileSync("_output/" + file))
//     }
//   }

//   res.setHeader("Content-Type", "application/zip")
//   res.setHeader("Content-Disposition", "attachment; filename=images.zip")

//   const zipBuffer = await zip.generateAsync({ type: "nodebuffer" })
//   res.end(zipBuffer)
// }

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ name: "John Doe" })
}
