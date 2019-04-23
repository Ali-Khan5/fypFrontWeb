import React, { Component } from "react";
import Image1 from "./../Copyofbullseye4.svg";
import { Link, animateScroll as scroll } from "react-scroll";
class About extends Component {
  render() {
    return (
      <div
        className="container-full-bg container-fluid"
        style={{  backgroundColor: "#d50000" }}
      >
        {" "}
        <br />
        <br />
        <div className="row " style={{ marginTop: "5" }} name='section1'>
          <div className="col-md-4" />
          <div className=" col-md-4  ">
            <img className="SvgCenter" src={Image1} />
          </div>
          <div className="col-md-4" />
        </div>
        <div class="row">
          <div class=" col-md-12">
            <h3 className="AboutUsDescription" 
            >
              Social finder Application eases the efforts of finding a social
              presence of person , Through the use of our secret techniques and
              algorithm we will find the public data of that person. So forget
              the hassle of going to each individual social media site and typing
              the name of the person there. We will provide all possible links
              in our platform and all of them will be a click away. Happy searching
            </h3>
          </div>
        </div>
        <div className=" text-center ">
        <br/>
          {" "}
          <Link
                  
                  to="section2"
                  spy={true}
                  smooth={true}
                  offset={-30}
                  duration={500}
                  className="havouring"
                >
          <i
            style={{ fontSize: "60px", color: "white" }}
            className=" buttonfloat add-to-cart fas fa-arrow-circle-down "
          />
          </Link>
        </div>{" "}
        <br/>
      </div>
    );
  }
}

export default About;
