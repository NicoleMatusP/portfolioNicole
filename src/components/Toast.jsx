import { AnimatePresence, motion } from "framer-motion"

const Toast = ({ message, visible }) => {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="toast"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Toast
