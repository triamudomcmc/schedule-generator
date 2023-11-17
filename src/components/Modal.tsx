import { motion } from "framer-motion"
import classnames from "classnames"
import { DetectOutside } from "@utils/document"
import { useEffect, useRef, useState } from "react"

const Modal = ({
  // @ts-ignore
  children,
  overlayClassName = "",
  className = "",
  TriggerRef = null,
  CloseID = "",
  TriggerDep = null,
  CloseDep = null,
  closeClickOutside = true,
  ToggleDep = null,
  reloadChildren = false,
}) => {
  const [modalState, setModalState] = useState({ comm: false, hide: true })
  const [prevent, setPrevent] = useState(true)
  const panel = useRef(null)

  const trigger = () => {
    setModalState((prevState) => ({ comm: !prevState.comm, hide: false }))
  }

  useEffect(() => {
    // @ts-ignore
    TriggerRef !== null && TriggerRef.current && TriggerRef.current.addEventListener("mousedown", trigger)
  }, [TriggerRef])

  useEffect(() => {
    if (ToggleDep !== null) {
      ToggleDep && open()
      !ToggleDep && close()
    }
  }, [ToggleDep])

  const close = () => {
    setModalState({ comm: false, hide: false })
  }

  const open = () => {
    setModalState({ comm: true, hide: false })
  }

  useEffect(() => {
    if (CloseID !== "") {
      // @ts-ignore
      document.getElementById(CloseID).addEventListener("mousedown", close)
    }
  }, [])

  useEffect(() => {
    if (CloseDep !== null) {
      // @ts-ignore
      if (CloseDep.dep) {
        close()
        // @ts-ignore
        CloseDep.revert()
      }
    }
  }, [CloseDep])

  const variants = {
    show: { opacity: 1 },
    hide: { opacity: 0 },
  }

  useEffect(() => {
    if (modalState.comm) {
      setPrevent(false)
    } else {
      setPrevent(true)
    }
  }, [modalState])

  useEffect(() => {
    if (TriggerDep !== null) {
      // @ts-ignore
      if (TriggerDep.dep) {
        open()
        // @ts-ignore
        TriggerDep.revert()
      }
    }
  }, [TriggerDep])

  closeClickOutside &&
    DetectOutside(panel, !prevent, () => {
      close()
    })

  return (
    <div className={classnames(overlayClassName, modalState.hide && "hidden")}>
      <motion.div
        ref={panel}
        variants={variants}
        animate={modalState.comm ? "open" : "hide"}
        onAnimationComplete={() => {
          !modalState.comm && setModalState({ comm: false, hide: true })
        }}
        className={className}
      >
        {reloadChildren ? !modalState.hide && children : children}
      </motion.div>
    </div>
  )
}

export default Modal
