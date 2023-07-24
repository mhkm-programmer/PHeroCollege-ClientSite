import AboutUs from "../pages/about/AboutUs";
import Admission from "../pages/admission/Admission";
import AdmissionForm from "../pages/admission/AdmissionForm";
import AllCollege from "../pages/allCollegeCard/AllCollege";
import BlogPages from "../pages/blogs/BlogPages";
import ChefCard from "../pages/Home/chefCard/ChefCard";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Main from "../layouts/Main";
import MyCollege from "../pages/my-college/MyCollege";
import PrivateRouter from "./PrivateRouter";
import Recipe from "../layouts/UniversityDetails";
import Register from "../layouts/logLayouts/Register";
import SignIn from "../layouts/logLayouts/SignIn";
import Terms from "../pages/terms/Terms";
import UniversityDetails from "../layouts/UniversityDetails";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "/login",
    element: <SignIn></SignIn>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/all-college",
    element: <AllCollege />,
  },
  {
    path: "/college",
    element: <ChefCard></ChefCard>,
  },

  {
    path: "/college/:id",
    element: <UniversityDetails />,
    loader: ({ params }) =>
      fetch(`http://localhost:5000/colleges/${params.id}`),
  },
  {
    path: "/admission",
    element: <Admission />,
  },
  {
    path: "/form/:id",
    element: <AdmissionForm />,
  },
  {
    path: "/blog",
    element: <BlogPages></BlogPages>,
  },
  {
    path: "/my-college",
    element: <MyCollege />,
  },
  {
    path: "/about",
    element: <AboutUs></AboutUs>,
  },
  {
    path: "/terms",
    element: <Terms></Terms>,
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
