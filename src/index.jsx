// Application entrypoint.

// Load up the application styles
require("../styles/application.scss");

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

const PALETTE = ['#f9be33', '#f77e82', '#9edf89', '#21d2c5', '#147c87', '#793060' ];

//function to create the puzzle
var createPuzzle = function() {
  var puzzle = [];
  while(puzzle.length < 4) {
    var random = Math.floor(Math.random() * PALETTE.length);
    puzzle.push(PALETTE[random]);
  }
  console.log(puzzle)
  return puzzle;
};

createPuzzle();

ReactDOM.render(<App palette={PALETTE} />, document.getElementById('react-root'));
