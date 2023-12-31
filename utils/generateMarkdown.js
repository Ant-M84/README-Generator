// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `![Github License](https://img.shields.io/badge/license-MIT-blue)`;
  }  else if (license === "Apache") {
    return `![Github License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
  } else if (license === "GPL") {
    return `![Github License](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
  } else if (license === "BSD-2") {
    return `![Github License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)`;
  } else if (license === "BSD-3") {
    return `![Github License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)`;
  } else { (license === "No License") 
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `(https://mit-license.org/)`;
  }  else if (license === "Apache") {
    return `(https://www.apache.org/licenses/LICENSE-2.0)`;
  } else if (license === "GPL") {
    return `(https://www.gnu.org/licenses/gpl-3.0.en.html)`;
  } else if (license === "BSD-2") {
    return `(https://imagej.net/licensing/bsd)`;
  } else if (license === "BSD-3") {
    return `(https://imagej.net/licensing/bsd)`;
  } else { (license === "No License") 
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "No License") {
    return (
    `Copyright @ ${license}. All rights reserved.\nLicensed under the ${license} license.`
    )
  }
  return "Application is not under license."
}

// TODO: Create a function to generate markdown for README

const generateMarkdown = ({title, description, installation, usage, license, contributing, tests, github, email}) =>
  `# ${title}
${renderLicenseBadge(license)}

${renderLicenseLink(license)}

## Description

${description}.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribute](#contribute)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${installation}

## Usage

${usage}

## License

${renderLicenseSection(license)}

## Contribute

${contributing}

## Tests

${tests}

## Questions

For additional support, view the GitHub page for the author below:

- GitHub: "${github}": (https://github.com/${github}/)
- Email: ${email}
`;

module.exports = generateMarkdown;
