// generate markdown for README using data sent from index.js
const generateMarkdown = (data) => {
  return `
  ![GitHub](https://img.shields.io/github/license/${data.username}/${data.title})

  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributions](#contributions)
  * [Testing](#testing)
  * [Questions](#questions)

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## License
  This application uses the ${data.license} license
  
  ## Contributions
  ${data.contribution}

  ## Testing
  ${data.test}

  ## Questions
  Created by: [${data.username}](https://github.com/${data.username}/)
  
  If you have questions regarding this application, please contact me at: [${data.email}](${data.email})`;
}

module.exports = generateMarkdown;