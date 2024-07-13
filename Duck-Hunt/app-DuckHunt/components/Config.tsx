import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";

export const firebaseConfig = {
  apiKey: "AIzaSyBOA3-xtYPwEkCRaTBR_UU7y6rZXnI6EiU",
  authDomain: "app-movil-acbfa.firebaseapp.com",
  databaseURL: "https://app-movil-acbfa-default-rtdb.firebaseio.com",
  projectId: "app-movil-acbfa",
  storageBucket: "app-movil-acbfa.appspot.com",
  messagingSenderId: "341183990697",
  appId: "1:341183990697:web:6916a8a0e06c0e0d8b52b8",
  measurementId: "G-BSD288Q9XQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
