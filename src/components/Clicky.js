import React from "react";
import cars from "../cars.json";
import CarCards from "./CarCards";


export default class Clicky extends React.Component {

  state = {
    cars,
    score: 0,
    highScore: 0,
  };

  render() {
    return (
      <div className="container-fluid">
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-4">Clicky Game</h1><br />
            <p class="lead">Click on the image only once. if you click twice, game will reset.</p>
          </div>
        </div>
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-6 text-center">Correct or incorrect</div>
            <div class="col-lg-6">Score:</div>
          </div>
        </div><br />
        <div class="container rounded bg-danger m-auto">
         <div class="row">
         <div class="col-md-3">
         {this.state.cars.map(cars => (
           <CarCards id={cars.id} key={cars.id} clickCount={this.clickCount} image={cars.image} />
         ))}
         </div>
         </div>
        </div>

      </div>
    )
  }
}
