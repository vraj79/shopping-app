// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyCBUhJETFSnw7TLWgUJ3I3RaY95feaW_nk",
  authDomain: "authentication-83614.firebaseapp.com",
  projectId: "authentication-83614",
  storageBucket: "authentication-83614.appspot.com",
  messagingSenderId: "548281803465",
  appId: "1:548281803465:web:e59e6ac2d8411bba26e318",
  measurementId: "G-07FQDHTJ47"
};

export const app = initializeApp(firebaseConfig);
export const auth=getAuth()

