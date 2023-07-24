import React from "react";

const Category = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 pb-16 pt-20 mx-auto">
        <div className="flex flex-col text-center w-full mb-10">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            College Graduate's Group Pictures
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            A Collection of Memorable College Moments
          </p>
        </div>
        <div className="flex flex-wrap ">
          <div className="lg:w-1/3 sm:w-1/2   p-4 ">
            <div className="flex relative">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src="https://i.ibb.co/zPpdwtf/low-angle-graduated-students-1-min.jpg"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                {/* <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2> */}
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Joyful Graduation Day
                </h1>
                <p className="leading-relaxed">
                  A group picture of college graduates celebrating their
                  graduation day with big smiles and excitement,and sharing the joy of accomplishment.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2  p-4">
            <div className="flex relative">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src="https://i.ibb.co/M7F9vz4/akson-1-K8p-Ib-Irhk-Q-unsplash-1-min.jpg"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                {/* <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2> */}
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Friends Forever
                </h1>
                <p className="leading-relaxed">
                  A heartwarming photo of college friends, arm in arm, donning
                  their graduation gowns, and sharing the joy of accomplishment.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2  p-4">
            <div className="flex relative">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src="https://i.ibb.co/zXxNP25/1-1-min.jpg"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                {/* <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2> */}
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Throwing Graduation Caps
                </h1>
                <p className="leading-relaxed">
                  Capturing the exhilarating moment of college graduates
                  throwing their caps up in the air, symbolizing the completion
                  of their academic journey.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src="https://i.ibb.co/fMQ3mtC/students-studying-together-library-1-min.jpg"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                {/* <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2> */}
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Proud Alumni
                </h1>
                <p className="leading-relaxed">
                  An image showcasing a group of graduates proudly displaying
                  their diplomas as they step into the next chapter of their
                  lives as alumni.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src="https://i.ibb.co/dgXwpCv/three-happy-international-graduate-friends-greeting-university-campus-graduation-robes-with-diploma.jpg"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                {/* <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2> */}
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Tassel Turners
                </h1>
                <p className="leading-relaxed">
                  A delightful picture of graduates turning their graduation
                  tassels from right to left, signifying the official transition
                  from students to graduates.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src="https://i.ibb.co/XF6KBj6/group-colleagues-with-diploma-1-min.jpg"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                {/* <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2> */}
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Confetti Celebration
                </h1>
                <p className="leading-relaxed">
                  A vibrant photo capturing the jubilant celebration of college
                  graduates amidst a shower of confetti, marking the end of
                  their academic voyage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;