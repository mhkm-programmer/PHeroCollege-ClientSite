import { FaBookOpen, FaCalendarAlt, FaClipboardList, FaGraduationCap, FaRunning } from "react-icons/fa";
import { Toaster, toast } from "react-hot-toast";

import Footer from "../pages/share/footer/Footer";
import Header from "../pages/share/header/Header";
import React from "react";
import { useLoaderData } from "react-router-dom";

const UniversityDetails = () => {
  const collegeItems = useLoaderData();
  console.log(collegeItems);
  const {
    collegeImage,
    collegeName,
    admissionDates,
    researchHistory,
    sportsCategories,
    sportsDetails,
    admissionProcess,
    events,
    eventsDetails,
    researchWorks,
  } = collegeItems;

  return (
    <div>
      <Header></Header>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
          <div className="p-6 rounded-lg shadow-md">
            <div className="w-full h-70 relative">
              <img
                className="h-auto w-full mx-auto object-cover object-center mb-6 transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
                src={collegeImage}
                alt="University Image"
              />
            </div>
            <div className="rounded-lg bg-white p-6">
              <h2 className="text-3xl font-bold mb-4">{collegeName}</h2>
              <div className="flex items-center gap-2 text-gray-500">
                <FaCalendarAlt />
                <p>Next admission date: {admissionDates}</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="p-6 rounded-lg bg-gray-100">
              <h2 className="text-2xl font-medium mb-4"><FaBookOpen className="inline-block mr-2" />Admission</h2>
              <p className="leading-relaxed text-base">{admissionProcess}</p>
            </div>
            <div className="p-6 rounded-lg bg-gray-100">
              <h2 className="text-2xl font-medium mb-4"><FaRunning className="inline-block mr-2" />Sports</h2>
              <p className="leading-relaxed text-base">{sportsCategories}</p>
              <p className="leading-relaxed text-base">{sportsDetails}</p>
            </div>
            <div className="p-6 rounded-lg bg-gray-100">
              <h2 className="text-2xl font-medium mb-4"><FaGraduationCap className="inline-block mr-2" />Events</h2>
              <p className="leading-relaxed text-base">{events}</p>
              <p className="leading-relaxed text-base">{eventsDetails}</p>
            </div>
            <div className="p-6 rounded-lg bg-gray-100">
              <h2 className="text-2xl font-medium mb-4"><FaClipboardList className="inline-block mr-2" />Research Works</h2>
              <p className="leading-relaxed text-base">{researchHistory}</p>
              <p className="leading-relaxed text-base">{researchWorks}</p>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default UniversityDetails;
