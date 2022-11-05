export const selOpt = (og: any) => {
    let finalRes = og
    const opt = og?.meta.opt
    switch (opt) {
        case 1: 
        case 3: {
            // M.4 Sci-Math/Math-Lang except GM,GS | M.5 EVR
            // Mon per8 use per3 from Fri, then per9 = club
            // Tue per8 use per1 from Fri
            // Thu per8 use per2 from Fri
            
            finalRes.body['1']['9'] = ["กิจกรรม"]
            finalRes.body['1']['8'] = og?.body['5']['3']
            finalRes.body['2']['8'] = og?.body['5']['1']
            finalRes.body['4']['8'] = og?.body['5']['2']
            finalRes.body['5'] = {}
            return finalRes
        }
        case 2:
        case 4: {
            // M.4 Sci-Math/Lang-Lang except GM,GS | M.5 Sci-Math
            // Mon per8 use per3 from Fri, then per9 = club
            // Tue per9 use per1 from Fri
            // Thu per9 use per2 from Fri

            finalRes.body['1']['9'] = ["กิจกรรม"]
            finalRes.body['1']['8'] = og?.body['5']['3']
            finalRes.body['2']['9'] = og?.body['5']['1']
            finalRes.body['4']['9'] = og?.body['5']['2']
            finalRes.body['5'] = {}
            return finalRes
        }
        case 5: {
            // M.6 Sci-Math/Lang-Lang
            // Mon per8 use per3 from Fri, then per9 = club
            // Tue per7 use per1 from Fri, then per8 use per2 from Fri

            finalRes.body['1']['9'] = ["กิจกรรม"]
            finalRes.body['1']['8'] = og?.body['5']['3']
            finalRes.body['2']['7'] = og?.body['5']['1']
            finalRes.body['2']['8'] = og?.body['5']['2']
            finalRes.body['5'] = {}
            return finalRes
        }
        case 6: {
            // M.6 Math-Lang
            // Mon per8 use per3 from Fri
            // Tue per6 use per1 from Fri, then per7 use per2 from Fri

            finalRes.body['1']['9'] = ["กิจกรรม"]
            finalRes.body['1']['8'] = og?.body['5']['3']
            finalRes.body['2']['6'] = og?.body['5']['1']
            finalRes.body['2']['7'] = og?.body['5']['2']
            finalRes.body['5'] = {}
            return finalRes
        }
        default: {
            return finalRes
        }
    }
}
