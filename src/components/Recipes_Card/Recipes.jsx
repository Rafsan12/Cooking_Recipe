import { useEffect, useState } from "react";
import Recipe from "./Recipe";

export default function Recipes() {
  const [recipesData, setRecipesData] = useState([]); // Initialize as an array

  useEffect(() => {
    const fetchRecipesData = async () => {
      try {
        const res = await fetch("data.json"); // Ensure 'data.json' is in the public folder
        const result = await res.json();
        setRecipesData(result);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };
    fetchRecipesData();
  }, []);

  return (
    <>
      <div className="text-center mt-10 ">
        <h1 className="text-4xl">Simple and Tasty Recipes</h1>
        <p className="text-md mt-2">
          Discover easy-to-make recipes that bring delightful flavors to your
          table.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {recipesData.map((recipe) => (
          <Recipe key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </>
  );
}
