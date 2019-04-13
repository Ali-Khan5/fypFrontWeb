import React, { Component } from "react";
// import "./App.css";
// import List from "./components/List";
import FbDataShow from "./../Components/fbDataShow";
import TweeterDataShow from "./../Components/twitterDataShow";
import InstagramDataShow from "./../Components/InstaDataShow";
class HomePage extends Component {
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
    if (count === 4) {
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
  render() {
    const middleStyle = { marginTop: "5%" };

    return (
      <div className="container" style={middleStyle}>
        {/* <h2 class="card-text">Lets start Searching </h2> */}

        {!this.state.loading ? (
          <div>
            {this.state.data ? (
              <div>
                <div
                  className="card border-info "
                  style={{ maxWidth: "25rem" }}
                >
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
            ) : (
              <div>
                <div
                  className="card border-danger mb-3"
                  style={{ maxWidth: "28rem" }}
                >
                  <div className="card-body text-danger">
                    <h3 className="card-text">Lets start Searching </h3>
                  </div>
                </div>
                <p>
                  We will need all the information that we can get to search
                  them as accurately as possible{" "}
                </p>
              </div>
            )}
          </div>
        ) : (
          <div
            className="card border-danger mb-3"
            style={{ maxWidth: "28rem" }}
          >
            <div className="card-body text-danger">
              <h3 className="card-text">Processing your request.... </h3>
            </div>
          </div>
        )}
        {this.state.displayCounter == 0 ? (
          <div className="card border-primary mb-3 mb-3">
            <div className="card-body">
              <div className="form-group card-text">
                <label htmlFor="exampleInputEmail1">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Please enter the full name of the person that you are looking for ..."
                  onChange={this.handleChange}
                  value={this.state.FullName}
                  name="FullName"
                  style={{ padding: "20px", fontSize: "20px" }}
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
            </div>
          </div>
        ) : null}
        {this.state.displayCounter == 1 ? (
          <div class="form-group">
            <label htmlFor="exampleInputEmail1">Organization</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Please enter the name of the organization that person belongs to  ..."
              onChange={this.handleChange}
              value={this.state.organisation}
              name="organisation"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
        ) : null}
        {this.state.displayCounter == 2 ? (
          <div class="form-group">
            <label htmlFor="exampleInputEmail1">city</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Please enter the name of the city that person belongs to  ..."
              onChange={this.handleChange}
              value={this.state.city}
              name="city"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
        ) : null}
        {this.state.displayCounter == 3 ? (
          <div class="form-group">
            <label htmlFor="exampleInputEmail1"> university</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Please enter the name of the  university that person belongs to  ..."
              onChange={this.handleChange}
              value={this.state.university}
              name="organisation"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
        ) : null}
        {this.state.loading || this.state.data ? null : (
          <button className="btn btn-primary btn-lg" onClick={this.displayNext}>
            Next
          </button>
        )}

        <br />
        <br />
        <div className="row">
          {this.state.data.fb
            ? this.state.data.fb.map((x, i) => {
                // console.log(x.picture);
                return (
                  <div className="col-md-4 " key={i}>
                    <FbDataShow
                      name={x.TITLE}
                      description={x.details}
                      imgg={x.picture}
                      username={x.link}
                    />
                  </div>
                );
              })
            : null}
        </div>
        <div className="row">
        {/* <div className="col-md-12" >
          <h3>showing data from linkedin</h3>
          </div> */}
       
          {this.state.data.myLinks
            ? this.state.data.myLinks.map((x, i) => {
                // console.log(x.picture);

                if (x.revelant == "likly") {
                  return (
                    <div className="col-md-4 " key={i}>
                      <TweeterDataShow
                        name={x.TITLE}
                        description={x.Description}
                      />
                    </div>
                  );
                }
              })
            : null}
        </div>
        <div className="row">
          
          {this.state.data.myLinkstwo
            ? this.state.data.myLinkstwo.map((x, i) => {
                // console.log(x.picture);

                if (x.revelant == "likly") {
                  return (
                    <div className="col-md-4 " key={i}>
                      <TweeterDataShow
                        name={x.TITLE}
                        description={x.Description}
                      />
                    </div>
                  );
                }
              })
            : null}
        </div>
        {this.state.data.insta ? (
          <div>
            <h3 className=" "> Showing Data From twitter </h3>
          </div>
        ) : null}
        <div className="row">
          {this.state.data.tweet
            ? this.state.data.tweet.map((x, i) => {
                //  console.log(x);
                return (
                  <div className="col-md-4 " key={i}>
                    <TweeterDataShow
                      name={x.Fullname}
                      description={x.Bios}
                      imgg={x.DisplayPictures}
                      ScreenName={x.screenName}
                    />
                  </div>
                );
              })
            : null}
        </div>
        {this.state.data.insta ? (
          <div>
            <h3 className=" "> Showing Data From Instagram </h3>
          </div>
        ) : null}
        <div className="row">
          {this.state.data.insta
            ? this.state.data.insta.map((x, i) => {
                //  console.log(x);
                return (
                  <div className="col-md-4 " key={i}>
                    <InstagramDataShow
                      name={x.Fullname}
                      Followers={x.followers}
                      imgg={x.imgLink}
                      Username={x.username}
                    />
                  </div>
                );
              })
            : null}
        </div>
      </div>
    );
  }
}

export default HomePage;
