import React from "react";
import "./style.css";

const CarCards = props => (
  <div 
    className="card" 
    value={props.id}
    onClick={() => props.clickCount(props.id)}
  >
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default CarCards;