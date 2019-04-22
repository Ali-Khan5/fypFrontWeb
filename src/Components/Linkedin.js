import React, { Component } from "react";

const LinkedinData = props => {
  return (
    
      <div className="card LinkedinStyle responsiveCard" style={{ marginTop: "10px" }}>
        <div className="card-body">
          <h4>{props.Name}</h4>
         {/* <p>{props.Details}</p> */}
          <a href={props.ProfileLink} target="_blank">
            {" "}
            <br/>
            <button className="btn btn-outline-info"> Profile Link </button>
          </a>
        </div>
      </div>
 
  );
};

export default LinkedinData;
