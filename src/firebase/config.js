import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // your firebase config
  apiKey: "AIzaSyBMT0881l0D5D8aALsD6t1aKuA4LQW8w-M",
  authDomain: "vcall-meeting-818cc.firebaseapp.com",
  projectId: "vcall-meeting-818cc",
  storageBucket: "vcall-meeting-818cc.firebasestorage.app",
  messagingSenderId: "379965919222",
  appId: "1:379965919222:web:44d6922c199d54c803c1d7",
  measurementId: "G-MJYQDRS23P",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);
export { auth, firestore };
