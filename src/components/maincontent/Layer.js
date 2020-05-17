import React from "react";
import "../../sass/main.scss";
import { Link } from "react-router-dom";

export default function Layer() {
  return (
    <div className="layer">
      <div className="layer__logo">
        <span className="logo__img"></span>
      </div>
      <div className="layer__slide">
        <Link to="/" className="layer__slide-item"></Link>
        <br />
        <Link to="/landing2" className="layer__slide-item"></Link>
        <br />
        <Link to="/landing3" className="layer__slide-item"></Link>
        <br />
        <Link to="/landing4" className="layer__slide-item"></Link>
        <br />
      </div>
    </div>
  );
}
