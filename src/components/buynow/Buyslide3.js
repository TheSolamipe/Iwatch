import React from "react";
import "./../../sass/main.scss";
import { Link } from "react-router-dom";

export default function Buyslide3() {
  return (
    <div className="buynow">
      <div className="buynow__images">
        <img
          src="/../../images/pinksm.png"
          className="buynow__images-1"
          alt="watch1"
        />
        <img
          src="/../../images/black.png"
          className="buynow__images-2"
          alt="watch2"
        />
        <img
          src="/../../images/bluesm.png"
          className="buynow__images-3"
          alt="watch3"
        />
      </div>

      <div className="buynow__content">
        <h1 className="buynow__content--heading">
          Apple Smart Watch <br /> Series 3
        </h1>
        <p className="buynow__content--price">
          #45,000 <span className="buynow__content--price-fade">#65,000</span>
        </p>
        <p className="buynow__content--text">
          Take a call when you are out of water. ask siri to send a message{" "}
          <br /> Stream your favourite songs on your run, And do it while
          leaving <br /> your phone behind, it is apple watch series 3
        </p>
        <h2 className="buynow__content--color">COLOR</h2>
        <div className="buynow__content--btns">
          <Link to="/buynow" className="buynow__content--btn">
            <span className="buynow__content--btn-white"></span>
          </Link>
          <Link to="/buynow2" className="buynow__content--btn">
            <span className="buynow__content--btn-blue"></span>
          </Link>
          <Link to="/buynow3" className="buynow__content--btn">
            <span className="buynow__content--btn-black"></span>
          </Link>
          <Link to="/buynow4" className="buynow__content--btn">
            <span className="buynow__content--btn-pink"></span>
          </Link>
        </div>
        <Link to="/buynow" className="buynow__content--clickbtn">
          <span>BUY NOW</span>
          <span className="buynow__content--btn-arr">&rarr;</span>
        </Link>
      </div>
    </div>
  );
}
