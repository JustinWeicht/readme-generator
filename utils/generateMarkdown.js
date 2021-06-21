// create installation section
const generateInstall = installText => {
  if (!installText) {
    return ''
  } else {
    return `## Installation
  ${installText}
  `
  }
}

// create contribution section
const generateContribute = contributeText => {
  if (!contributeText) {
    return ''
  } else {
    return `## Contributions
  ${contributeText}
  `
  }
}

// create testing section
const generateTesting = testText => {
  if (!testText) {
    return ''
  } else {
    return `## Testing
  ${testText}
  `
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `
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
  * This application uses the ${data.license} license
  
  ## Contributions
  ${data.contribution}

  ## Testing
  ${data.test}

  ## Questions
  Created by: [${data.username}]
  
  If you have questions regarding this application, please contact me at: [${data.email}](${data.email})`;
}

module.exports = generateMarkdown;