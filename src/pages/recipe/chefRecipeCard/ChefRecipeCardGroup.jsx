import { Rating } from '@smastrom/react-rating';
import React from 'react';

const ChefRecipeCardGroup = () => {
    return (
            <section className="text-gray-600 body-font">
    <div className="container px-5 py-16 mx-auto">
        <div className="flex flex-wrap -m-4">
        <div className="p-4 lg:w-1/3">
            <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden  relative">
           
            <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Raclette Blueberry Nextious Level</h1>
            <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            
            <div>
                <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Ingredients:</h2>
                    <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                        <li>
                            At least 10 characters (and up to 100 characters)
                        </li>
                        <li>
                            At least one lowercase character
                        </li>
                        <li>
                            Inclusion of at least one special character, e.g., ! @ # ?
                        </li>
                        <li>
                            Inclusion of at least one special character, e.g., ! @ # ?
                        </li>
                        <li>
                            Inclusion of at least one special character, e.g., ! @ # ?
                        </li>
                    </ul>
            </div>
            <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full p-4">
            <div className=" mt-2 leading-none flex flex-wrap justify-between  w-full pt-4">
            <div className='flex items-center gap-2'>
               
               <Rating
                style={{ maxWidth: 100 }}
                value={3.7}
                readOnly
                />
                <span className='font-bold'>3.7</span>
               </div>
               <div>
                <button className='btn btn-default'>Favorite </button>
               </div>
            </div>
            </div>
            </div>
        </div>
        <div className="p-4 lg:w-1/3">
            <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden relative">
           
            <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Ennui Snackwave Thundercats</h1>
            <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
           
            <div>
                <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Ingredients:</h2>
                    <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                        <li>
                            At least 10 characters (and up to 100 characters)
                        </li>
                        <li>
                            At least one lowercase character
                        </li>
                        <li>
                            Inclusion of at least one special character, e.g., ! @ # ?
                        </li>
                        <li>
                            Inclusion of at least one special character, e.g., ! @ # ?
                        </li>
                        <li>
                            Inclusion of at least one special character, e.g., ! @ # ?
                        </li>
                    </ul>
            </div>
            <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full p-4">
            <div className=" mt-2 leading-none flex flex-wrap justify-between  w-full pt-4">
            <div className='flex items-center gap-2'>
               
               <Rating
                style={{ maxWidth: 100 }}
                value={3.7}
                readOnly
                />
                <span className='font-bold'>3.7</span>
               </div>
               <div>
                <button className='btn btn-default'>Favorite </button>
               </div>
            </div>
            </div>
            </div>
        </div>
        <div className="p-4 lg:w-1/3">
            <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden  relative">
           
            <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Selvage Poke Waistcoat Godard</h1>
            <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
           
            <div>
                <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Ingredients:</h2>
                    <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                        <li>
                            At least 10 characters (and up to 100 characters)
                        </li>
                        <li>
                            At least one lowercase character
                        </li>
                        <li>
                            Inclusion of at least one special character, e.g., ! @ # ?
                        </li>
                        <li>
                            Inclusion of at least one special character, e.g., ! @ # ?
                        </li>
                        <li>
                            Inclusion of at least one special character, e.g., ! @ # ?
                        </li>
                    </ul>
            </div>
            <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full p-4">
               <div className=" mt-2 leading-none flex flex-wrap justify-between  w-full pt-4">
               <div className='flex items-center gap-2'>
               
               <Rating
                style={{ maxWidth: 100 }}
                value={3.7}
                readOnly
                />
                <span className='font-bold'>3.7</span>
               </div>
               <div>
                <button className='btn btn-default'>Favorite </button>
               </div>
            </div>
            </div>
            </div>
        </div>
        </div>
    </div>
            </section>
    );
};

export default ChefRecipeCardGroup;