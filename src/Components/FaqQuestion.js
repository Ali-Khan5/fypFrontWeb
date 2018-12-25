import React, { Component } from "react";

const FaqQuestion = props => {
  return (
    <a
      className="faqQuestionsStyle"
      data-toggle="collapse"
      href={props.Eid}
      role="button"
      aria-expanded="false"
      aria-controls="collapseExample"
    >
      <div class="card border-info mb-3">
        <div class="card-body text-info">
          <p class="card-text">{props.text}</p>
        
        </div>
      </div>
    </a>
  );
};

export default FaqQuestion;
