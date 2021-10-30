import path from "path"
import fs from "fs"

export const getKeptFile = (filePath: string): Buffer => {
  let basePath = process.cwd()

  if (process.env.NODE_ENV === "production") {
    basePath = path.join(process.cwd(), ".next/server/chunks")
  }

  const realPath = path.join(basePath, filePath)
  return fs.readFileSync(realPath)
}
