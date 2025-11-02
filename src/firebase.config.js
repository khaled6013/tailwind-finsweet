// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1hx0Fm-4uJ2uMj3Zsf3NAQ97pOc79bn4",
  authDomain: "my-newpro-481bc.firebaseapp.com",
  projectId: "my-newpro-481bc",
  storageBucket: "my-newpro-481bc.appspot.com",
  messagingSenderId: "829098818695",
  appId: "1:829098818695:web:01cf267121c7c053af0c22",
  measurementId: "G-VTT8RNCEK8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default firebaseConfig;
