import React, { Component } from "react";
import "./style.css";
import Logo from "./../socialfinderapp.png";
import History from "./../History";
import { Link } from "react-router-dom";
import SignInModel from "./../Components/SignInModel";

import firebase from "firebase/app";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyDbGI-WGA3rhDY__xVEdOkvlAVOeTk2caI",
  authDomain: "mysocialfinder.firebaseapp.com",
  databaseURL: "https://mysocialfinder.firebaseio.com",
  projectId: "mysocialfinder",
  storageBucket: "mysocialfinder.appspot.com",
  messagingSenderId: "418246214526"
};
firebase.initializeApp(config);
var provider2 = new firebase.auth.GoogleAuthProvider();

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogin: ""
    };
  }
  GoogleSignin() {
    firebase
      .auth()
      .signInWithPopup(provider2)
      .then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log(user);
        console.log(user.displayName);
        console.log(user.email);
        console.log(user.photoURL);
        var obj = {
          displayname: user.displayName,
          email: user.email,
          userpic: user.photoURL
        };
        localStorage.setItem("Userlog", JSON.stringify(obj));
        console.log(obj);

        // dispatch({ type: "CURRENT_USER", payload: obj });

        // location="homepage.html";
        // ...
      })
      .then(() => {
        History.push("/user");
        this.setState({ islogin: "true" });
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  }
 facebookSignout() {
    firebase
      .auth()
      .signOut()
  
      .then(
        () =>{
          console.log("Signout successful!");
          History.push("/");
          this.setState({ islogin: "" });
        },
        function(error) {
          console.log("Signout failed");
        }
      );
  }
  render() {
    return (
      // <!--Main Navigation-->
      <nav className="navbar navbar-expand-lg ">
        <a className="navbar-brand specialLogo" href="#">
          {" "}
          <img
            height={100}
            width={140}
            src={
              "https://res.cloudinary.com/dcw1i97ph/image/upload/v1555968889/Social_Finder_ut7fe4.png"
            }
          />
        </a>
        <button
          className="navbar-toggler ml-auto togglesIconColor"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/instruct">
                Instructions
              </Link>
            </li>
            {this.state.islogin ? null : (
              <li
                className="nav-item"
               
              >
                <Link className="nav-link" to="#"  data-toggle="modal" data-target="#exampleModalCenter">
                  Get Started{" "}
                </Link>
              </li>
            )}
            {this.state.islogin ? (
              <li className="nav-item">
                <Link className="nav-link" to="/user">
                  Search
                </Link>
              </li>
            ) : null}
            {this.state.islogin ? (
              <li className="nav-item">
                <Link className="nav-link" to="#" onClick={()=>{this.facebookSignout();}}>
                  Logout
                </Link>
              </li>
            ) : null}
          </ul>
          <SignInModel/>
        </div>
      </nav>
    );
  }
}

export default Header;
