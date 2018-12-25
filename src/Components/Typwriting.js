import React, { Component } from "react";
import TypeIt from "typeit";
import './style.css';
//import abc from '../../uploads/'

class TypeWriting extends Component {
  instance = () => {
    new TypeIt("#example1", {
      strings: [
        "For your former co-worker",
        "For your Long forgotten friend.",
        "For your child's friend",
        "for your potential employee",
        "Looking for that special person"
      ],
      speed: 100,
      breakLines: false,
      autoStart: true
    });
  };
  componentDidMount() {
    this.instance();
  }
  render() {
    return (
      <h2
        className="text-center typeWritingClass"
      
      >
        <i class="fas fa-search" />
        <span id="example1" />
      </h2>
    );
  }
}

export default TypeWriting;
