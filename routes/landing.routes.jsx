import React from "react";
import { Route, Switch, Router, useHistory } from "react-router-dom";
import Home from "../src/pages/Landing/Home/Home";
import ContactMe from "../src/pages/Landing/ContactMe/ContactMe";
import AboutMe from "../src/pages/Landing/AboutMe/AboutMe";

export default function LandingRoutes(props) {
  return (
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/about-me" component={AboutMe} />
      <Route path="/contact-me" component={ContactMe} />
      <Route path="" component={Home} />
    </Switch>
  );
}
