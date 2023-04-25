//ODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// The License badge is the link so I took out the generate link function
function renderLicenseBadge(license) {
  if (license === "MIT") 
    {return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"}
  else if (license === "Apache")
    {return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"}
  else if (license === "GPLv2")
    {return "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/gpl-2.0)"}
  else if (license === "Unlicense")
    {return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"}

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT") 
    {return "The MIT License is a permissive open-source software license that allows users to use, modify, and distribute the software with very few restrictions, including the right to use the software for commercial purposes. It is one of the most popular and widely used open-source licenses."}
  else if (license === "Apache")
    {return "The Apache License is a permissive free software license written by the Apache Software Foundation (ASF). The Apache License requires preservation of the copyright and"}
  else if (license === "GPLv2")
    {return "The GNU General Public License (GNU GPL or simply GPL) is a series of widely used free software licenses that guarantee end users the freedom to run, study, share, and modify the software. The licenses were originally written by Richard Stallman, former head of the Free Software Foundation (FSF), for the GNU Project, and grant the recipients of a computer program the rights of the Free Software Definition."}
  else if (license === "Unlicense")
    {return "The Unlicense is a public domain dedication intended to provide a template for disclaiming copyright"}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${data.title}

  ${renderLicenseBadge(data.license)}


  # Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  

  
  ## Description
  ${data.description}
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  ${renderLicenseSection(data.license)}
  
  ## Contribution
  ${data.contribution}
  
  ## Tests
  ${data.test}

  ## Questions
  ${"https://github.com/" + data.userName}


  ${data.email}

  `;
}

module.exports = generateMarkdown;
