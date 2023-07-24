import { FaBookOpen, FaCalendarAlt, FaRunning } from "react-icons/fa";

import { Link } from "react-router-dom";
import React from "react";

const ChefCard = ({ college }) => {
  const { _id, collegeImage, collegeName, admissionDates, researchHistory, sportsCategories } = college;

  return (
    <div className="flex justify-center">
      <div className="rounded overflow-hidden shadow-lg flex flex-col">
        <img className="w-full h-72 rounded-t-lg" src={collegeImage} alt="chefName" />
        <div className="px-6 py-4  flex-1">
          <div className="font-bold text-xl mb-2">{collegeName}</div>
          <p className="text-gray-700 text-base mb-2">
            <FaCalendarAlt className="inline-block mr-2" />
            Admission start: {admissionDates}
          </p>
          <p className="text-gray-700 text-base mb-2">
            <FaBookOpen className="inline-block mr-2" />
            Research papers: {researchHistory}
          </p>
          <p className="text-gray-700 text-base mb-2">
            <FaRunning className="inline-block mr-2" />
            Sports: {sportsCategories}
          </p>
          <div className="px-6 py-4 text-center">
            <Link to={`/college/${_id}`}>
              <button className="w-full btn-shadow">Details More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
