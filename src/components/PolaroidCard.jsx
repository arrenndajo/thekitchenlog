import { motion } from "framer-motion";
import PhotoFrame from "./PhotoFrame.jsx";
import { formatDate } from "../data/recipes.js";

export default function PolaroidCard({ recipe, index, onOpen }) {
  return (
    <motion.button
      type="button"
      onClick={onOpen}
      aria-label={`Open ${recipe.name}`}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      transition={{
        duration: 0.5,
        ease: [0.2, 0.7, 0.2, 1],
        delay: (index % 5) * 0.05,
      }}
      whileHover={{ y: -5, rotate: -0.7 }}
      className="group block w-full rounded-[2px] bg-polaroid px-[11px] pt-[11px] text-center polaroid-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
    >
      <PhotoFrame recipe={recipe} />
      <div className="px-2 pb-5 pt-[15px]">
        <p className="truncate font-hand text-[16px] leading-none text-inkFaint">
          {formatDate(recipe.date)}
        </p>
        <h3 className="mt-[1px] truncate font-hand text-[24px] font-semibold leading-none text-ink">
          {recipe.name}
        </h3>
      </div>
    </motion.button>
  );
}