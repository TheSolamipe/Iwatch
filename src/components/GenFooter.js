import React from "react";

export default function GenFooter() {
  return (
    <div className="genFooter">
      <div className="genFooter__top">
        <span className="genFooter__top--logo"></span>
        <ul className="genFooter__top--list">
          <li className="genFooter__top--list-item">Welcome</li>
          <li className="genFooter__top--list-item">Features</li>
          <li className="genFooter__top--list-item">Specification</li>
          <li className="genFooter__top--list-item">Buy Now</li>
        </ul>
        <div className="genFooter__top--icon">
          <img
            src="/../images/ig.png"
            className="genFooter__top--icon-img"
            alt="instagram"
          />
          <img
            src="/../images/fb.png"
            className="genFooter__top--icon-img"
            alt="facebook"
          />
          <img
            src="/../images/tw.png"
            className="genFooter__top--icon-img"
            alt="twitter"
          />
        </div>
      </div>
      <div className="genFooter__bottom">
        <p className="genFooter__bottom--text">
          Trade in: Trade out values vary. iphone 11 and iphone 11 pro <br />
          pomotional pricing take a call when you are out of water. ask siri{" "}
          <br />
          to send a message when not aware. my name is tyler fitness <br />
          and i design for fun. i am a product designer and i love my <br />
          job so much{" "}
        </p>
        <p className="genFooter__bottom--creds">
          Copyright designed by @ 2020.Tyler Designs. developed by @ 2020. Sola.
          All rights reserved.
        </p>
      </div>
    </div>
  );
}
