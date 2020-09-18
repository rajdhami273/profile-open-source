import React from "react";
import "./Home.css";
import Icon from "../../components/Icon/Icon";
const Home = (props) => {
  return (
    <div className="home-container">
      <div className="home-wrapper">
        <div className="info-container">
          <div className="left">
            <div className="profile-photo">
              <img
                style={{ width: "100%", height: "100%" }}
                src={"./assets/media/profile.jpg"}
              />
            </div>
          </div>
          <div className="middle">
            <div className="greetings">
              Full Stack Developer.
              {/* <div className="left-align">Hello | Namastey </div> */}
            </div>
            <div className="short-desc">
              I make Mobile and Web Applications.
            </div>
            {/* <br></br>
            <br></br> */}
            <div className="intro-wrapper">
              <div className="intro">My name is John Doe.</div>
            </div>
            <div className="icons-bar">
              <Icon src={"../../../assets/media/linkedin.png"} link={""} />
              <Icon src={"../../../assets/media/github.png"} link={""} />
              {/* <Icon src={"../../../assets/media/facebook.png"} />
              <Icon src={"../../../assets/media/instagram.png"} /> */}
              <Icon src={"../../../assets/media/mail.png"} link={""} />
            </div>
          </div>
          <div className="description">
            {/* <div className="heading">Something about me?</div> */}
            <div className="desc-text">
              A young and enthusiastic <span class="rotate">8</span>-years-old{" "}
              <b>Full Stack Web and Mobile Apps Developer</b> with 2+ years of
              experience.
            </div>
            <div className="desc-text">
              Currently working for a super-cool startup called{" "}
              <a href="" target="_blank" className="text-link">
                <b>MyCompany</b>
              </a>
              !
            </div>
            <div
              className="desc-text"
              style={{ marginTop: 5, marginBottom: 5 }}
            >
              What do I do apart from coding ? <br></br>
              In love with anything related to soccer and playing guitar.
            </div>
            Quote that drives me:
            <div className="desc-text">
              &emsp;&emsp;"Quote that drives you is the quote you write here.
              Else change everything as required. Feel free to ask questions."
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
