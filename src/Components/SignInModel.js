import React, { Component } from "react";
import History from "./../History";

import { Link } from "react-router-dom";


const SignInModel = props => {
  
  return (
    // <!-- Modal -->
    <div
      className="modal fade"
      id="exampleModalCenter"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">
              Social-finder App Sign in
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Your email Adress"
              />
            </div>
            <button className="btn btn-info" onClick={props.Google}>Google</button>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
    
            <button
              type="button"
              className="btn btn-primary"
              data-dismiss="modal"
           onClick={()=>{
            History.push("/user");
           }}
            >
              Sign In
            </button>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInModel;
