import '@smastrom/react-rating/style.css'
import "./index.css";

import AuthProvider from './provider/AuthProvider';
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <AuthProvider>
  <div className='max-w-screen-xl mx-auto'>
            <RouterProvider router={router} />
          </div>
  </AuthProvider>

  </React.StrictMode>
);
