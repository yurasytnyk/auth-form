import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBwpdI3ee1ViESLP323FRbvH1By_rZXCYc",
  authDomain: "spd-firestore.firebaseapp.com",
  projectId: "spd-firestore",
  storageBucket: "spd-firestore.appspot.com",
  messagingSenderId: "628641635117",
  appId: "1:628641635117:web:b6c16a33ce94f508fe91a4",
};

export const firebase = initializeApp(firebaseConfig);
