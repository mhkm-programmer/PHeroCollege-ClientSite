import React, { useEffect, useState } from "react";

import Category from "../pages/Home/category/Category";
import ChefCard from "../pages/Home/chefCard/ChefCard";
import Footer from "../pages/share/footer/Footer";
import Header from "../pages/share/header/Header";
import HeroSlider from "../pages/Home/heroBanner.jsx/HeroSlider";
import NewsLetter from "../pages/Home/newsLetter/NewsLetter";
import ResearchPapers from "../pages/researchPapers/ResearchPapers";
import TestimonialSlider from "../pages/testimonials/TestimonialSlider";

const Main = () => {
  const [colleges, setColleges] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [noCollegesFound, setNoCollegesFound] = useState(false);


  const [testimonials, setTestimonials] = useState([]);
  const [tableItems, setTableItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/colleges")
      .then((res) => res.json())
      .then((data) => {
        setColleges(data);
        setTableItems(data);
        setSearchResults(data); // Initialize search results with the original list
      })
      .catch((error) => console.error(error));
  }, []);

  const handleSearch = () => {
    if (searchText.trim() === "") {
      // If search text is empty or contains only whitespace, show the original list
      
      setSearchResults(colleges);
      setNoCollegesFound(false);
    } else {
      fetch(`http://localhost:5000/getCollegeNameByText/${searchText}`)
        .then((res) => res.json())
        .then((result) => {
          setSearchResults(result); // Update search results with matching colleges
          setNoCollegesFound(result.length === 0);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setNoCollegesFound(true); // Set to true if an error occurs during fetching
        });
    }
  };

 

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleRedirectHome = () => {
    window.location.href = "/";
  };


  useEffect(() => {
    // Fetch testimonials from the backend
    fetch("http://localhost:5000/testimonials")
      .then((res) => res.json())
      .then((data) => setTestimonials(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <Header></Header>

      <div className="text-center my-6">
        <input
          type="text"
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={handleKeyDown} // Call handleKeyDown on key press
          className="w-1/2 py-2 pl-10 pr-4 mr-4 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
          placeholder="Search Your College"
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* Conditionally render the ChefCard based on searchResults */}
      {searchText ? (
        <div className="container mx-auto px-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {searchResults.length > 0 ? (
            searchResults.slice(0, 3).map((college) => (
              <ChefCard key={college.id} college={college}></ChefCard>
            ))
          ) : noCollegesFound ? (
            <p>No colleges found.</p>
          ) : null}
        </div>
      ) : (
        <>
          {/* Render the HeroSlider if no search text */}
          <HeroSlider></HeroSlider>

          {/* Always render the ChefCard for the first 3 colleges */}
          <div className="flex flex-col text-center w-full mb-10">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          College Information
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Explore some of the top colleges and their details below.
          </p>
        </div>
          <div className="container mx-auto px-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {colleges.slice(0, 3).map((college) => (
              <ChefCard key={college.id} college={college}></ChefCard>
            ))}
          </div>
        </>
      )}

      <Category></Category>
      
          <div className="max-w-screen-xl mx-auto px-4 md:px-8 text-center">
          <div className="flex flex-col text-center w-full mb-10">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Research Papers by College Students
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Recommended Research Paper Links
          </p>
        </div>
     
      <div className="mt-12">
        {/* Pass the fetched data to the TeamMembersTable component */}
        <ResearchPapers tableItems={tableItems} />
      </div>
    </div>
    
      <TestimonialSlider testimonials={testimonials} />
      <Footer></Footer>
    </div>
  );
};

export default Main;
