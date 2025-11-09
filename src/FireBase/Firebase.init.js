// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCY4CpiTaQgaqkQI9obaAt6oK6fUEoSdnA",
  authDomain: "freelance-marketplace-5fc68.firebaseapp.com",
  projectId: "freelance-marketplace-5fc68",
  storageBucket: "freelance-marketplace-5fc68.firebasestorage.app",
  messagingSenderId: "312919229529",
  appId: "1:312919229529:web:550041891fef9081d35d48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);