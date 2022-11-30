import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./Container.css";

function Container() {
  return (
    <div className="container1">
      <h2>WELCOME TO HYDERABAD UNIVERSITY</h2>
      <p>
        Hyderabad University is is Accredited with 'A' Grade by NAAC and also
        accredited by NBA.The institute offers B.Tech program across different
        streams. Admissions to the B.Tech Program are made along with the other
        Engineering colleges in the state through a common entrance.
      </p>
      <p>What are you waiting for?</p>
      <div className="btns1">
        <Button
          className="btns1"
          buttonStyle="btn1--primary"
          buttonSize="btn1--large"
        >
          Contact Us
        </Button>
        <Button
          className="btns1"
          buttonStyle="btn1--primary"
          buttonSize="btn1--large"
        >
          Apply Now
        </Button>
      </div>
    </div>
  );
}

export default Container;
