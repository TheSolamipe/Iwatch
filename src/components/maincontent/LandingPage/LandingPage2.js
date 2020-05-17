import React from "react";
import { Link } from "react-router-dom";
import Header from "./../Header";
import Layer from "./../Layer";
import Footer from "./../Footer";

import "../../../sass/main.scss";

export default function LandingPage2() {
  return (
    <div className="land">
      <Header />
      <Layer />
      <div className="landingPage">
        <div className="landingPage__content">
          <h1 className="landingPage__content--header">
            Crafted With <br /> Excellence.
          </h1>
          <p className="landingPage__content--text">
            Take a call when you are out of water. ask siri to send a message{" "}
            <br />
            <br />
            Stream your favourite songs on your run, And do it while leaving{" "}
            <br />
            <br />
            your phone behind, it is apple watch series 3.
          </p>
          <Link to="/buynow" className="landingPage__content--btn">
            <span>BUY NOW</span>
            <span className="landingPage__content--btn-arr">&rarr;</span>
          </Link>
        </div>
        <img
          src="/../../images/white.png"
          className="landingPage__image landingPage__image-white"
          alt="watch1"
        />
        <div className="landingPage__slide">
          <Link to="/" className="landingPage__slide-item">
            bp
          </Link>
          <br />
          <Link to="/landing2" className="landingPage__slide-item">
            fb
          </Link>
          <br />
          <Link to="/landing3" className="landingPage__slide-item">
            ak
          </Link>
          <br />
          <Link to="/landing4" className="landingPage__slide-item">
            fb
          </Link>
          <br />
        </div>
      </div>
      <Footer />
    </div>
  );
}
