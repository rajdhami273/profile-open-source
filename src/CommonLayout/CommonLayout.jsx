import React, { useState, useEffect } from "react";
import Particles from "react-particles-js";
import Home from "../pages/Home/Home";
import Header from "../components/Header/Header";
import "./CommonLayout.css";
import Footer from "../components/Footer/Footer";
import * as firebase from "firebase";
import axios from "axios";
const CommonLayout = (props) => {
  const [darkMode, toggleDarkMode] = useState(false);
  const routes = [{ path: "/", exact: true, component: <Home /> }];
  const toggleTheme = (e) => {
    if (e.target.checked) {
      document.body.classList.toggle("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    toggleDarkMode(!darkMode);
  };

  const logPageViewWithIP = async () => {
    let ip = "";
    try {
      const ipdata = await axios.get("https://api.ipify.org?format=json");
      if (ipdata) {
        ip = ipdata.data.ip;
        console.log(ip);
      }
    } catch (error) {
      console.log("Error");
    } finally {
      firebase.analytics().logEvent("user_ip", { ip: ip });
    }
  };

  useEffect(() => {
    logPageViewWithIP();
  }, []);
  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        <input
          type="checkbox"
          name="checkbox"
          className="switch"
          onChange={toggleTheme}
        />
      </div>
      <Home />
      <Footer />
      <Particles
        params={{
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "grab",
              },
            },
          },
          resize: true,
          particles: {
            color: darkMode ? "#fff" : "#000",
            links: {
              color: darkMode ? "#fff" : "#000",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            number: {
              value: 10,
              density: {
                enable: true,
                value_area: 800,
              },
            },
          },
        }}
      />
    </div>
  );
};

export default CommonLayout;
