import React, { Component } from "react";

class SocialBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
        CheckboxFacebook: "",
        CheckboxTwitter: "",
        Checkboxlinkedin: "",
        CheckboxInstagram: ""
    };
  }
  CheckBoxFb = ()=> {
    this.props.CheckBoxFb();
    // this.setState({ CheckboxFacebook: !this.state.CheckboxFacebook });
  };
  CheckBoxTw = ()=> {
    // this.setState({ CheckboxTwitter: !this.state.CheckboxTwitter });
    this.props.CheckBoxTw();
  };
  CheckBoxLink = ()=> {
    this.props.CheckBoxLink();
    // this.setState({ Checkboxlinkedin: !this.state.Checkboxlinkedin });
  };
  CheckBoxinsta = ()=> {
    // this.setState({ CheckboxInstagram: !this.state.CheckboxInstagram });
    this.props.CheckBoxinsta();
  };
  SetUserHomeStateBeforeCall=()=>{
      this.props.ChangeCheck();
      
  }
  render() {
    return (
      <div className="container-fluid minimalisticForm">
        <div className="row">
          <div className="col-md-12">
            <h4>Tick all those boxes from where you want to search!</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 col-6">
            <div className="form-check ">
              <input
                className="form-check-input "
                type="checkbox"
                defaultValue
                id="defaultCheck1"
                style={{ height: "18px", width: "18px" }}
                onClick={this.CheckBoxinsta}
              />
              <label
                className=" form-check-label"
                htmlFor="defaultCheck1"
                style={{ paddingLeft: "10px" }}
              >
                <h4>
                  {" "}
                  <i
                    style={{ color: "#262223" }}
                    className=" iconClass fab fa-instagram"
                  />{" "}
                  Instagram
                </h4>
              </label>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="form-check  ">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue
                id="defaultCheck2"
                style={{ height: "18px", width: "18px" }}
                onClick={this.CheckBoxTw}
              />
              <label
                className=" form-check-label "
                htmlFor="defaultCheck2"
                style={{ paddingLeft: "10px" }}
              >
                <h4>
                  {" "}
                  <i
                    style={{ color: "#03a9f4" }}
                    className=" iconClass fab fa-twitter-square"
                  />{" "}
                  Twitter
                </h4>
              </label>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="form-check  ">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue
                id="defaultCheck3"
                style={{ height: "18px", width: "18px" }}
                onClick={this.CheckBoxFb}
              />
              <label
                className=" form-check-label"
                htmlFor="defaultCheck3"
                style={{ paddingLeft: "10px" }}
              >
                <h4>
                  {" "}
                  <i
                    style={{ color: "#4267b2" }}
                    className=" iconClass fab fa-facebook-square"
                  />{" "}
                  Facebook
                </h4>
              </label>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="form-check  ">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue
                id="defaultCheck4"
                style={{ height: "18px", width: "18px" }}
                onClick={this.CheckBoxLink}
              />
              <label
                className=" form-check-label"
                htmlFor="defaultCheck4"
                style={{ paddingLeft: "10px" }}
              >
                <h4>
                  {" "}
                  <i
                    style={{ color: "#665ed0" }}
                    className=" iconClass fab fa-linkedin"
                  />{" "}
                  Linkedin
                </h4>
              </label>
            </div>
          </div>
        </div>
        <div className="row">
          {this.props.checkfb ||this.props.checkinsta || this.props.checktweeter  || this.props.CheckBoxlinkstate? (
            <button
              type="button"
              style={{ margin: "10px" }}
              className="btn btn-outline-success btn-lg"
              onClick={this.SetUserHomeStateBeforeCall}
            >
              {" "}
              Next{" "}
            </button>
          ) : null}
        </div>
      </div>
    );
  }
}

export default SocialBox;
