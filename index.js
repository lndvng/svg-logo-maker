const inquirer = require('inquirer');
const fs = require('fs');

// Import the Circle class from shapes.js
const Circle = require('./lib/shapes');
const Triangle = require('./lib/shapes');
const Square = require('./lib/shapes');

// Function to generate SVG string based on user input
function generateSVG(answers) {
  // if user chooses circle for shape, svg will render circle logo
  if (answers.shape == 'Circle') {
    let newCircle = new Circle(answers.text, answers.textColor, answers.shapeColor)
    return newCircle.render();
 // if user chooses triangle for shape, svg will render triangle logo
  } else if (answers.triangle == 'Triangle') {
    let newTriangle = new Triangle(answers.text, answers.textColor, answers.shapeColor)
    return newTriangle.render();
 // if user chooses square for shape, svg will render square logo
  } else if (answers.square == 'Square') {
    let newSquare = new Square(answers.text, answers.textColor, answers.shapeColor)
    return newSquare.render();
  }
}

// Function to write SVG file
function writeToFile(fileName, svgString) {
  fs.writeFile(fileName, svgString, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Generated logo.svg');
    }
  });
}

// Array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter characters for logo (3 characters max)',
  },
  {
    type: 'input',
    message: 'Enter text color',
    name: 'textColor',
  },
  {
    type: 'list',
    message: 'Select a shape',
    name: 'shape',
    choices: ['Circle', 'Triangle', 'Square'],
  },
  {
    type: 'input',
    message: 'Enter shape color',
    name: 'shapeColor',
  },
];

// Function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const svgString = generateSVG(answers);
    writeToFile('./examples/logo.svg', svgString);
  });
}

// Function call to initialize app
init();