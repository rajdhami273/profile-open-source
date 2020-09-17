import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import * as firebase from "firebase/app";
import "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyC4MTOKcrCTJDanPuHJU5FwsHDqmxeU9YA",
  authDomain: "myprofile-reactjs.firebaseapp.com",
  databaseURL: "https://myprofile-reactjs.firebaseio.com",
  projectId: "myprofile-reactjs",
  storageBucket: "myprofile-reactjs.appspot.com",
  messagingSenderId: "447939567392",
  appId: "1:447939567392:web:3fc16ff2d5801684b84145",
  measurementId: "G-TXFW1HL5GT",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
ReactDOM.render(<App />, document.getElementById("root"));
