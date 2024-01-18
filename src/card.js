import React from "react";
//import Sdata from "./data.js";
import "./index.css";

function Crad(props) {
  return (
    <>
      <div className="cards">
        <div className="card column ">
          <img src={props.imgscrc} alt="" />
          <div className="card_info">
            <h1>{props.sname}</h1>
            <span className="card_cat"></span>
            <button type="button">
              <a href={props.slink}>Watch!</a>{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Crad;
