import React from "react";
import { Link } from "react-router-dom";

import "../sass/main.scss";

export default function SimilarProduct() {
  return (
    <div className="similarProduct">
      <div className="similarProduct__top">
        <h1 className="similarProduct__top--header">Similar Products</h1>
        <div className="similarProduct__top--content">
          <span className="similarProduct__top--icon1"></span>
          <div className="similarProduct__top--product">
            <img
              src="/../../images/prod1.png"
              className="similarProduct__top--image"
              alt="watch1"
            />
            <h2 className="similarProduct__top--title">Apple series 1</h2>
            <p className="similarProduct__top--price">#65,000</p>
          </div>
          <div className="similarProduct__top--product">
            <img
              src="/../../images/prod3.png"
              className="similarProduct__top--image"
              alt="watch2"
            />
            <h2 className="similarProduct__top--title">Apple series 1</h2>
            <p className="similarProduct__top--price">#65,000</p>
          </div>
          <div className="similarProduct__top--product">
            <img
              src="/../../images/prod1.png"
              className="similarProduct__top--image"
              alt="watch3"
            />
            <h2 className="similarProduct__top--title">Apple series 1</h2>
            <p className="similarProduct__top--price">#65,000</p>
          </div>
          <div className="similarProduct__top--product">
            <img
              src="/../../images/prod3.png"
              className="similarProduct__top--image"
              alt="watch4"
            />
            <h2 className="similarProduct__top--title">Apple series 1</h2>
            <p className="similarProduct__top--price">#65,000</p>
          </div>
          <span className="similarProduct__top--icon2"></span>
        </div>
      </div>

      <div className="similarProduct__bottom">
        <h1 className="similarProduct__bottom--heading">
          sign up to <br />
          stay in touch
        </h1>
        <Link to="/" className="similarProduct__bottom--btn">
          Enter Your mail &rarr;
        </Link>
      </div>
    </div>
  );
}
