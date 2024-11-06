// TO DO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`
  }
    return '';
}

// TO DO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `[License](#license)`
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
