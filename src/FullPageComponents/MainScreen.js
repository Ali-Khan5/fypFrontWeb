import React, { Component } from "react";
// import "./App.css";
// import List from "./components/List";

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
      errorMessage: ""
    };
  }

  getPerson = async () => {
    console.log("geting request....");
    const response = await fetch("/fiind/" + this.state.FullName);
    const body = await response.json();
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
    if (this.state.displayCounter == 4) {
      console.log("am i running??");
      this.getPerson()
        .then(res => this.setState({ data: res }))
        .catch(err => {
          // console.log(err);
          this.setState({ errorMessage: err });
        });
    }
  };
  // dispayingData=()=>{
  //   console.log('aaaaaaaaaaaaa')
  //   let item="";

  //   for(let i=0;i<this.state.data.Fullname.length;i++){
  //     <List
  //                FULLNAME={this.state.data.Fullname[i]}
  //                BIO={this.state.data.Bios[i]}
  //                DP={this.state.data.DisplayPictures[i]}
  //              />

  //   }

  // }
  render() {
    const middleStyle = { marginTop: "5%" };

    return (
      <div className="container" style={middleStyle}>
        {/* <h2 class="card-text">Lets start Searching </h2> */}
        <div class="card border-danger mb-3" style={{ maxWidth: "28rem" }}>
          <div class="card-body text-danger">
            <h3 class="card-text">Lets start Searching </h3>
          </div>
        </div>
        <p>
          We will need all the information that we can get to search them as
          accurately as possible{" "}
        </p>
        {this.state.displayCounter == 0 ? (
          <div class="card border-primary mb-3 mb-3">
            <div class="card-body">
              <div class="form-group card-text">
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
                  style={{padding:'20px',fontSize:'20px'}}
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
        <button className="btn btn-primary btn-lg" onClick={this.displayNext}>
          Next
        </button>
        {this.state.data ? (
          // console.log(this.state.data)
          // this.state.data.map((x,i)=>{
          //   console.log(x.TITLE);
          //   return(<List
          //     FULLNAME={x.TITLE}
          //     BIO={x.Description}
          //     DP={""
          //     }
          //     screenName={x.link}
          //   />)
          // })
          //  this.state.data['Fullname'].map((x,i)=>{

          //    <List
          //      FULLNAME={this.state.data.Fullname[i]}
          //      BIO={this.state.data.Bios[i]}
          //      DP={this.state.data.DisplayPictures[i]}
          //    />
          //  })
          //

          /* <List
            FULLNAME={this.state.data.Fullname[0]}
            BIO={this.state.data.Bios[0]}
            DP={this.state.data.DisplayPictures[0]
            }
            screenName={this.state.data.screenName[0]}
          />
          <List
          FULLNAME={this.state.data.Fullname[1]}
          BIO={this.state.data.Bios[1]}
          DP={this.state.data.DisplayPictures[1]}
          screenName={this.state.data.screenName[1]}
        />
        <List
        FULLNAME={this.state.data.Fullname[2]}
        BIO={this.state.data.Bios[2]}
        screenName={this.state.data.screenName[2]}
        DP={this.state.data.DisplayPictures[2]}
      /> */

          <div />
        ) : null}
      </div>
    );
  }
}

export default HomePage;
