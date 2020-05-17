import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../../sass/main.scss";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <ul className="header__nav">
          <Link to="/" className="header__nav--white">
            <li>Welcome</li>
          </Link>
          <Link to="/about" className="header__nav--white">
            <li>About</li>
          </Link>
          <Link to="/landing3" className="header__nav--norm">
            <li>Specification</li>
          </Link>
          <Link to="/buynow" className="header__nav--norm">
            <li>Buy Now</li>
          </Link>
        </ul>
        <div className="header__logo">
          <span className="icon__img"></span>
        </div>
      </div>
    );
  }
}

export default Header;
