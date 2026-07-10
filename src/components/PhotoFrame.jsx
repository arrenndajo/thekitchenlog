import { useState } from "react";

// Square photo area. The placeholder always sits underneath; the photo
// overlays it and, if it fails to load, simply hides to reveal the placeholder.
export default function PhotoFrame({ recipe, className = "" }) {
  const [failed, setFailed] = useState(false);
  const initial = (recipe.name || "?").trim().charAt(0);

  return (
    <div className={`relative aspect-square overflow-hidden bg-paper2 ${className}`}>
      <div className="placeholder-weave absolute inset-0 grid place-items-center">
        <span className="font-display text-inkFaint text-[clamp(32px,7vw,64px)] leading-none">
          {initial}
        </span>
      </div>
      {recipe.img && !failed && (
        <img
          src={recipe.img}
          alt={recipe.name}
          loading="lazy"
          onError={() => setFailed(true)}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:scale-[1.04]"
        />
      )}
    </div>
  );
}
