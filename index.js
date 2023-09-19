// Require packages needed for application
const inquirer = require('inquirer');
const fs = require('fs');

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
      type: 'checkbox',
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

// // Function to write SVG file
fs.writeFile(fileName, svgString, (err) => {
    err ? console.error(err) : console.log('Generated logo.svg');
});

// Function to initialize app
function init() {
    inquirer.prompt(questions).then(
        function (answers) {
        let answers = generate(data);
        writeToFile('./examples/logo.svg', answers);
        console.log(answers);
        }
    )
}

//Function call to initialize app
init()