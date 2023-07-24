import React, { useEffect, useState } from "react";

import Footer from "../share/footer/Footer";
import Header from "../share/header/Header";
import { Link } from "react-router-dom";

const Admission = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/colleges")
      .then((res) => res.json())
      .then((data) => setColleges(data));
  }, []);

  return (
    <div>
      <Header />
      <div className="flex flex-col text-center w-full mb-10 my-8">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Admissions and Enrollment
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Join our vibrant community of learners and let your academic aspirations take flight.
          </p>
        </div>
      <div className="max-w-screen-xl mx-auto px-4 mb-10 md:px-8">
        <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
          <table className="w-full table-auto text-sm">
            <thead className="bg-gray-50 text-gray-800 font-semibold">
              <tr>
                <th className="py-3 px-6 text-left">Serial</th>
                <th className="py-3 px-6 text-left">College Name</th>
                <th className="py-3 px-6 text-left">Details</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 divide-y">
              {colleges.map((college, index) => (
                <tr key={college._id}>
                  <td className="py-3 px-6 whitespace-nowrap">{index + 1}</td>
                  <td className="py-3 px-6 whitespace-nowrap">
                    <Link to={`/form/${college._id}`}>{college.collegeName}</Link>
                  </td>
                  <td className="py-3 px-6 whitespace-nowrap">
                    <Link to={`/college/${college._id}`}>
                      <button className="px-3 py-1 text-sm font-medium text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        View Details
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Admission;
