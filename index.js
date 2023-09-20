const inquirer = require('inquirer');
const fs = require('fs');

// // Import the Circle class from shapes.js
// const Circle = require('./lib/shapes');
// const Triangle = require('./lib/shapes');
// const Square = require('./lib/shapes');

const { generateSVG } = require('./lib/shapes');

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