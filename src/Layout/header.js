
import React, { Component } from 'react';
import './style.css';
import Logo from './../socialfinderapp.png'
import { Link } from "react-router-dom";
import SignInModel from "./../Components/SignInModel";
class Header extends Component {
  render() {
    return (
        // <!--Main Navigation-->
        <nav class="navbar navbar-expand-lg ">
        <a class="navbar-brand" href="#"> <img  height={140} width={140} src={Logo}/></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
            </li>
            <li class="nav-item">

              <Link class="nav-link" to="/instruct">Instructions</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link"  to="#" data-toggle="modal" data-target="#exampleModalCenter" >Get Started </Link>
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
          <SignInModel/>
        </div>
      </nav>
    );
  }
}

export default Header;
