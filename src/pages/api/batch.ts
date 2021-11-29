import type { NextApiRequest, NextApiResponse } from "next";
import screenshot from "@utils/screenshot";
import fs from "fs";

type Data = {
  name: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const {
    query: { room, colorScheme },
  } = req;

  let rooms = [
    276, 277, 278, 341, 342, 343, 344, 345, 437, 438, 446, 447, 448, 65, 66, 661, 662, 664, 665, 666, 667, 70, 71, 72,
    834, 835, 842, 843, 844, 845, 846, 942, 943, 945, 946, 947, 332, 333, 334, 335, 336, 431, 432, 436, 443, 444, 445,
    642, 651, 652, 654, 655, 656, 657, 812, 813, 814, 815, 822, 823, 824, 825, 832, 833, 931, 932, 933, 934, 935, 936,
    937, 941, 125, 126, 143, 144, 145, 146, 153, 154, 155, 156, 222, 223, 224, 225, 226, 227, 228, 229, 28, 29, 32, 38,
    39, 48, 49, 58, 59, 73, 74, 75, 76, 77, 78, 79, 80, 81,
  ];

  const ren = [
    "125",
    "126",
    "143",
    "144",
    "145",
    "146",
    "153",
    "154",
    "155",
    "156",
    "222",
    "223",
    "224",
    "225",
    "226",
    "227",
    "228",
    "229",
    "276",
    "277",
    "278",
    "28",
    "29",
    "32",
    "332",
    "333",
    "334",
    "335",
    "336",
    "341",
    "342",
    "343",
    "344",
    "345",
    "38",
    "39",
    "431",
    "432",
    "436",
    "437",
    "438",
    "443",
    "444",
    "445",
    "446",
    "447",
    "448",
    "48",
    "49",
    "642",
    "65",
    "651",
    "652",
    "654",
    "655",
    "656",
    "657",
    "66",
    "661",
    "662",
    "664",
    "665",
    "666",
    "667",
    "70",
    "71",
    "72",
    "812",
    "813",
    "814",
    "815",
    "822",
    "823",
    "824",
    "825",
    "832",
    "833",
    "834",
    "835",
    "842",
    "843",
    "844",
    "845",
    "846",
    "931",
    "932",
    "933",
    "934",
    "935",
    "936",
    "937",
    "941",
    "942",
    "943",
    "945",
    "946",
    "947",
  ];

  for (let i of rooms) {
    if (!ren.includes(i.toString())) {
      const file = await screenshot(`http://${req.headers.host}/renderer/${i.toString()}`);

      console.log("workingon" + i);

      if (file) {
        fs.writeFileSync("outpu/" + i.toString() + ".jpg", file);
      }
    }
  }

  res.setHeader("Content-Type", `image/png`);
  res.setHeader("Cache-Control", `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`);
  res.statusCode = 200;
}
