import { AnimatePresence, motion } from "framer-motion";

export default function Navbar({ visible }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: -64, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -64, opacity: 0 }}
          transition={{ duration: 0.32, ease: [0.2, 0.7, 0.2, 1] }}
          className="fixed inset-x-0 top-0 z-40 border-b border-line bg-paper/85 shadow-nav backdrop-blur-md"
        >
          <div className="mx-auto flex max-w-[1200px] items-center px-6 py-3.5 sm:px-10 lg:px-14">
            <span className="font-display text-[19px] font-medium tracking-[-0.01em]">
              The Kitchen <em className="font-normal italic">Log</em>
            </span>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
