import type { NextApiRequest, NextApiResponse } from "next"
import screenshot from "@utils/screenshot"

type Data = {
  name: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const {
    query: { room, colorScheme, r, bg },
  } = req

  const file = await screenshot(
    `http://${req.headers.host}/renderer/${room}?colorScheme=${colorScheme}&bg=${bg}&r=${r}`
  )

  res.setHeader("Content-Type", `image/jpeg`)
  res.setHeader("Cache-Control", `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`)
  res.statusCode = 200
  res.end(file)
}
