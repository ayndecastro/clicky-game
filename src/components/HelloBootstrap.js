import React from "react";

const HelloBootstrap = () => (
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
  <ul class="row">
    <li class="col-md-4">card</li>
    <li class="col-md-4">card</li>
    <li class="col-md-4">card</li>
  </ul>
  <ul class="row">
    <li class="col-md-4">card</li>
    <li class="col-md-4">card</li>
    <li class="col-md-4">card</li>
  </ul>
  <ul class="row">
    <li class="col-md-4">card</li>
    <li class="col-md-4">card</li>
    <li class="col-md-4">card</li>
  </ul>
  </div>
   
  </div>
);

export default HelloBootstrap;
