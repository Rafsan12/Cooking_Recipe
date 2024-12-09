import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Subscribe from "../Subscribe/Subscribe";

export default function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const recipeItem = async () => {
      try {
        const res = await fetch("/data.json");
        const result = await res.json();
        const selectedRecipe = result.find((item) => item.id === parseInt(id));
        setRecipe(selectedRecipe);
      } catch (error) {
        console.log(error);
      }
    };
    recipeItem();
  }, [id]);
  return (
    <>
      <h1 className="mt-6 text-2xl font-semibold ml-10">{recipe?.title}</h1>
      <div className="flex gap-4 mt-6 ml-10">
        <p>cooking Time: {recipe?.cookTime || "Not available"}</p>
        <p>Categories: {recipe?.categories?.join(", ") || "No categories"}</p>
      </div>
      <div className="grid md:grid-cols-4 gap-1 mt-2 ml-7">
        <div className="md:col-span-3">
          <img className="ml-20 w-3/4 h-3/4" src={recipe?.img} alt="" />
        </div>

        {/* Nutrition Information */}
        <div className="bg-[#E7FAFE] p-6 rounded-md min-h-full">
          <h1 className="text-2xl font-medium mb-4">Nutrition Information</h1>

          <div className="flex justify-between mt-4">
            <p>Calories</p>
            <p className="mr-6">{recipe?.nutrition?.calories || "N/A"}</p>
          </div>
          <div className="border border-gray-300 w-full"></div>

          <div className="flex justify-between mt-4">
            <p>Total Fat</p>
            <p className="mr-6">{recipe?.nutrition?.totalFat || "N/A"}</p>
          </div>
          <div className="border border-gray-300 w-full"></div>

          <div className="flex justify-between mt-4">
            <p>Protein</p>
            <p className="mr-6">{recipe?.nutrition?.protein || "N/A"}</p>
          </div>
          <div className="border border-gray-300 w-full"></div>

          <div className="flex justify-between mt-4">
            <p>Carbohydrate</p>
            <p className="mr-6">{recipe?.nutrition?.carbohydrate || "N/A"}</p>
          </div>
          <div className="border border-gray-300 w-full"></div>

          <div className="flex justify-between mt-4">
            <p>Cholesterol</p>
            <p className="mr-6">{recipe?.nutrition?.cholesterol || "N/A"}</p>
          </div>
          <div className="border border-gray-300 w-full"></div>
        </div>

        {/* Ingredients & Directions */}
      </div>
      <div className="flex flex-col gap-14 sm:flex-row mt-10">
        <div>
          <h1 className="ml-24 text-2xl font-medium ">Ingredients</h1>
          {recipe?.ingredients.map((ingredient, i) => (
            <>
              <div className="flex items-center gap-2 mb-2 mt-4 ml-6" key={i}>
                <input type="checkbox" className="checkbox checkbox-xs" />
                <p>{ingredient}</p>
              </div>
              <div className="border border-gray-300 w-96 rounded-full"></div>
            </>
          ))}
        </div>
        <div>
          <h1 className="ml-24 text-2xl font-medium ">Directions</h1>
          {recipe?.directions.map((direction, i) => (
            <>
              <div className="flex items-center gap-2 mb-2 mt-4 ml-6" key={i}>
                <ul>
                  <li>{direction}</li>
                </ul>
              </div>
              <div className="border border-gray-300 w-96 rounded-full"></div>
            </>
          ))}
        </div>
      </div>

      <Subscribe />
    </>
  );
}
