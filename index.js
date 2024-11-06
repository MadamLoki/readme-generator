// TO DO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';

// TO DO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions for your project:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information for your project:'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please provide contribution guidelines for your project:'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide test instructions for your project:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license for your project:',
        choices: ['EUPL-1.1', 'AGPL-3.0', 'GPL', 'GPL-2.0', 'GPL-3.0', 'LGPL', 'LGPL-2.1', 'LGPL-3.0', 'ISC', 'LPPL-1.3c', 'MS-PL', 'MIT', 'MPL-2.0', 'OSL-3.0', 'PostgreSQL', 'OFL-1.1', 'NCSA', 'Unlicense', 'Zlib']
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address:'
    }
];

// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('README.md successfully created!')
    );
}

// Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const readme = generateReadme(answers);
            writeToFile('README.md', readme);    
    }, (err) => {
        console.log(err);
    });
}

// Create a function to generate README content
function generateReadme(answers) {
    return `# ${answers.title} ![License](https://img.shields.io/badge/License-${answers.license}-blue.svg)` + '\n' +
        `## Description` + '\n' +
        `${answers.description}` + '\n' +
        `## Table of Contents` + '\n' +
        `* [Installation](#installation)` + '\n' +
        `* [Usage](#usage)` + '\n' +
        `* [Contribution](#contribution)` + '\n' +
        `* [Tests](#tests)` + '\n' +
        `* [License](#license)` + '\n' +
        `* [Questions](#questions)` + '\n' +
        `## Installation` + '\n' +
        `${answers.installation}` + '\n' +
        `## Usage` + '\n' +
        `${answers.usage}` + '\n' +
        `## Contribution` + '\n' +
        `${answers.contribution}` + '\n' +
        `## Tests` + '\n' +
        `${answers.test}`   + '\n' +
        `## License` + '\n' +
        `This project is covered under the ${answers.license} license.` + '\n' +
        `## Questions` + '\n' +
        `For any questions, please contact me at ${answers.email}.` + '\n' +
        `GitHub: [${answers.github}](http://github.com/${answers.github})` + '\n';
}

// Function call to initialize app
init();
