import React from "react";
import ReactDOM from "react-dom";
import "remixicon/fonts/remixicon.css";
import "./index.scss";
//@ts-ignore
import Header from "home/Header";
//@ts-ignore
import Footer from "home/Footer";

import PDPContent from "./PDPContent";
import { BrowserRouter, Route, Routes,  } from "react-router-dom";


const App = () => {
  return (
  <BrowserRouter >
  <div className="mt-10 text-3xl mx-auto max-w-6xl">

      <Header />
      <div className="my-10">

      <Routes>     
       <Route path="/product/:id" Component={PDPContent}/>
    </Routes>
    </div>
    <Footer />
    
  </div>
  </BrowserRouter>
)};
ReactDOM.render(<App />, document.getElementById("app"));
