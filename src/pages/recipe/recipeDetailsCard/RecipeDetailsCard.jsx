import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

import { Rating } from "@smastrom/react-rating";

const RecipeDetailsCard = ({ collegeCard }) => {
  const { collegeImage, 
    collegeName, 
    admissionProcess, 
    eventsDetails,
    researchWorks,
    sportsDetails } = collegeCard;

  const [toastDisplayed1, setToastDisplayed1] = useState(false);

  const handleClick1 = () => {
    if (!toastDisplayed1) {
      toast.success("Successfully added your favorite recipe 💚");
      setToastDisplayed1(true);
    }
  };

  return (
    <div>
        <div className="p-4 ">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-8 pb-24 rounded-lg overflow-hidden  relative">
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  {collegeName}
                </h1>
                <p className="leading-relaxed mb-3"><span className="text-lg font-semibold text-gray-900">Cooking Method:</span><br/>{cookingMethod}</p>

                <div>
                  <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                    Ingredients:
                  </h2>
                  <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                    {ingredients.slice(0, 7).map((ingredient) => (
                      <li>{ingredient}</li>
                    ))}
                  </ul>
                </div>
                <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full p-4">
                  <div className=" mt-2 leading-none flex flex-wrap justify-between  w-full pt-4">
                    <div className="flex items-center gap-2">
                      <Rating
                        style={{ maxWidth: 100 }}
                        value={rating}
                        readOnly
                      />
                      <span className="font-bold">{rating}</span>
                    </div>
                    <div>
                      <button onClick={handleClick1} className="btn btn-shadow">
                        Favorite 💚
                      </button>
                      <Toaster />
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </div>
  );
  
};

export default RecipeDetailsCard;
