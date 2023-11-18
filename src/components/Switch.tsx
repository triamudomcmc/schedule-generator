import React, { FC, HTMLProps } from "react"
import { motion } from "framer-motion"

interface SwitchProps extends HTMLProps<HTMLInputElement> {
  checked: boolean
}

const Switch: FC<SwitchProps> = ({ checked, onChange, ...rest }) => {
    const backgroundColor = checked ? "bg-[#D2488B]" : "bg-[#EAA4C6]" 
    return (
    <label className="flex cursor-pointer items-center">
      <div className="relative">
        <input type="checkbox" className="hidden" checked={checked} onChange={onChange} {...rest} />
        <motion.div className={`h-7 w-14 rounded-full  ${backgroundColor}`} layout transition={{ duration: 1 }}>
          <motion.div
            className={`h-7 w-7 transform rounded-full bg-white shadow-md ${
              checked ? "translate-x-7" : "translate-x-0"
            }`}
          />
        </motion.div>
      </div>
    </label>
  )
}

export default Switch
