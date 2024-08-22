import React, { FC, HTMLProps } from "react"
import { motion } from "framer-motion"
import SunIcon from "./SunIcon"
import MoonIcon from "./MoonIcon"

interface SwitchProps extends HTMLProps<HTMLInputElement> {
  checked: boolean
}

const ModeToggleButton: FC<SwitchProps> = ({ checked, onChange, ...rest }) => {
  const backgroundColor = checked ? "bg-[#2C2828]" : "bg-[#D9D9D9]"
  return (
    <label className="flex cursor-pointer items-center">
      <div className="relative">
        <input type="checkbox" className="hidden" checked={checked} onChange={onChange} {...rest} />
        <motion.div
          className={`relative flex h-7 w-14 items-center overflow-hidden rounded-full ${backgroundColor}`}
          layout
          transition={{ duration: 1 }}
        >
          <div className=" relative w-full overflow-hidden">
            <motion.div
              className={`  relative h-6 w-6  transform  overflow-hidden rounded-full transition-transform duration-500 ease-out ${
                checked ? "translate-x-7 bg-[#5C5C5C]" : "translate-x-1 bg-white"
              }`}
            >
              <div>
                <motion.div className=" absolute top-1/2 left-1/2 z-50 h-4 w-4  -translate-y-1/2 -translate-x-1/2 ">
                  <SunIcon
                    className={`h-4 w-4 duration-500 ease-out ${
                      checked ? "translate-y-7 -translate-x-4 opacity-0" : "translate-y-0 -translate-x-0  opacity-100"
                    } `}
                  />
                </motion.div>
              </div>
              <div>
                <motion.div className=" absolute top-1/2 left-1/2 z-50 h-4 w-4  -translate-y-1/2 -translate-x-1/2 ">
                  <MoonIcon
                    className={`h-4 w-4 duration-500 ease-out ${
                      checked ? "translate-y-0 -translate-x-0  opacity-100" : " translate-y-7 translate-x-4 opacity-0 "
                    } `}
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </label>
  )
}

export default ModeToggleButton
