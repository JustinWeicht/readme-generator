const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = () => {
    return inquirer.prompt([

        // Title Section
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your application?'
        },
        // Description Section
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description of your application.'
        },
        // Installation Section
        {
            type: 'input',
            name: 'install',
            message: 'How do you install your application?'
        },
        // Usage Section
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide the usage information of your application.'
        },
        // Contribution Section
        {
            type: 'input',
            name: 'contribution',
            message: 'Please provide the contribution guidelines for your application.'
        },
        // Test Instructions Section
        {
            type: 'input',
            name: 'test',
            message: 'What package(s) are used to test your application.'
        },
        // License Badge
        {
            type: 'list',
            message: 'What is your preferred method of communication?',
            name: 'license',
            choices: ['MIT License', 'Apache License 2.0', 'GNU General Public License v3.0', 'Eclipse Public License 2.0']
        },
        // Questions Section
        // username & link
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username?'
        },
        // repository name
        {
            type: 'input',
            name: 'repo',
            message: 'What is your GitHub repository name?'
        },
        // email
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        }
    ])

    .then(data => {
        return generateMarkdown(data);
    })

    .then(generatedReadme => writeToFile('README.md', generatedReadme))
    
    .catch(err => {
        console.log(err);
    })
};
// write readme file
function writeToFile(fileName, data) {
    fs.writeFile(`./generated/${fileName}`, data, err => {
        if (err) {
            throw err;
        };
        console.log('Your README file has been created.')
    });
}

function init() {
    questions();
}

// call to start app
init()