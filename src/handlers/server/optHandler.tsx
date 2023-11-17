import { opt1, opt2, opt3, opt4, opt5, opt6 } from "@utils/constants"

export const selOpt = (og: any) => {
  let finalRes = og
  const { room } = og?.meta
  let opt = 0

  if (opt1.includes(parseInt(room))) opt = 1
  else if (opt2.includes(parseInt(room))) opt = 2
  else if (opt3.includes(parseInt(room))) opt = 3
  else if (opt4.includes(parseInt(room))) opt = 4
  else if (opt5.includes(parseInt(room))) opt = 5
  else if (opt6.includes(parseInt(room))) opt = 6
  
  switch (opt) {
    case 1:
    case 3: {
      // M.4 Sci-Math/Math-Lang except GM,GS | M.5 EVR
      // Mon per8 use per3 from Fri, then per9 = club
      // Tue per8 use per1 from Fri
      // Thu per8 use per2 from Fri

      finalRes.body["1"]["9"] = ["กิจกรรม"]
      finalRes.body["1"]["8"] = og?.body["5"]["3"]
      finalRes.body["2"]["8"] = og?.body["5"]["1"]
      finalRes.body["4"]["8"] = og?.body["5"]["2"]
      finalRes.body["5"] = {}
      return finalRes
    }
    case 2:
    case 4: {
      // M.4 Sci-Math/Lang-Lang GM,GS | M.5 Sci-Math
      // Mon per8 use per3 from Fri, then per9 = club
      // Tue per9 use per1 from Fri
      // Thu per9 use per2 from Fri

      finalRes.body["1"]["9"] = ["กิจกรรม"]
      finalRes.body["1"]["8"] = og?.body["5"]["3"]
      finalRes.body["2"]["9"] = og?.body["5"]["1"]
      finalRes.body["4"]["9"] = og?.body["5"]["2"]
      finalRes.body["5"] = {}
      return finalRes
    }
    case 5: {
      // M.6 Sci-Math/Lang-Lang
      // Mon per8 use per3 from Fri, then per9 = club
      // Tue per7 use per1 from Fri, then per8 use per2 from Fri

      finalRes.body["1"]["9"] = ["กิจกรรม"]
      finalRes.body["1"]["8"] = og?.body["5"]["3"]
      finalRes.body["2"]["7"] = og?.body["5"]["1"]
      finalRes.body["2"]["8"] = og?.body["5"]["2"]
      finalRes.body["5"] = {}
      return finalRes
    }
    case 6: {
      // M.6 Math-Lang
      // Mon per8 use per3 from Fri
      // Tue per6 use per1 from Fri, then per7 use per2 from Fri

      finalRes.body["1"]["9"] = ["กิจกรรม"]
      finalRes.body["1"]["8"] = og?.body["5"]["3"]
      finalRes.body["2"]["6"] = og?.body["5"]["1"]
      finalRes.body["2"]["7"] = og?.body["5"]["2"]
      finalRes.body["5"] = {}
      return finalRes
    }
    default: {
      return finalRes
    }
  }
}
