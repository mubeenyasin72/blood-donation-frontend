import React from "react";
import { Route, BrowserRouter, Link, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import "./header.css"

function Header() {
  return (
    <div>
      <header className="main-header">
        <nav className="navbar navbar-static-top">
          <div className="navbar-top">
            <div className="container">
              <div className="row">
                <div className="col-sm-6 col-xs-12">
                  <ul className="list-unstyled list-inline header-contact">
                    <li>
                      {" "}
                      <i className="fa fa-phone"></i>{" "}
                      <a href="tel:">+92 304 4700561 </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fa fa-envelope"></i>{" "}
                      <a href="mailto:bcsf17a545@pucit.edu.pk">
                        18-NTU-CS-1081@student.ntu.edu.pk
                      </a>{" "}
                    </li>
                  </ul>
                </div>
                <div className="col-sm-6 col-xs-12 text-right">
                  <ul className="list-unstyled list-inline header-social">
                    <li>
                      {" "}
                      <a href="#">
                        {" "}
                        <i className="fa fa-facebook"></i>{" "}
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#">
                        {" "}
                        <i className="fa fa-twitter"></i>{" "}
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#">
                        {" "}
                        <i className="fa fa-google"></i>{" "}
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#">
                        {" "}
                        <i className="fa fa-youtube"></i>{" "}
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#">
                        {" "}
                        <i className="fa fa fa-pinterest-p"></i>{" "}
                      </a>{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="navbar-main">
            <div className="container">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle collapsed"
                  data-toggle="collapse"
                  data-target="#navbar"
                  aria-expanded="false"
                  aria-controls="navbar"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="index.html">
                  <img alt="" />
                </a>
              </div>
              <div id="navbar" className="navbar-collapse collapse pull-right">
                <ul className="nav navbar-nav">
                  <li>
                    <Link to="./">HOME</Link>
                  </li>
                  {/* <li>
                    <Link to="/medicine">MEDICINE</Link>
                  </li> */}
                  <li className="has-child">
                    <Link to="/about">ABOUT</Link>
                  </li>
                  {/* <li>
                    <Link to="/login">SIGNIN</Link>
                  </li>
                  <li>
                    <Link to="/register">REGISTER</Link>
                  </li> */}
                  <li>
                    <Link to="/contact">CONTACT</Link>
                  </li>
                </ul>
                <BrowserRouter>
                  <Switch>
                    <Route exact path="./">
                      <Home />
                    </Route>
                    {/* <Route exact path="./medicine">
                      <Medicine />
                    </Route> */}
                    <Route path="./about">
                      <About />
                    </Route>
                    {/* <Route path="./login">
                      <Login />
                    </Route>
                    <Route path="./register">
                      <Register/>
                    </Route> */}
                    <Route path="./contact">
                      <Contact />
                    </Route>
                  </Switch>
                </BrowserRouter>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
