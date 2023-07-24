import React from "react";

const RecipeBanner = () => {
  return (
    <div className="container mx-auto ">
      <div class="p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <img
            class="h-1/2 rounded w-full mx-auto object-cover object-center mb-6"
            src="https://dummyimage.com/721x401"
            alt="content"
          />

          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
            Colosseum Roma
          </h2>
          <p class="leading-relaxed text-base">
            Fingerstache flexitarian street art 8-bit waistcoat. Distillery
            hexagon disrupt edison bulbche.
          </p>
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
            Total recipe:{" "}
          </h3>
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
            Experience:{" "}
          </h3>
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
            Likes:{" "}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default RecipeBanner;
