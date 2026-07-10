import PolaroidCard from "./PolaroidCard.jsx";

export default function RecipeGrid({ recipes, onOpen }) {
  return (
    <main className="mx-auto max-w-[1200px] px-6 pb-24 pt-8 sm:px-10 lg:px-14">
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 sm:gap-7 lg:grid-cols-5 lg:gap-8">
        {recipes.map((recipe, i) => (
          <PolaroidCard
            key={recipe.name + recipe.date}
            recipe={recipe}
            index={i}
            onOpen={() => onOpen(recipe)}
          />
        ))}
      </div>
    </main>
  );
}
