import React, { useContext, useRef, useState } from "react";
import { Toaster, toast } from "react-hot-toast";

import { AuthContext } from "../../provider/AuthProvider";
import Footer from "../share/footer/Footer";
import Header from "../share/header/Header";
import { Link } from "react-router-dom";

const AdmissionForm = () => {
  const { user } = useContext(AuthContext);
//   const [isSubmitted, setIsSubmitted] = useState(false);
  const handleAdmissionForm = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const subject = form.subject.value;
    const phone = form.phone.value;
    const birth = form.birth.value;
    const address = form.address.value;

    const admissionForm = {
      name,
      email,
      photo,
      subject,
      phone,
      birth,
      address,
    };
    console.log(admissionForm);

    const options = {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(admissionForm),
    };

    fetch("http://localhost:5000/admissionForm", options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        if (response.acknowledged === true) {
          toast.success("Successfully done!");
          form.reset(); // Added parentheses to actually reset the form
          window.location.href = "/my-college"; // Redirect to My College page
        } else {
          toast.error("An error occurred. Please try again later.");
        }
      })
      .catch((error) => {
        console.error("Error occurred:", error);
        toast.error("An error occurred. Please try again later.");
      });

    // After successful form submission, set isSubmitted to true
    // setIsSubmitted(true);
  };

  return (
    <div>
      <Header />
      <div className="md:mb-32 sm:mb-12">
        <h2 className="h3 text-center pt-10 pb-5">Admission Form</h2>

        <div>
          <main className="pt-8 pb-16 w-1/2 mx-auto">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
              <div className="mt-12 max-w-lg mx-auto">
                <form onSubmit={handleAdmissionForm} className="space-y-5">
                  <div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
                    <div>
                      <label className="font-medium">Candidate Name</label>
                      <input
                        name="name"
                        type="text"
                        required
                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="font-medium">Candidate Photo URL</label>
                      <input
                        name="photo"
                        type="photo"
                        required
                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
                    <div>
                      <label className="font-medium">
                        Candidate Phone Number
                      </label>
                      <input
                        name="phone"
                        type="tel"
                        // defaultValue={user?.displayName}
                        required
                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="font-medium">Candidate Email</label>
                      <input
                        name="email"
                        type="email"
                        defaultValue={user?.email}
                        required
                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
                    <div>
                      <label className="font-medium">Subject</label>
                      <input
                        name="subject"
                        type="text"
                        required
                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="font-medium">Date of Birth</label>
                      <input
                        type="date"
                        name="birth"
                        min={0}
                        step={1}
                        required
                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-medium">Address</label>
                    <textarea
                      required
                      typeof="text"
                      name="address"
                      className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                    ></textarea>
                  </div>
                  <div>
                    {/* {!isSubmitted && ( // Conditionally render the button if not submitted
                      <div>
                        <button
                          type="submit"
                          className="text-center w-full px-4 py-2 text-white font-medium bg-green-600 hover:bg-green-500 active:bg-green-600 rounded-lg duration-150"
                        >
                          Confirm
                        </button>
                      </div>
                    )} */}
                   
                        <button
                          type="submit"
                          className="text-center w-full px-4 py-2 text-white font-medium bg-green-600 hover:bg-green-500 active:bg-green-600 rounded-lg duration-150"
                        >
                          Confirm
                        </button>
                   

                    <Toaster />
                  </div>
                </form>

                {/* {isSubmitted && (
                  <div>
                    <Link to="/my-college">
                      <button className="text-center w-full px-4 py-2 text-white font-medium bg-green-600 hover:bg-green-500 active:bg-green-600 rounded-lg duration-150">
                        Redirect to My College
                      </button>
                    </Link>
                  </div>
                )} */}
              </div>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdmissionForm;
