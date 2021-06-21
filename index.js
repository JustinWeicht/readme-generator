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
            message: 'Please provide installation instructions for your application?'
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
            choices: ['MIT', 'GNU', 'BSD', 'ISC', 'Apache', 'Eclipse']
        },
        // Questions Section
        // username & link
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username?'
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

    .then(generatedReadme => {
        return writeToFile('README.md', generatedReadme);
    })
    
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
        console.log('Your README.md file has been generated.')
    });
}

// begin questions
function init() {
    questions();
}

// call to start app
init()