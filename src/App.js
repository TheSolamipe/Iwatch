import React from "react";
import "./sass/main.scss";

//router
import { BrowserRouter as Router, Route } from "react-router-dom";

//components
import About from "./components/About";
import Maincontent from "./components/Maincontent";
import GenFooter from "./components/GenFooter";
import BuyNow from "./components/BuyNow";
import SimilarProduct from "./components/SimilarProduct";

function App() {
  return (
    <Router>
      <div className="App">
        <Maincontent />
        <Route exact path="/about" component={About} />
        <Route exact path="/about" component={GenFooter} />
        <Route exact path="/buynow" component={BuyNow} />
        <Route exact path="/buynow" component={SimilarProduct} />
      </div>
    </Router>
  );
}

export default App;
