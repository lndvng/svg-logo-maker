// Require packages needed for application
const inquirer = require('inquirer');
const fs = require('fs');

// Array of questions for user input 
const questions = [
    {
      type: 'input',
      name: 'text',
      message: 'Enter characters for logo. (3 characters max)',
    },
    {
      type: 'input',
      message: 'What color would you like the text to be?',
      name: 'textColor',
    },
    {
      type: 'checkbox',
      message: 'What shape would you like?',
      name: 'shape',
      choices: ['Circle', 'Triangle', 'Square'],
    },
    {
        type: 'input',
        message: 'What color would you like the shape of logo to be?',
        name: 'shapeColor',
      },
  ];
