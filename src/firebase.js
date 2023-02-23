import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAYbnhwDzHstFwPi6XENHANMuElWrPFniM",
  authDomain: "chatapp-f2925.firebaseapp.com",
  projectId: "chatapp-f2925",
  storageBucket: "chatapp-f2925.appspot.com",
  messagingSenderId: "1085974984018",
  appId: "1:1085974984018:web:bff9b44a1789e39b06768b",
  measurementId: "G-QX7YYTJLQ5"
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
