// license badge section
function renderLicenseBadge(license) {
  if (license) {
    return `!${license} (img.shields.io/badge/license-${license.split(' ').join('%20')}-blue)`;
  } else {
    return '';
  }
};

// description section
const createDescription = description => {
  return `${description}`;
};

// table of contents
const createTableOfContents = contentsArr => {

  // contents list items based on user selection
  let contentsList = '';
  contentsArr.forEach((item) => {
    contentsList += `* [${item.header}](#${(item.header).toLowerCase().split(' ').join('-')})`;
  });
  return contentsList;
};

// creates installation section
const createInstallation = install => {
  if (install) {
      return `To use this application, please install: ${install}`;
  } else {
      return '';
  }
};

// usage section
const createUsage = usage => {
  return `${usage}`
};

// license section
const createLicense = license => {
  if (license) {
    return `This application uses the ${license} license.`;
  } else {
    return '';
  }
};

// test section
const createTest = test => {
  if (test) {
    return `To test the application, install ${test} and run \`npm run test\` from the command line.`;
  } else {
    return '';
  };
};

// questions section
const createQuestions = (email, username, repo) => {
  if (email) {
    return `My username on GitHub is ${username} and you can find the repository here(https://github.com/${username}/${repo}) or contact me via email at ${email} regarding any questions you may have.`;
  } else {
    return '';
  }
};

// create markdown for readme
function generateMarkdown(data) {
  const { title, username, repo, license } = data;
  let readmeContents = '';
  const sectionArr = [
      {
          header: 'Installation',
          content: createInstallation(data.installation)
      },
      {
          header: 'Usage',
          content: createUsage(data.usage)
      },
      {
          header: 'License',
          content: createLicense(license)
      },
      {
          header: 'Test',
          content: createTest(data.test)
      },
      {
          header: 'Questions',
          content: createQuestions(data.questions, username, repo)
      }
  ];

  // adds each README section if contents for the section exists
  sectionArr.forEach((sectionItem) => {
    if (sectionItem.content) {
      readmeContents += `## ${sectionItem.header}${sectionItem.content}`;
    }
  });

  return `# ${title}
  ${renderLicenseBadge(license)}
  ## Description
  ${createDescription(title, data.description, data.link)}
  ## Contents
  ${createTableOfContents(sectionArr)}
  ${readmeContents}`;
}

module.exports = generateMarkdown;