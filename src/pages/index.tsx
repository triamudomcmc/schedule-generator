import { LearnSchedulePage } from "@components/LearnSchedule/Page"
import { DescribeRoute } from "@components/Meta/DescribeRoute"
import { AnimateSharedLayout } from "framer-motion"
import { NextPage } from "next"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { CheckIcon, ExclamationIcon, XIcon } from "@heroicons/react/solid"
import { rawRgbColorToCss } from "@utils/hexToRgb"
import { DefaultTheme } from "@config/defaultTheme"

export const Home: NextPage = () => {
  const [mainColor, setMaincolor] = useState(rawRgbColorToCss(DefaultTheme.Pink.c1))

  return (
    <DescribeRoute
      title="TUCMC Schedule Generator"
      description="ระบบนี้เป็นระบบสำหรับดาวน์โหลดตารางเรียนที่ทาง กช. จัดทำขึ้น ไม่ได้มีความเกี่ยวข้องกับทางโรงเรียนแต่อย่างใด"
      imgURL="/preview.png"
    >
      <div
        className="flex min-h-screen w-full flex-col items-center justify-center px-4 py-4 transition-colors"
        style={{ backgroundColor: mainColor }}
      >
        <main className="max-w-[470px] rounded-xl bg-white py-10 px-8 font-ui shadow-lg">
          <AnimateSharedLayout>
            <LearnSchedulePage setMainColor={setMaincolor} />
          </AnimateSharedLayout>
        </main>
      </div>
    </DescribeRoute>
  )
}

export default Home
