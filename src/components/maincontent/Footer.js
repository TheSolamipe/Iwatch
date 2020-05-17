import React from "react";
import "../../sass/main.scss";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__1">
        <h1 className="footer-head">Features</h1>
        <p className="footer-text">Let yourself be surprised</p>
      </div>
      <div className="footer__2">
        <h1 className="footer-head">4 Sport</h1>
        <p className="footer-text">Let yourself be surprised</p>
      </div>
      <div className="footer__note">
        <h1 className="footer-head2">How Apple Watch works?</h1>
        <p className="footer-text2">watch the video</p>
      </div>
      <img src="/../images/timer.png" className="footer__video" alt="twitter" />
    </div>
  );
}
