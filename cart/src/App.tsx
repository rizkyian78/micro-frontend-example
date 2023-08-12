import React from "react";
import ReactDOM from "react-dom";

import "remixicon/fonts/remixicon.css";
import "./index.scss";
//@ts-ignore
import Header from "home/Header";
//@ts-ignore
import Footer from "home/Footer";
import CardContent from "./CardContent";




const App = () => (
  <div className="mx-auto max-w-6xl">
    <Header />
    <div className="my-10">
      <CardContent />
    </div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
