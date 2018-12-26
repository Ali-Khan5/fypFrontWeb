import React, { Component } from "react";
import TypeIt from "typeit";
import SignIn from "./../Components/SignInModel";
class Insturction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayCounter: 0,

      errorMessage: ""
    };
  }

  instance = () => {
    new TypeIt("#example2", {
      strings: ["Maheen Ciddikui"],
      speed: 150,
      breakLines: false,
      autoStart: true
    });
  };
  instance2 = () => {
    console.log("m i running");
    new TypeIt("#e3", {
      strings: ["Karachi"],
      speed: 190,
      breakLines: false,
      autoStart: true
    });
  };
  instance3 = () => {
    new TypeIt("#e4", {
      strings: ["Bahria University "],
      speed: 150,
      breakLines: false,
      autoStart: true
    });
  };
  componentDidUpdate() {
    if (this.state.displayCounter == 1) {
      console.log("running from did update");
      this.instance2();
    } else if (this.state.displayCounter == 2) {
      console.log("running from did update");
      this.instance3();
    }
  }
  componentDidMount() {
    this.instance();
  }
  displayNext = () => {
    let count = this.state.displayCounter;
    count++;
    this.setState({ displayCounter: count });
  };
  render() {
    return (
      <div
        className="container-full-bg container-fluid"
        style={{ height: "100vh" }}
      >
        <div className="container">
          <br />
          <h1>Instructions</h1>
          <div className="row">
            <div className="col-md-12">
              <div style={{ marginTop: "30px" }}>
                {this.state.displayCounter == 0 ? (
                  <div>
                    <h3> #1 , write the full name of a person</h3>
                    <p
                      className=""
                      style={{
                        border: "2px solid black",
                        borderRadius: "15px",
                        fontSize: "25px",
                        padding: "20px"
                      }}
                    >
                      <span
                        id="example2"
                        style={{ textAlign: "left !important" }}
                      />{" "}
                    </p>
                    <button
                      className="btn btn-dark "
                      onClick={this.displayNext}
                    >
                      Next{" "}
                    </button>
                  </div>
                ) : null}
                {this.state.displayCounter == 1 ? (
                  <div>
                    <h3> #2 ,write the city of that person</h3>
                    <p
                      style={{
                        border: "2px solid black",
                        borderRadius: "15px",
                        fontSize: "25px",
                        padding: "20px"
                      }}
                    >
                      <span id="e3" style={{ textAlign: "left !important" }} />{" "}
                    </p>
                    <button
                      className="btn btn-dark "
                      onClick={this.displayNext}
                    >
                      Next{" "}
                    </button>
                  </div>
                ) : null}
                {this.state.displayCounter == 2 ? (
                  <div>
                    <h3>
                      {" "}
                      #3 ,write down the organisation/Institution that person
                      belongs too{" "}
                    </h3>
                    <p
                      style={{
                        border: "2px solid black",
                        borderRadius: "15px",
                        fontSize: "25px",
                        padding: "20px"
                      }}
                    >
                      <span id="e4" style={{ textAlign: "left !important" }} />{" "}
                    </p>
                    <button
                      className="btn btn-dark "
                      onClick={this.displayNext}
                    >
                      Next{" "}
                    </button>
                  </div>
                ) : null}
                {this.state.displayCounter == 3 ? (
                  <div>
                    <h2 className="text-center alert alert-success">
                      {" "}
                      thats it!, thats all you need to do{" "}
                    </h2>
                    {/* <p
                      style={{
                        border: "2px solid black",
                        borderRadius: "15px",
                        fontSize: "25px",
                        padding: "20px"
                      }}
                    >
                      <span id="e4" style={{ textAlign: "left !important" }} />{" "}
                    </p> */}
                    <div className=" text-center">
                      <p
                        className="  btn btn-info btn-lg " 
                        //   onClick={this.displayNext}
                        data-toggle="modal" data-target="#exampleModalCenter"
                      >
                        Get Started{" "}
                      </p>
                      <SignIn/>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    );
  }
}

export default Insturction;
