// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your application?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please enter a detailed description of your application.',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please enter any information required to install the application.',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please describe how to use the application.'
    },
    {
      type: 'list',
      name: 'license',
      message: 'What license will your project utilize?',
      choices: ["MIT", "Apache", "GPL", "BSD-2", "BSD-3", "No License"]
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Who has contributed to this application?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Please enter the required commands to run applicable tests.',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Please enter your GitHub User ID.',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter your email address for correspondence.'
    }
];

// TODO: Create a function to write README file
// TODO: Create a function to initialize app

function init() {
    inquirer.prompt(questions)
      .then((answers) => {
    const readmeContent = generateMarkdown(answers);

    fs.writeFile('README.md', readmeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
        );
    });
  };

// Function call to initialize app
init();
