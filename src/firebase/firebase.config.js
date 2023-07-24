// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSEAGEINGSENDERID,
  appId: import.meta.env.VITE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

// // Import the functions you need from the SDKs you need

// import { initializeApp } from "firebase/app";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
  // apiKey: "AIzaSyDt0scEcf6wB7Eli0vcpTlCXYxQ1s_ZFHA",
  // authDomain: "pherocollege.firebaseapp.com",
  // projectId: "pherocollege",
  // storageBucket: "pherocollege.appspot.com",
  // messagingSenderId: "638464507901",
  // appId: "1:638464507901:web:634a359d7b03d324752394"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export default app;