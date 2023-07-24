import React, { useEffect, useState } from "react";

import AllCollegeCard from "./AllCollegeCard";
import Footer from "../share/footer/Footer";
import Header from "../share/header/Header";

const AllCollege = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/colleges")
      .then((res) => res.json())
      .then((data) => {
        setColleges(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Header />
      <div className="flex flex-col text-center w-full mb-10 my-8">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Discover Your Dream College
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Unlock the door to endless possibilities with our wide range of esteemed colleges.
          </p>
        </div>
      <div className="container mx-auto px-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 mt-8 mb-12">
        {colleges.slice(0, 6).map((college) => (
          <AllCollegeCard key={college.id} college={college} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default AllCollege;
