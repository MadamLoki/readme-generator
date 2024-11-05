// TO DO: Include packages needed for this application
const inquirer = require('inquirer');

inquirer
.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    },
    {
        type: 'list',
        name: 'favoriteColor',
        message: 'What is your favorite color?',
        choices: ['Red', 'Green', 'Blue']
    }]).then(answers => {
    console.log(``);
});

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
