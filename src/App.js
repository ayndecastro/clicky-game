import React, { Component } from "react";
import CarCard from "./components/CarCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import cars from "./cars.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    cars,
    score: 0,
    highscore: 0
  };

  endgameHandler = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}); //make state.highscore equal to the highest state.score
    }
    this.state.cars.forEach(car => {
      car.clicked = false;
    });
    if(this.state.score === 12){ //if score 12 alert this
      alert(`Nice! You scored ${this.state.score}! that's the highscore!`);
    } else{
    alert(`Game Over! You Scored: ${this.state.score}`); //if score is bellow 12 alert this
  }
    this.setState({score: 0}); //set score to 0
    return true; 
  }

  clickshuffleHandler = id => {
    this.state.cars.find((carCard, i) => {
      if (carCard.id === id) {
        if(cars[i].clicked === false){
          cars[i].clicked = true;
          this.setState({score : this.state.score + 1}, function(){ //keep updating score
            console.log(this.state.score); 
          });
          this.state.cars.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          this.endgameHandler(); //call then end function
        }
      }
    });
  }
  
  render() {
    return (
      <Wrapper>
        <Title score={this.state.score} highscore={this.state.highscore}>CLICKY GAME</Title>
        {this.state.cars.map(car => (
          <CarCard
            click={this.clickshuffleHandler}
            id={car.id}
            key={car.id}
            image={car.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
