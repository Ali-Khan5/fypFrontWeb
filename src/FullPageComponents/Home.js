import React, { Component } from "react";
import "./style.css";
import About  from "./About";
import Typewriting from "./../Components/Typwriting";
class Home extends Component {
  render() {
    return (
      // <!--Main Navigation-->

     
        <div className="  container-full-bg" style={{ height: "105vh" }}>
          <div className="container">
            <br />
            <br />
        
            <h2 className="text-center">Are you looking for </h2>
            <br />
            <Typewriting />
            <h2  className="text-center homeHeading2" >
              Then you have come to the right place
            </h2>
            {/* <i className="fas fa-arrow-circle-down add-to-cart" /> */}{" "}
            <br/>
            <div className=" text-center ">
              {" "}
              <i
      
                className=" buttonfloat add-to-cart fas fa-arrow-circle-down homeArrow "
              />
            </div>{" "}
            
       
          </div>
          <br/>
        </div>
     
     
    );
  }
}

export default Home;
