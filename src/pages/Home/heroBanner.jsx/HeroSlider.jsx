import React from 'react';

const HeroSlider = () => {
    return (
        <section className="pt-4 pb-12">
        <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-5 items-center justify-between overflow-hidden md:flex md:px-8">
            <div className="flex-none text-center space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
                <h1 className="text-md text-teal-600 font-medium">
                Discover Your Potential...
                </h1>
                <h2 className="text-3xl text-gray-800 font-extrabold md:text-4xl">
                Welcome to Our College
                </h2>
                <p>
                Learn, Explore, Succeed, Empowering Minds, Creating Leaders!!!
                </p>
               
            </div>
            <div className="flex-none mt-14 md:mt-0 md:max-w-xl">
                <img
                    src="https://i.ibb.co/3FvmgP3/Banner-Image-min.jpg"
                    className=" md:rounded-tl-[108px]"
                    alt=""
                />
            </div>
        </div>
       
    </section>
    );
};

export default HeroSlider;