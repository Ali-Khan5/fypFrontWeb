import React, { Component } from "react";

const Minimalistic = props => {
  return (
    <div className="container-fluid minimalisticForm">
      <div className="row">
        <div className="col-md-8 col-12">
          <h4 style={{fontWeight:'bold'}}> {props.Question} </h4>

          <input
            type="text"
            className="form-control InputTextFormSize"
            id="bootstrap-overrides"
            aria-describedby="emailHelp"
            placeholder={props.PlaceholderText}
            onChange={props.changeState}
            value={props.stateName}
            name={props.Name}
            autoFocus
            style={{
              padding: "10px",
              border: "none",
              borderBottom: "3px solid red",
              opacity:'0.7'
            }}
          />

          <br />
          {props.stateName.length >= 3 ? (
            <button type="button" style={{margin:'10px'}} className="btn btn-outline-success btn-lg" onClick={props.ChangeForm}>
              {" "}
              Next{" "}
            </button>
          ) : null}
          <div className="card border-info mb-3">
            <div className="card-body text-info">
              <h5 className="card-title">Tips</h5>
              <p className="card-text">
                Try to write the name of the person as accuratly as possible and
                make sure it doesnt contain typos.
              </p>
            </div>
          </div>

        
          <br/>

        </div>
      </div>
    </div>
  );
};

export default Minimalistic;
