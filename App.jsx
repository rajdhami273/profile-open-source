import React from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./Main";
function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}
export default hot(module)(App);
