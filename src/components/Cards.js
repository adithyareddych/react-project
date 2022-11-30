import React from "react";
import "./Cards.css";
import Carditem from "./Carditem";

function Cards() {
  return (
    <div className="cards">
      <h1>Branches</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <Carditem
              src="images/cs.jpeg"
              text="The Department of Computer Science and Engineering at Hyderabad University"
              label="Computer Science Engineering"
              path="/"
            />
            <Carditem
              src="images/it.jpeg"
              text="The Department of Information Technology at Hyderabad University"
              label="Information Technology"
              path="/"
            />
            <Carditem
              src="images/ece.jpeg"
              text="The Department of Electronics and Communication Engineering at Hyderabad University"
              label="Electronics and Communication Engineering"
              path="/"
            />
          </ul>
          <ul className="cards__items">
            <Carditem
              src="images/ee1.jpeg"
              text="The Department of Electronics and Electrical Engineering at Hyderabad University"
              label="Electronics and Electrical Engineering"
              path="/"
            />
            <Carditem
              src="images/ce.jpeg"
              text="The Department of Civil Engineering at Hyderabad University"
              label="Civil Engineering"
              path="/"
            />
            <Carditem
              src="images/me.jpeg"
              text="The Department of Mechanical Engineering at Hyderabad University"
              label="Mechanical Engineering"
              path="/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
