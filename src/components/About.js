import React from "react";
import { Link } from "react-router-dom";

import "../sass/main.scss";

export default function About() {
  return (
    <div className="about">
      <div className="about__def">
        <h1 className="about__def--header">About The Watch</h1>
        <p className="about__def--text">
          Take a call when you are out of water. ask siri to send a message{" "}
          <br /> Stream your favourite songs on your run, And do it while
          leaving <br />
          your phone behind, it is apple watch series 3
        </p>
        <Link to="/" className="about__def--btn">
          &larr; GO BACK HOME
        </Link>
      </div>
      <div className="about__image1">
        <img
          src="/../../images/watchad1.png"
          className="about__image1-con"
          alt="watch1"
        />
      </div>
      <div className="about__foot">
        <img
          src="/../../images/watchad3.png"
          className="about__foot--image"
          alt="watch2"
        />
        <ul className="about__foot--list">
          <li className="about__list-item">
            <span className="about__list-icon"></span>Water & Scratch resistance
          </li>
          <li className="about__list-item">
            <span className="about__list-icon"></span>Automatic Movement
          </li>
          <li className="about__list-item">
            <span className="about__list-icon"></span>Precious Gemstones
          </li>
          <li className="about__list-item">
            <span className="about__list-icon"></span>Different Bracelets
          </li>
          <li className="about__list-item">
            <span className="about__list-icon"></span>Reflective Coating
          </li>
        </ul>
      </div>
    </div>
  );
}
