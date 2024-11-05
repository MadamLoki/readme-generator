// TO DO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'AFL-3.0') {
    return `![License: AFL 3.0](https://img.shields.io/badge/License-AFL%203.0-blue.svg)`
  }
  else if (license === 'Apache-2.0') {
    return `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
  }
  else if (license === 'Artistic-2.0') {
    return `![License](https://img.shields.io/badge/License-Artistic%202.0-blue.svg)`
  }
  else if (license === 'BSL-1.0') {
    return `![License](https://img.shields.io/badge/License-BSL%201.0-blue.svg)`
  }
  else if (license === 'BSD-2-Clause') {
    return `![License](https://img.shields.io/badge/License-BSD%202--Clause-blue.svg)`
  }
  else if (license === 'BSD-3-Clause') {
    return `![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)`
  }
  else if (license === 'BSD-3-Clause-Clear') {
    return `![License](https://img.shields.io/badge/License-BSD%203--Clause%20Clear-blue.svg)`
  }
  else if (license === 'BSD-4-Clause') {
    return `![License](https://img.shields.io/badge/License-BSD%204--Clause-blue.svg)`
  }
  else if (license === '0BSD') {
    return `![License](https://img.shields.io/badge/License-0BSD-blue.svg)`
  }
  else if (license === 'CC') {
    return `![License](https://img.shields.io/badge/License-CC-blue.svg)`
  }
  else if (license === 'CC0-1.0') {
    return `![License](https://img.shields.io/badge/License-CC0%201.0-blue.svg)`
  }
  else if (license === 'CC-BY-4.0') {
    return `![License](https://img.shields.io/badge/License-CC%20BY%204.0-blue.svg)`
  }
  else if (license === 'CC-BY-SA-4.0') {
    return `![License](https://img.shields.io/badge/License-CC%20BY%20SA%204.0-blue.svg)`
  }
  else if (license === 'WTFPL') {
    return `![License](https://img.shields.io/badge/License-WTFPL-blue.svg)`
  }
  else if (license === 'ECL-2.0') {
    return `![License](https://img.shields.io/badge/License-ECL%202.0-blue.svg)`
  }
  else if (license === 'EPL-1.0') {
    return `![License](https://img.shields.io/badge/License-EPL%201.0-blue.svg)`
  }
  else if (license === 'EPL-2.0') {
    return `![License](https://img.shields.io/badge/License-EPL%202.0-blue.svg)`
  }
  else if (license === 'EUPL-1.1') {
    return `![License](https://img.shields.io/badge/License-EUPL%201.1-blue.svg)`
  }
  else if (license === 'AGPL-3.0') {
    return `![License](https://img.shields.io/badge/License-AGPL%203.0-blue.svg)`
  }
  else if (license === 'GPL') {
    return `![License](https://img.shields.io/badge/License-GPL-blue.svg)`
  }
  else if (license === 'GPL-2.0') {
    return `![License](https://img.shields.io/badge/License-GPL%202.0-blue.svg)`
  }
  else if (license === 'GPL-3.0') {
    return `![License](https://img.shields.io/badge/License-GPL%203.0-blue.svg)`
  }
  else if (license === 'LGPL') {
    return `![License](https://img.shields.io/badge/License-LGPL-blue.svg)`
  }
  else if (license === 'LGPL-2.1') {
    return `![License](https://img.shields.io/badge/License-LGPL%202.1-blue.svg)`
  }
  else if (license === 'LGPL-3.0') {
    return `![License](https://img.shields.io/badge/License-LGPL%203.0-blue.svg)`
  }
  else if (license === 'ISC') {
    return `![License](https://img.shields.io/badge/License-ISC-blue.svg)`
  }
  else if (license === 'LPPL-1.3c') {
    return `![License](https://img.shields.io/badge/License-LPPL%201.3c-blue.svg)`
  }
  else if (license === 'MS-PL') {
    return `![License](https://img.shields.io/badge/License-MS--PL-blue.svg)`
  }
  else if (license === 'MIT') {
    return `![License](https://img.shields.io/badge/License-MIT-blue.svg)`
  }
  else if (license === 'MPL-2.0') {
    return `![License](https://img.shields.io/badge/License-MPL%202.0-blue.svg)`
  }
  else if (license === 'OSL-3.0') {
    return `![License](https://img.shields.io/badge/License-OSL%203.0-blue.svg)`
  }
  else if (license === 'PostgreSQL') {
    return `![License](https://img.shields.io/badge/License-PostgreSQL-blue.svg)`
  }
  else if (license === 'OFL-1.1') {
    return `![License](https://img.shields.io/badge/License-OFL%201.1-blue.svg)`
  }
  else if (license === 'NCSA') {
    return `![License](https://img.shields.io/badge/License-NCSA-blue.svg)`
  }
  else if (license === 'Unlicense') {
    return `![License](https://img.shields.io/badge/License-Unlicense-blue.svg)`
  }
  else if (license === 'Zlib') {
    return `![License](https://img.shields.io/badge/License-Zlib-blue.svg)`
  }
    return '';
}

// TO DO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'AFL-3.0') {
    return `[License](https://opensource.org/licenses/AFL-3.0)`
  }
  else if (license === 'Apache-2.0') {
    return `[License](https://opensource.org/licenses/Apache-2.0)`
  }
  else if (license === 'Artistic-2.0') {
    return `[License](https://opensource.org/licenses/Artistic-2.0)`
  }
  else if (license === 'BSL-1.0') {
    return `[License](https://opensource.org/licenses/BSL-1.0)`
  }
  else if (license === 'BSD-2-Clause') {
    return `[License](https://opensource.org/licenses/BSD-2-Clause)`
  }
  else if (license === 'BSD-3-Clause') {
    return `[License](https://opensource.org/licenses/BSD-3-Clause)`
  }
  else if (license === 'BSD-3-Clause-Clear') {
    return `[License](https://opensource.org/licenses/BSD-3-Clause-Clear)`
  }
  else if (license === 'BSD-4-Clause') {
    return `[License](https://opensource.org/licenses/BSD-4-Clause)`
  }
  else if (license === '0BSD') {
    return `[License](https://opensource.org/licenses/0BSD)`
  }
  else if (license === 'CC') {
    return `[License](https://creativecommons.org/licenses/)`
  }
  else if (license === 'CC0-1.0') {
    return `[License](https://creativecommons.org/publicdomain/zero/1.0/)`
  }
  else if (license === 'CC-BY-4.0') {
    return `[License](https://creativecommons.org/licenses/by/4.0/)`
  }
  else if (license === 'CC-BY-SA-4.0') {
    return `[License](https://creativecommons.org/licenses/by-sa/4.0/)`
  }
  else if (license === 'WTFPL') {
    return `[License](http://www.wtfpl.net/)`
  }
  else if (license === 'ECL-2.0') {
    return `[License](https://opensource.org/licenses/ECL-2.0)`
  }
  else if (license === 'EPL-1.0') {
    return `[License](https://opensource.org/licenses/EPL-1.0)`
  }
  else if (license === 'EPL-2.0') {
    return `[License](https://opensource.org/licenses/EPL-2.0)`
  }
  else if (license === 'EUPL-1.1') {
    return `[License](https://opensource.org/licenses/EUPL-1.1)`
  }
  else if (license === 'AGPL-3.0') {
    return `[License](https://opensource.org/licenses/AGPL-3.0)`
  }
  else if (license === 'GPL') {
    return `[License](https://opensource.org/licenses/GPL-3.0)`
  }
  else if (license === 'GPL-2.0') {
    return `[License](https://opensource.org/licenses/GPL-2.0)`
  }
  else if (license === 'GPL-3.0') {
    return `[License](https://opensource.org/licenses/GPL-3.0)`
  }
  else if (license === 'LGPL') {
    return `[License](https://opensource.org/licenses/LGPL-3.0)`
  }
  else if (license === 'LGPL-2.1') {
    return `[License](https://opensource.org/licenses/LGPL-2.1)`
  }
  else if (license === 'LGPL-3.0') {
    return `[License](https://opensource.org/licenses/LGPL-3.0)`
  }
  else if (license === 'ISC') {
    return `[License](https://opensource.org/licenses/ISC)`
  }
  else if (license === 'LPPL-1.3c') {
    return `[License](https://opensource.org/licenses/LPPL-1.3c)`
  }
  else if (license === 'MS-PL') {
    return `[License](https://opensource.org/licenses/MS-PL)`
  }
  else if (license === 'MIT') {
    return `[License](https://opensource.org/licenses/MIT)`
  }
  else if (license === 'MPL-2.0') {
    return `[License](https://opensource.org/licenses/MPL-2.0)`
  }
  else if (license === 'OSL-3.0') {
    return `[License](https://opensource.org/licenses/OSL-3.0)`
  }
  else if (license === 'PostgreSQL') {
    return `[PostgreSQL License](https://opensource.org/licenses/PostgreSQL)`
  }
  else if (license === 'OFL-1.1') {
    return `[OFL-1.1 License](https://opensource.org/licenses/OFL-1.1)`
  }
  else if (license === 'NCSA') {
    return `[NCSA License](https://opensource.org/licenses/NCSA)`
  }
  else if (license === 'Unlicense') {
    return `[Unlicense](https://opensource.org/licenses/Unlicense)`
  }
  else if (license === 'Zlib') {
    return `[Zlib License](https://opensource.org/licenses/Zlib)`
  }
  return '';
}

// TO DO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License
    This project is licensed under the ${license} license.`
  }
  return '';
}

// TO DO: Create a function to generate markdown for README
function generateMarkdown(data) {
  if (data) {
    return `# ${data.title}
    ${renderLicenseBadge(data.license)}
    ${renderLicenseLink(data.license)}
    ${renderLicense(data.license)}
    `;}
  return `# ${data.title}
`;
}

export default generateMarkdown;
