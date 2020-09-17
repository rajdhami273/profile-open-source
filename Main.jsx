import React from "react";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import CommonLayout from "./src/CommonLayout/CommonLayout";
const Main = () => {
  return (
    <Router>
      <CommonLayout />
    </Router>
  );
};

export default Main;
