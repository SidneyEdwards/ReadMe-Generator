// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string


function renderLicenseBadge(licenseType) {

  let licenseString = " "
  if (licenseType === "MIT") {
    licenseString = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  };
  if (licenseType === "GNU") {
    licenseString = `![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)`
  };
  if (licenseType === "Apache") {
    licenseString = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
    };
  return licenseString
  };


// TODO: Create a function to generate markdown for README
function generateMarkdown(userResponse) {
  return `
  ## Title
    ${userResponse.title}
  ## License
  \n${renderLicenseBadge(userResponse.license)}
  \n## Description
  ${userResponse.description}
  \n## Table of Contents
    \n* [Username](#username)
    \n* [Instructions](#instructions)
    \n* [Usage](#usage)
    \n* [Contributors](#contributors)
    \n* [Tests](#tests)
  \n## Username
    \n${userResponse.username}
  \n## Instructions
    \n${userResponse.instructions}
  \n## Usage
    \n${userResponse.usage}
  \n## Contributors
    \n${userResponse.contributors}
  \n## Tests
    \n${userResponse.tests}
`;
};

module.exports = generateMarkdown;
