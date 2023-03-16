// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const util = require("util");
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is the title of your project?",
        name: 'title'
    },

    {
        type: 'input',
        message: "Give a discription of your project?",
        name: 'discription'
    },

    {
        type: 'confirm',
        message: 'Do any packages need to be installed for you application?',
        name: 'installation',
    },

    {
        type: "input",
        message: "Who contributed to this project?:",
        name: "Contribut"
    },

    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'username'
    },

    {
        type: 'input',
        message: "Provide an email address?",
        name: 'email'
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, generateMarkdown(data), (err) =>
    err ? console.log(err) : console.log('Success!'));

}

// TODO: Create a function to initialize app
function init() {

    inquirer
    .prompt(questions)
    .then((data) => writeToFile('README.md', data))
}

// Function call to initialize app
init();
