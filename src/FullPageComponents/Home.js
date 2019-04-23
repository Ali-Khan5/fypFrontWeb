import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./style.css";
import FAQ from "./Faq";
import Typewriting from "./../Components/Typwriting";
import BGimg from "./../homebk.png";
import About from "./About";
class Home extends Component {
  render() {
    return (
      // <!--Main Navigation-->
      <div>
        <div className="  bgImg ">
          <div
            className=" forground container-full-bg"
            style={{ height: "105vh" }}
          >
            <div className="container ">
              <br />
              <br />
              <h2
                className="text-center"
                style={{ color: "#ffffff", fontWeight: "bold", opacity: "1" }}
              >
                Are you looking for{" "}
              </h2>
              <br />
              <Typewriting />
              <h2
                className="text-center homeHeading2"
                style={{ color: " #ffffff", fontWeight: "bold" }}
              >
                Then you have come to the right place
              </h2>
              {/* <i className="fas fa-arrow-circle-down add-to-cart" /> */}{" "}
              <br />
              <div className=" text-center ">
                {" "}
                <Link
                  
                  to="section1"
                  spy={true}
                  smooth={true}
                  offset={-30}
                  duration={500}
                  className="havouring"
                >
                  <i className=" buttonfloat add-to-cart fas fa-arrow-circle-down homeArrow " />
                </Link>
              </div>{" "}
            </div>
            <br />
          </div>
        </div>
        <About />
        <FAQ />
      </div>
    );
  }
}

export default Home;
