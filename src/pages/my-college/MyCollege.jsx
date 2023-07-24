import React, { useContext, useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";

import { AuthContext } from "../../provider/AuthProvider";
import Footer from "../share/footer/Footer";
import Header from "../share/header/Header";
import ReactStars from "react-rating-stars-component";
import Spinner from "../share/spinner/Spinner";
import { useNavigate } from "react-router-dom";

const MyCollege = () => {
  const { user,loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const [myColleges, setMyColleges] = useState([]);
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);

  if (loading) {
    return <Spinner />;
  }


  const options = {
    method: "GET",
    headers: {
      authorization: `Bearer ${localStorage.getItem("myCollege-access-token")}`,
    },
  };

  const url = `http://localhost:5000/myCollege?email=${user?.email}`;
  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setMyColleges(data);
        } else {
          navigate("/");
        }
      });
  }, [user]);

   // Create state to track reviews and ratings for each college
   const [collegeReviews, setCollegeReviews] = useState({});

   const handleSubmitReview = (collegeId) => {
     const formData = {
       review: collegeReviews[collegeId]?.review || "",
       rating: collegeReviews[collegeId]?.rating || 0,
     };
 
     const options = {
       method: "PATCH",
       headers: {
         "Content-Type": "application/json",
         authorization: `Bearer ${localStorage.getItem("myCollege-access-token")}`,
       },
       body: JSON.stringify(formData),
     };
 
     fetch(`http://localhost:5000/admissionForm/${collegeId}`, options)
       .then((res) => res.json())
       .then((data) => {
         if (data.modifiedCount > 0) {
           toast.success("Review and rating submitted successfully!");
           setCollegeReviews((prevReviews) => ({
             ...prevReviews,
             [collegeId]: {
               reviews: "",
               rating: 0,
             },
           }));
         } else {
           toast.error("Failed to submit review and rating. Please try again.");
         }
       })
       .catch((error) => {
         toast.error("An error occurred. Please try again later.");
       });
   };

  return (
    <div>
      <Header />
      <div className="flex flex-col text-center w-full mb-10 my-8">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Unlocking Doors to Success: Your Journey Starts
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
         Quench your thirst for knowledge in an environment that fosters critical thinking, research, and intellectual growth."
          </p>
        </div>
      <div className="max-w-screen-xl mx-auto px-4 mb-12 md:px-8">
        <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
          <table className="w-full table-auto text-sm text-left">
            <thead className="bg-gray-50 text-gray-600 font-medium border-b">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Serial
                </th>
                <th scope="col" className="px-6 py-3">
                  Name & Image
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Number
                </th>
                <th scope="col" className="px-6 py-3">
                  Subject
                </th>
                <th scope="col" className="px-6 py-3">
                  Address
                </th>
                <th scope="col" className="px-6 py-3">
                  Feedback and Rating
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-600 divide-y">
              {myColleges.map((college, index) => (
                <tr key={college._id}>
                  <td className="py-3 px-6 whitespace-nowrap">{index + 1}</td>
                 
                  <td className="py-3 px-6 whitespace-nowrap">
                  <div className="flex items-center">
                <img
                  src={college.photo} // Assuming you have a 'photo' field in the college object
                  alt={college.photo} // Assuming you have a 'name' field in the college object
                  className="w-12 h-12 rounded mr-4"
                />
                <span>{college.name}</span>
              </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{college.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{college.phone}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{college.subject}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{college.address}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-col items-center">
                     <div>
                     <textarea
                        className="resize-none border rounded w-40 h-20 p-2 mr-2"
                        value={collegeReviews[college._id]?.review || ""}
                        onChange={(e) =>
                          setCollegeReviews((prevReviews) => ({
                            ...prevReviews,
                            [college._id]: {
                              ...prevReviews[college._id],
                              review: e.target.value,
                            },
                          }))
                        }
                        placeholder="Write your review here"
                      />
                      </div>
                     <div>
                      <ReactStars
                        count={5}
                        value={collegeReviews[college._id]?.rating || 0}
                        onChange={(newRating) =>
                          setCollegeReviews((prevReviews) => ({
                            ...prevReviews,
                            [college._id]: {
                              ...prevReviews[college._id],
                              rating: newRating,
                            },
                          }))
                        }
                        size={24}
                        activeColor="#ffd700"
                      />
                      <button
                        className="bg-green-500 text-white mt-2 px-4 py-2 rounded ml-4"
                        onClick={() => handleSubmitReview(college._id)}
                      >
                        Submit
                      </button>
                     </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
      <Toaster />
    </div>
  );
};

export default MyCollege;
