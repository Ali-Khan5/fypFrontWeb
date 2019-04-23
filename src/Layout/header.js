
import React, { Component } from 'react';
import './style.css';
import Logo from './../socialfinderapp.png'
import History from "./../History";
import { Link } from "react-router-dom";
import SignInModel from "./../Components/SignInModel";
class Header extends Component {
  signin=()=>{
    History.push("/user");
  }
  render() {
    return (
        // <!--Main Navigation-->
        <nav className="navbar navbar-expand-lg ">
        <a className="navbar-brand specialLogo" href="#"> <img  height={100} width={140} src={"https://res.cloudinary.com/dcw1i97ph/image/upload/v1555968889/Social_Finder_ut7fe4.png"}/></a>
        <button className="navbar-toggler ml-auto togglesIconColor" type="button" data-toggle="collapse" data-target="#navbarNavDropdown">
        <span className="navbar-toggler-icon"></span>
         </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">

              <Link className="nav-link" to="/instruct">Instructions</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link"  to="#" data-toggle="modal" data-target="#exampleModalCenter" >Get Started </Link>
            </li>
            {/* <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown link
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li> */}
          </ul>
          <SignInModel SignIn={this.signin}/>
        </div>
      </nav>
    );
  }
}

export default Header;
