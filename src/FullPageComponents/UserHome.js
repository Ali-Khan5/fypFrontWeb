import React, { Component } from "react";
import FbDataShow from "./../Components/fbDataShow";
import TweeterDataShow from "./../Components/twitterDataShow";
import InstagramDataShow from "./../Components/InstaDataShow";
import MinimalisticForm from "../Components/MinimalisticForm";
import LinkedinDataShow from "../Components/Linkedin";
import SocialBoxes from "../Components/SocialBoxes";
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
      loading: false,
      InstaButton: false,
      FacebookButton: false,
      TwiiterButton: false,
      CheckBoxResult: false,
      CheckboxFacebook: "",
      CheckboxTwitter: "",
      Checkboxlinkedin: "",
      CheckboxInstagram: ""
    };
  }
  CheckBoxFb = () => {
    this.setState({ CheckboxFacebook: !this.state.CheckboxFacebook });
    // console.log('s:',this.state.CheckboxFacebook )
  };
  CheckBoxTw = () => {
    this.setState({ CheckboxTwitter: !this.state.CheckboxTwitter });
  };
  CheckBoxLink = () => {
    this.setState({ Checkboxlinkedin: !this.state.Checkboxlinkedin });
  };
  CheckBoxinsta = () => {
    this.setState({ CheckboxInstagram: !this.state.CheckboxInstagram });
  };
  // changes twitter's see more button
  ChangeTwitter = () => {
    this.setState({ TwiiterButton: !this.state.TwiiterButton });
  };
  ChangeCheckBox = () => {
    this.displayNext();
  };
  // changes facebook's see more button
  ChangeFb = () => {
    this.setState({ FacebookButton: !this.state.FacebookButton });
  };
  // changes Instagram's see more button
  ChangeInsta = () => {
    this.setState({ InstaButton: !this.state.InstaButton });
  };
  // makes the network request
  getPerson = async () => {
    console.log("geting request....");
    console.log(this.state.CheckboxInstagram);
    const response = await fetch(
      // /fiind/${this.state.FullName}&${this.state.organisation}
      `https://ali-khan.herokuapp.com/finding/${this.state.FullName}&${
        this.state.organisation
      }/${
        this.state.CheckboxFacebook ? this.state.CheckboxFacebook : "false"
      }&${this.state.CheckboxTwitter ? this.state.CheckboxTwitter : "false"}&${
        this.state.CheckboxInstagram ? this.state.CheckboxInstagram : "false"
      }&${this.state.Checkboxlinkedin ? this.state.Checkboxlinkedin : "false"}`
    );
    const body = await response.json();
    console.log(body);
    if (response.status !== 200) {
      // this.setState({errorMessage:body.message});
      throw Error(body.message);
    }
    return body;
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  // changes which input form to show and does  the network request..
  displayLinkedinRevelantData = (dataObj1, dataObj2) => {
    let count = 0;
    dataObj1.map((x, i) => {
      // console.log(x.picture);

      if (x.revelant == "likly") {
        count++;
      }
    });
    dataObj2.map((x, i) => {
      // console.log(x.picture);

      if (x.revelant == "likly") {
        count++;
      }
    });
    if (count > 0) {
      let arrayOfHeading = [];
      arrayOfHeading.push(
        <h3 className="col-md-12">
          Showing Data From Linkedin <i className="fab fa-linkedin" />
        </h3>
      );
      return arrayOfHeading;
    }
  };
  displayNext = () => {
    let count = this.state.displayCounter;
    count++;
    this.setState({ displayCounter: count });
    if (count === 3) {
      this.setState({ loading: true });

      this.getPerson()
        .then(res => this.setState({ data: res, loading: false }))
        .catch(err => {
          // console.log(err);
          this.setState({ errorMessage: err, loading: false });
        });
    }
  };

  SearchAgain = () => {
    this.setState({
      displayCounter: 0,
      data: "",
      errorMessage: "",
      CheckboxTwitter: "",
      CheckboxInstagram: "",
      CheckboxFacebook: "",
      Checkboxlinkedin: ""
    });
  };
  // displays the first 6 facebook results.
  GetFBcollapse = data => {
    let arrayOFData = [];
    if (data.length < 6) {
      for (let i = 0; i < data.length; i++) {
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
    } else {
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
            <div
              className="col-md-8 offset-md-2"
              key={i}
              style={{ margin: "15px auto" }}
            >
              <button
                className="btn btn-light btn-large "
                type="button"
                data-toggle="collapse"
                data-target="#collapseExample"
                aria-expanded="false"
                aria-controls="collapseExample"
                onClick={this.ChangeFb}
                style={{ color: "#4267b2", padding: "10px" }}
              >
                {!this.state.FacebookButton
                  ? "View more Results"
                  : "See less Results"}
              </button>
            </div>
          );
        }
      }
    }
    return arrayOFData;
  };
  GetTwittercollapse = data => {
    let arrayOFData = [];
    if (data.length < 6) {
      for (let i = 0; i < data.length; i++) {
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
        }
      }
    } else {
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
            <div
              className="col-md-8 offset-md-2"
              key={i}
              style={{ marginTop: "10px" }}
            >
              <button
                className="btn btn-primary"
                type="button"
                data-toggle="collapse"
                data-target="#collapseExampleTwitter"
                aria-expanded="false"
                aria-controls="collapseExample"
                onClick={this.ChangeTwitter}
                style={{ margin: "15px auto" }}
              >
                {!this.state.TwiiterButton
                  ? "View more Results"
                  : "See less Results"}
              </button>
            </div>
          );
        }
      }
    }

    return arrayOFData;
  };
  GetInstagramcollapse = data => {
    let arrayOFData = [];
    if (data.length < 6) {
      for (let i = 0; i < data.length; i++) {
        if (i < 6) {
          arrayOFData.push(
            <div className="col-md-4" key={i}>
              <InstagramDataShow
                name={data[i].Fullname}
                Followers={data[i].followers}
                imgg={data[i].imgLink}
                Username={data[i].username}
              />
            </div>
          );
        }
      }
    } else {
      for (let i = 0; i < 7; i++) {
        if (i < 6) {
          arrayOFData.push(
            <div className="col-md-4" key={i}>
              <InstagramDataShow
                name={data[i].Fullname}
                Followers={data[i].followers}
                imgg={data[i].imgLink}
                Username={data[i].username}
              />
            </div>
          );
        } else if (i == 6) {
          arrayOFData.push(
            <div
              className="col-md-8 offset-md-2 "
              key={i}
              style={{ marginTop: "10px" }}
            >
              <button
                className="btn btn-primary"
                type="button"
                data-toggle="collapse"
                data-target="#collapseExampleinstagram"
                aria-expanded="false"
                aria-controls="collapseExample"
                onClick={this.ChangeInsta}
                style={{ margin: "15px auto" }}
              >
                {!this.state.InstaButton
                  ? "View more Results"
                  : "See less Results"}
              </button>
            </div>
          );
        }
      }
    }

    return arrayOFData;
  };

  InstagramCollapseData = data => {
    let arrayOFData = [];
    for (let i = 6; i < data.length; i++) {
      arrayOFData.push(
        <div className="col-md-4" key={i}>
          <InstagramDataShow
            name={data[i].Fullname}
            Followers={data[i].followers}
            imgg={data[i].imgLink}
            Username={data[i].username}
          />
        </div>
      );
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
        {!this.state.loading ? (
          // check of state of loading is true or not
          <div className="row">
            {this.state.data ? null : (
              <div className="col-md-8 offset-md-1">
                {/* <div className="card text-white bg-dark"> */}
                {/* <div className="card-body"> */}
                {this.state.displayCounter == 0 ? (
                  <MinimalisticForm
                    changeState={this.handleChange}
                    stateName={this.state.FullName}
                    Question={"Enter The Name of the Person"}
                    PlaceholderText={"Please enter the full name"}
                    ChangeForm={this.displayNext}
                    Name={"FullName"}
                  />
                ) : null}
                {this.state.displayCounter == 1 ? (
                  <MinimalisticForm
                    changeState={this.handleChange}
                    stateName={this.state.organisation}
                    Question={
                      "Enter The Name of the Company or Education institute from where the person belongs"
                    }
                    PlaceholderText={"Please enter the company/institute name"}
                    ChangeForm={this.displayNext}
                    Name={"organisation"}
                  />
                ) : null}
                {this.state.displayCounter == 2 ? (
                  <SocialBoxes
                    ChangeCheck={this.ChangeCheckBox}
                    CheckBoxinsta={this.CheckBoxinsta}
                    checkinsta={this.state.CheckboxInstagram}
                    CheckBoxTw={this.CheckBoxTw}
                    checktweeter={this.state.CheckboxTwitter}
                    CheckBoxLink={this.CheckBoxLink}
                    CheckBoxlinkstate={this.state.Checkboxlinkedin}
                    CheckBoxFb={this.CheckBoxFb}
                    checkfb={this.state.CheckboxFacebook}
                  />
                ) : null}
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
        {this.state.errorMessage ? (
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="alert alert-danger" role="alert">
                <h4 className="alert-heading">
                  Opps Something Bad Happened :( !
                </h4>
                <p>
                  Do check that you have a working Internet , sometimes results
                  might not appear because of bad internet{" "}
                </p>
                <hr />
                <p className="mb-0">
                  Maybe trying refreshing the page or try using it later.
                </p>
              </div>
            </div>
            <br />
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
          </div>
        ) : null}
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
              <h2 style={{ padding: "10px", textAlign: "left" }}>
                {" "}
                <i className="fas fa-users" /> Your Results{" "}
                <span style={{ borderRight: "5px solid red" }} />
              </h2>
              <hr />
              {/* fb section */}

              <div className="row" style={{ backgroundColor: "#4267b2" }}>
                {this.state.data.fb && this.state.data.fb.length > 1 ? (
                  <h3 className="col-md-12 text-white">
                    Showing Data From <i className="fab fa-facebook" /> FB
                  </h3>
                ) : null}
                {this.state.data.fb && this.state.data.fb.length > 1
                  ? this.GetFBcollapse(this.state.data.fb)
                  : null}
              </div>
              {this.state.data.fb && this.state.data.fb.length > 1 ? (
                <div
                  className=" collapse"
                  id="collapseExample"
                  style={{ backgroundColor: "#4267b2" }}
                >
                  <div className="row" style={{ backgroundColor: "#4267b2" }}>
                    {this.fbCollapseData(this.state.data.fb)}
                    <br />
                  </div>
                </div>
              ) : null}
              <br />

              {/* twitter section */}
              {this.state.data.tweet && this.state.data.tweet.length > 1 ? (
                <div>
                  <h3 className="bg-info text-white">
                    Showing Data From Twitter{" "}
                    <i className="fab fa-twitter-square" />
                  </h3>
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
              {/* instagram section */}
              <br />
              {this.state.data.insta && this.state.data.insta.length > 1 ? (
                <div>
                  <h3>
                    Showing Data From Instagram{" "}
                    <i className="fab fa-instagram" />
                  </h3>
                  <div className="row">
                    {this.GetInstagramcollapse(this.state.data.insta)}
                  </div>
                  <div className=" collapse" id="collapseExampleinstagram">
                    <div className="row">
                      {this.InstagramCollapseData(this.state.data.insta)}
                    </div>
                  </div>
                </div>
              ) : null}
              <br />
              <div className="row">
                {this.state.data.myLinks
                  ? // <h3 className="col-md-12">
                    //   Showing Data From Linkedin <i className="fab fa-linkedin" />
                    // </h3>
                    this.displayLinkedinRevelantData(
                      this.state.data.myLinks,
                      this.state.data.myLinkstwo
                    )
                  : null}
                {this.state.data.myLinkstwo
                  ? this.state.data.myLinkstwo.map((x, i) => {
                      // console.log(x.picture);

                      if (x.revelant == "likly") {
                        return (
                          <div className="col-md-4 " key={i}>
                            <LinkedinDataShow
                              Name={x.TITLE}
                              Details={x.Description}
                              ProfileLink={x.link}
                            />
                          </div>
                        );
                      }
                    })
                  : null}

                {this.state.data.myLinks
                  ? this.state.data.myLinks.map((x, i) => {
                      // console.log(x.picture);

                      if (x.revelant == "likly") {
                        return (
                          <div className="col-md-4 " key={i}>
                            <LinkedinDataShow
                              Name={x.TITLE}
                              Details={x.Description}
                              ProfileLink={x.link}
                            />
                          </div>
                        );
                      }
                    })
                  : null}
              </div>
              <br />
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
