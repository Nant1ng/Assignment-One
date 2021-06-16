import firebase from "firebase/app";
import "firebase/auth";
import dotenv from "dotenv";

dotenv.config();

const FirebaseConfig = firebase.initializeApp({
  apiKey: process.env.React_App_Firebase_Key,
  authDomain: process.env.React_App_Firebase_Domain,
  projectId: process.env.React_App_Firebase_Project_Id,
  storageBucket: process.env.React_App_Firebase_Storage_Bucket,
  messagingSenderId: process.env.React_App_Firebase_Sender_Id,
  appId: process.env.React_App_Firebase_App_Id,
  measurementId: process.env.React_App_Firebase_Measurement_Id,
});

export default FirebaseConfig;
