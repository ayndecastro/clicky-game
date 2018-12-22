import React from "react";
import "./style.css";

const Title = props => (
  <div className="header container-fluid bg-dark rounded">
    <h1 className="title text-center text-danger m-3">{props.children}</h1>
    <h2 className="scores container text-danger text-center">
      SCORE: {props.score} HIGHSCORE: {props.highscore}
    </h2>
    <div class="text-danger text-center">Whatever you do, don't click the same car twice!</div>
  </div>
);

export default Title;
