import { useEffect, useMemo, useRef, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import RecipeGrid from "./components/RecipeGrid.jsx";
import PolaroidModal from "./components/PolaroidModal.jsx";
import Footer from "./components/Footer.jsx";
import { recipes } from "./data/recipes.js";

export default function App() {
  const titleRef = useRef(null);
  const [navVisible, setNavVisible] = useState(false);
  const [selected, setSelected] = useState(null);

  // Newest first.
  const sorted = useMemo(
    () => [...recipes].sort((a, b) => new Date(b.date) - new Date(a.date)),
    []
  );

  // Show the nav once the hero title has scrolled out of view.
  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setNavVisible(!entry.isIntersecting),
      { rootMargin: "-8px 0px 0px 0px", threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar visible={navVisible} />
      <Hero ref={titleRef} />
      <RecipeGrid recipes={sorted} onOpen={setSelected} />
      <Footer count={sorted.length} />
      <PolaroidModal recipes={sorted} recipe={selected} onClose={() => setSelected(null)} />
    </>
  );
}