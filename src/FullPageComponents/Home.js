import React, { Component } from "react";
import "./style.css";
import About  from "./About";
import Typewriting from "./../Components/Typwriting";
import BGimg from './../homebk.png';
class Home extends Component {
  render() {
    return (
      // <!--Main Navigation-->

     <div className="  bgImg "> 
     
    
        <div className=" forground container-full-bg" style={{ height: "105vh"} }>
          <div className="container ">
            <br />
            <br />
        
            <h2 className="text-center" style={{color:'#ffffff',fontWeight:'bold',opacity: '1'}}>Are you looking for </h2>
            <br />
            <Typewriting />
            <h2  className="text-center homeHeading2" style={{color:' #ffffff',fontWeight:'bold'}} >
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
        </div>
     
    );
  }
}

export default Home;
