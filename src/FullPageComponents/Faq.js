import React, { Component } from "react";

import Question from "./../Components/FaqQuestion";
import Answer from "./../Components/FaqAnswer";
class Faq extends Component {
  render() {
    return (
      <div className="container-full-bg container-fluid">
        <div className="container">
          <h2 style={{ marginTop: "70px" }}>F.A.Q</h2>
          {/* row start */}
          <div className="row">
            {/* first collum start */}
            <div
              className="col-md-6"
              style={{ marginTop: "10px" }}
              name="section2"
            >
              <Question
                Eid={"#q1"}
                text={
                  "can you get information even if I dont remember all of their details?"
                }
              />

              <Answer
                Eid={"q1"}
                answer={
                  " We only require basic things like  Name, City, Organization/Institution and we search it according to the given parameters"
                }
              />
            </div>
            {/* first cloumn end */}
            {/* second column start */}
            <div className="col-md-6" style={{ marginTop: "10px" }}>
              <Question
                Eid={"#q4"}
                text={
                  "what if a person has more than one profile on social media"
                }
              />
              <Answer
                Eid={"q4"}
                answer={
                  "Nothing to worry about, We will present you with the links of different social platform that person is on "
                }
              />
            </div>
          </div>{" "}
          {/* row ends */}
          <div className="row">
            {/* third column */}
            <div className="col-md-6 " style={{ marginTop: "10px" }}>
              <Question Eid={"#q3"} text={"is it free?"} />
              <Answer Eid={"q3"} answer={" 100 % yes"} />
            </div>
            <div className="col-md-6" style={{ marginTop: "10px" }}>
              <Question Eid={"#q2"} text={"What kind of data will you get ?"} />
              <Answer
                Eid={"q2"}
                answer={
                  "We will get you the possible Social Links of that person"
                }
              />
            </div>
          </div>
          <div className="row">
            {/* fourth column */}
            <div className="col-md-6 " style={{ marginTop: "10px" }}>
              <Question Eid={"#q5"} text={"is it secure?"} />
              <Answer
                Eid={"q5"}
                answer={
                  " Absolutley, We are only showing you the public data of that person "
                }
              />
            </div>
          </div>
          {/* fourth colum end */}
          <br />
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default Faq;
