const inquirer = require('inquirer')
const fs = require('fs')

inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "Please enter project title"
    },
    {
        type: "input",
        name: "description",
        message: "Please enter project description:"
    },
    {
        type: "list",
        name: "liscense",
        choices: ["MIT", "ISC", "APACHE2.0", "GPL", "None"],
        message: "Please enter project liscense:"
    },
    {
        type: "input",
        name: "contributors",
        message: "Please enter project contributors:"
    },
    {
        type: "input",
        name: "contributors",
        message: "Please enter project contributors:"
    },
    {
        type: "input",
        name: "intallationRequirements", 
        message: "Please enter project installation requirements:"
    },
    {
        type: "input",
        name: "testingRequirements", 
        message: "Please enter project testing requirements:"
    },
    {
        type: "input",
        name: "github", 
        message: "Please enter project Git Hub:"
    },
    {
        type: "input",
        name: "email",
        message: "Please enter project email"
    }
]).then(response => {
    let readMe =
        `
# ${response.title}

## Table of Contents
* [Description](#description)

* [License](#license)

* [Contributors](#contributors)

* [Installation](#installation)

* [Testing](#testing)

* [Github](#github)

* [Email](#email)

### Description 
${response.description}   


### License
![GitHub license](https://img.shields.io/badge/license-${response.license}-blue.svg)


### Contributors
${response.contributors}

### Installation 
${response.intallationRequirements}

### Testing
${response.intallationRequirements}

### Github
${response.github}

### Email
${response.email}

`
    console.log(readMe)
    fs.writeFileSync("README.md", readMe, function (err,data) {
        console.log(err)
        if (err) throw (err)
    })
    console.log("Markdown complete")
})