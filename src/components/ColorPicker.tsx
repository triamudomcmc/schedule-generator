import React, { useEffect, useState } from "react"
import reactCSS from "reactcss"
import { SketchPicker } from "react-color"
import { motion } from "framer-motion"

export interface ColorType {
  r: string
  g: string
  b: string
  a: string
}

interface ColorPickerProps {
  defaultColor?: ColorType
  onChange?: (color: ColorType) => void
  darkMode?: boolean
}

export const ColorPicker = ({
  defaultColor = { r: "0", g: "0", b: "0", a: "1" },
  onChange = (color) => {},
  darkMode = false
}: ColorPickerProps) => {
  const [displayColorPicker, setDCP] = useState(false)
  const [color, setColor] = useState(defaultColor)


  const handleClick = () => {
    setDCP((prev) => !prev)
  }

  const handleClose = () => {
    setDCP(false)
  }

  const handleChange = (color: { rgb: ColorType }) => {
    setColor(color.rgb)
    onChange(color.rgb)
  }

  useEffect(() => {
    handleChange({ rgb: defaultColor })
  }, [defaultColor])

  return (
    <div className={` rounded-[11px] sm:h-[32px] sm:w-[42px]`}>
      <motion.div whileHover={{ scale: 1.1 }} onClick={handleClick}>
        <div
          className={`h-[30px] w-[30px] cursor-pointer rounded-[10px] border ${darkMode ? "border-[#FFFFFF] border-opacity-40":"border-[#000000] border-opacity-20"}  sm:h-[32px] sm:w-[42px]`}
          style={{
            background: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
          }}
        />
      </motion.div>
      {displayColorPicker ? (
        <div
          style={{
            position: "absolute",
            zIndex: 99,
            touchAction: "none",
          }}
        >
          <div
            style={{
              position: "fixed",
              top: "0px",
              right: "0px",
              bottom: "0px",
              left: "0px",
              touchAction: "none",
            }}
            onClick={handleClose}
          />
          {/* @ts-ignore */}
          <SketchPicker color={color} onChange={handleChange} />
        </div>
      ) : null}
    </div>
  )
}
