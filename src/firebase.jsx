
import { initializeApp } from "firebase/app";
import {getAuth} from  "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyD9ClmN-bimffeogZrKBgW_mfWaL5j7Rmg",
  authDomain: "react-auth-c1c36.firebaseapp.com",
  projectId: "react-auth-c1c36",
  storageBucket: "react-auth-c1c36.appspot.com",
  messagingSenderId: "640037078731",
  appId: "1:640037078731:web:36dd565150a9352334bd4e",
  measurementId: "G-EQ2R51XJGC"
};
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)