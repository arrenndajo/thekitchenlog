import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PhotoFrame from "./PhotoFrame.jsx";
import { formatDate } from "../data/recipes.js";

export default function PolaroidModal({ recipes, recipe, onClose }) {
  // Track which polaroid is showing so the arrows can move through the list.
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!recipe) return;
    setIndex(Math.max(0, recipes.indexOf(recipe)));
  }, [recipe, recipes]);

  const current = recipe ? recipes[index] : null;
  const move = (dir) =>
    setIndex((i) => (i + dir + recipes.length) % recipes.length);

  useEffect(() => {
    if (!recipe) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") move(-1);
      if (e.key === "ArrowRight") move(1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [recipe, onClose]);

  const arrowBase =
    "fixed top-1/2 z-[2] grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-paper text-ink shadow-[0_4px_14px_-4px_rgba(26,23,20,0.4)] transition-transform duration-200 hover:scale-105 focus-visible:outline-2 focus-visible:outline-ink";

  return (
    <AnimatePresence>
      {current && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-12"
          role="dialog"
          aria-modal="true"
          aria-label={current.name}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
        >
          <div
            className="absolute inset-0 bg-[rgba(20,18,15,0.44)] backdrop-blur-[3px]"
            onClick={onClose}
          />

          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="fixed right-5 top-[18px] z-[2] grid h-[42px] w-[42px] place-items-center rounded-full bg-paper text-[22px] leading-none text-ink shadow-[0_4px_14px_-4px_rgba(26,23,20,0.4)] transition-transform duration-200 hover:rotate-90 focus-visible:outline-2 focus-visible:outline-ink"
          >
            &times;
          </button>

          <button
            type="button"
            onClick={() => move(-1)}
            aria-label="Previous"
            className={`${arrowBase} left-3 sm:left-6`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
          </button>
          <button
            type="button"
            onClick={() => move(1)}
            aria-label="Next"
            className={`${arrowBase} right-3 sm:right-6`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
          </button>

          {/* key change on nav re-runs the entrance for a quick fade; no exit,
              so closing is driven by the overlay fade above (snappy). */}
          <motion.figure
            key={current.name + current.date}
            className="relative z-[1] m-0 w-[min(440px,90vw)] max-h-[90vh] rounded-[3px] bg-polaroid px-[clamp(14px,2vw,20px)] pt-[clamp(14px,2vw,20px)] shadow-card-lg"
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.26, ease: [0.2, 0.7, 0.2, 1] }}
          >
            <PhotoFrame recipe={current} />
            <figcaption className="px-2.5 pb-[clamp(24px,3.2vw,34px)] pt-[clamp(18px,2.6vw,26px)] text-center">
              <p className="mb-0.5 font-hand text-[22px] leading-none text-inkFaint">
                {formatDate(current.date)}
              </p>
              <h2 className="font-hand text-[clamp(34px,5vw,46px)] font-semibold leading-none text-ink">
                {current.name}
              </h2>
              {current.caption && (
                <p className="mx-auto mt-3 max-w-[34ch] font-hand text-[19px] leading-tight text-inkSoft">
                  {current.caption}
                </p>
              )}
            </figcaption>
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>
  );
}