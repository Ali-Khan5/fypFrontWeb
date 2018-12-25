import React, { Component } from "react";

const FaqAnswer = props => {
  return (
    <div className="collapse multi-collapse " id={props.Eid}>
      <div class="card text-white bg-info mb-3">
        <div class="card-body">
          <p class="card-text">{props.answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FaqAnswer;
