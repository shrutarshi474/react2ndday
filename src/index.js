import React from "react";
import ReactDOM from "react-dom";
import Heading from "./Head.jsx";
import Sdata from "./data.js";
import "./index.css";
import Card from "./card.js";

var date = new Date();
let hh = date.getHours();
let mm = date.getMinutes(); // 01
let ss = date.getSeconds();
let wen = "AM";
const Clock = () => {
  if (hh >= 12 && mm >= 1) {
    wen = "PM";
    return (
      <>
        <h1>{hh + ":" + mm + ":" + ss + wen}</h1>
      </>
    );
  } else {
    return (
      <>
        <h1>{hh + ":" + mm + ":" + ss + wen}</h1>
      </>
    );
  }
};

function ncard(val) {
  return <Card imgscrc={val.imgsrc} sname={val.sname}></Card>;
}

ReactDOM.render(
  <>
    <Heading></Heading>
    {/* <Card imgscrc={Sdata[0].imgscrc} sname={Sdata[0].sname}></Card>
    <Card imgscrc={Sdata[0].imgscrc} sname={Sdata[0].sname}></Card> */}
    {Sdata.map(ncard)}
    <Clock></Clock>
  </>,
  document.getElementById("root")
);
