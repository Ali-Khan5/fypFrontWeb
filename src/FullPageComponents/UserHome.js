import React, { Component } from "react";
import FbDataShow from "./../Components/fbDataShow";
import TweeterDataShow from "./../Components/twitterDataShow";
import InstagramDataShow from "./../Components/InstaDataShow";
class UserHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FullName: "",
      organisation: "",
      city: "",
      university: "",
      email: "",
      displayCounter: 0,
      data: "",
      errorMessage: "",
      loading: false
    };
  }
  getPerson = async () => {
    console.log("geting request....");
    const response = await fetch(
      `/fiind/${this.state.FullName}&${this.state.organisation}`
    );
    const body = await response.json();
    console.log(body);
    if (response.status !== 200) throw Error(body.message);
    return body;
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  displayNext = () => {
    let count = this.state.displayCounter;
    count++;
    this.setState({ displayCounter: count });
    if (count === 2) {
      this.setState({ loading: true });
      console.log("am i running??");
      this.getPerson()
        .then(res => this.setState({ data: res, loading: false }))
        .catch(err => {
          // console.log(err);
          this.setState({ errorMessage: err });
        });
    }
  };
  SearchAgain = () => {
    this.setState({ displayCounter: 0, data: "" });
  };
  GetFBcollapse = data => {
    let arrayOFData = [];
    for (let i = 0; i < 7; i++) {
      if (i < 6) {
        arrayOFData.push(
          <div className="col-md-4" key={i}>
            <FbDataShow
              name={data[i].TITLE}
              description={data[i].details}
              imgg={data[i].picture}
              username={data[i].link}
            />
          </div>
        );
      } else if (i == 6) {
        arrayOFData.push(
          <div className="col-md-4" key={i} style={{ marginTop: "10px" }}>
            <button
              className="btn btn-primary"
              type="button"
              data-toggle="collapse"
              data-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              View more Results
            </button>
          </div>
        );
      }
    }
    return arrayOFData;
  };
  GetTwittercollapse = data => {
    let arrayOFData = [];
    for (let i = 0; i < 7; i++) {
      if (i < 6) {
        arrayOFData.push(
          <div className="col-md-4" key={i}>
            <TweeterDataShow
              name={data[i].Fullname}
              description={data[i].Bios}
              imgg={data[i].DisplayPictures}
              ScreenName={data[i].screenName}
            />
          </div>
        );
      } else if (i == 6) {
        arrayOFData.push(
          <div className="col-md-4" key={i} style={{ marginTop: "10px" }}>
            <button
              className="btn btn-primary"
              type="button"
              data-toggle="collapse"
              data-target="#collapseExampleTwitter"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              View more Results
            </button>
          </div>
        );
      }
    }
    return arrayOFData;
  };
  TwitterCollapseData = data => {
    let arrayOFData = [];
    for (let i = 6; i < data.length; i++) {
      arrayOFData.push(
        <div className="col-md-4" key={i}>
          <TweeterDataShow
              name={data[i].Fullname}
              description={data[i].Bios}
              imgg={data[i].DisplayPictures}
              ScreenName={data[i].screenName}
            />
        </div>
      );
    }
    return arrayOFData;
  };
  fbCollapseData = data => {
    let arrayOFData = [];
    for (let i = 6; i < data.length; i++) {
      arrayOFData.push(
        <div className="col-md-4" key={i}>
          <FbDataShow
            name={data[i].TITLE}
            description={data[i].details}
            imgg={data[i].picture}
            username={data[i].link}
          />
        </div>
      );
    }
    return arrayOFData;
  };
  render() {
    return (
      <div className="container-fluid">
        <br />
        <br />

        {!this.state.loading ? (
          // check of state of loading is true or not
          <div className="row">
            {this.state.data ? null : (
              <div className="col-md-8 offset-md-1">
                <div className="card text-white bg-dark">
                  <div className="card-body">
                    {this.state.displayCounter == 0 ? (
                      <div>
                        <p>Lets get started</p>
                        <h4>Step : 1</h4>
                        <hr />
                        <h5>Enter the Name of the person</h5>
                        <div className="form-group card-text">
                          <input
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Please enter the full name of the person that you are looking for ..."
                            onChange={this.handleChange}
                            value={this.state.FullName}
                            name="FullName"
                            style={{ padding: "10px", fontSize: "20px" }}
                          />
                          {/* <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small> */}
                        </div>
                        <h6>Tips*</h6>
                        <p>
                          Try to write the name of the person as accuratly as
                          possible and make sure it doesnt contain typos.
                        </p>
                      </div>
                    ) : null}
                    {this.state.displayCounter == 1 ? (
                      <div>
                        <h4>Step : 2</h4>
                        <hr />
                        <h5>
                          Enter the Name of the Company or Education institution
                          which that person belongs.
                        </h5>
                        <div className="form-group card-text">
                          <input
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Please enter the name of the organization that person belongs to  ..."
                            onChange={this.handleChange}
                            value={this.state.organisation}
                            name="organisation"
                            style={{ padding: "10px", fontSize: "20px" }}
                          />
                          {/* <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small> */}
                        </div>
                        <h6>Tips*</h6>
                        <p>
                          try to correctly spell the name of the institution, it
                          plays an important part
                        </p>
                      </div>
                    ) : null}
                    {this.state.loading || this.state.data ? null : (
                      <button
                        className="btn btn-primary btn-lg"
                        onClick={this.displayNext}
                      >
                        Next
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )}
            {/* first row ends */}
          </div>
        ) : (
          <div
            className=" col-md-6 offset-md-3 animated infinite card border-danger mb-3  bounce"
            style={{ maxWidth: "30rem" }}
          >
            <div className="card-body text-danger">
              <h3 className="card-text">Processing your request.... </h3>
            </div>
          </div>

          // logic for loading screen goes here....
        )}

        <div className="row">
          {this.state.data ? (
            <div className="col-md-6 offset-md-3">
              <div className="card border-info " style={{ maxWidth: "25rem" }}>
                <div className="card-body text-info">
                  <h3> want to search again ? </h3>
                </div>
              </div>
              <button
                className="btn btn-warning btn-lg"
                onClick={this.SearchAgain}
                style={{ marginTop: "10px" }}
              >
                Search Again!
              </button>
            </div>
          ) : null}
          {this.state.data ? (
            <div className="text-center col-md-12">
              <h3 className="text-center"> your results </h3>
              <hr />
              <div className="row">
                <h4 className="col-md-12">showing data from fb</h4>
                {this.state.data.fb
                  ? this.GetFBcollapse(this.state.data.fb)
                  : null}
              </div>
              {this.state.data.fb ? (
                <div className=" collapse" id="collapseExample">
                  <div className="row">
                    {this.fbCollapseData(this.state.data.fb)}
                  </div>
                </div>
              ) : null}

              {this.state.data.tweet ? (
                <div>
                  <h4>showing data from twitter</h4>
                  <div className="row">
                    {this.GetTwittercollapse(this.state.data.tweet)}
                  </div>
                  <div className=" collapse" id="collapseExampleTwitter">
                    <div className="row">
                      {this.TwitterCollapseData(this.state.data.tweet)}
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
        {/* second row ends */}

        {/* last container */}
      </div>
    );
  }
}

export default UserHome;
