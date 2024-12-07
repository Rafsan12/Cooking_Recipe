/* eslint-disable react/prop-types */
import { useState } from "react";
import Time from "../../assets/Icon/Vector.png";

export default function Recipe({ recipe }) {
  const { id, title, categories, img, cookTime } = recipe ?? {};
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite);
  };

  if (id === 6) {
    return (
      <div className="w-full">
        <img src={img} alt="Full Image" className="w-full object-cover" />
      </div>
    );
  }

  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      {/* Display the image */}
      <figure>
        <div className="relative">
          <div className="absolute right-0" onClick={handleFavoriteToggle}>
            {isFavorite ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            )}
          </div>
          <img src={img} alt={title ? `${title} recipe` : "Recipe image"} />
        </div>
      </figure>

      {/* Conditionally render the card body if other details are available */}
      {(title || cookTime || (categories && categories.length > 0)) && (
        <div className="card-body">
          <h2 className="card-title">{title ?? "Untitled Recipe"}</h2>
          <p>A delightful recipe to make your day special.</p>
          <div className="card-actions">
            {/* Cook Time Section */}
            {cookTime && (
              <div className="flex gap-2 items-center">
                <img className="w-4 h-4" src={Time} alt="Cook Time Icon" />
                <p>{cookTime}</p>
              </div>
            )}

            {/* Categories Section */}
            {Array.isArray(categories) && categories.length > 0 ? (
              categories.map((categorie, i) => (
                <div key={i} className="badge badge-outline">
                  {categorie}
                </div>
              ))
            ) : (
              <div className="text-gray-500 text-sm">
                No categories available
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
