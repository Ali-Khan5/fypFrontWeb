import React, { Component } from "react";

const LinkedinData = props => {
  return (
    
      <div className="card LinkedinStyle" style={{ marginTop: "10px", height: "180px" }}>
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
