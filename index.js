// Imports `inquirer` package.
const inquirer = require('inquirer')
// Imports `fs` package.
const fs = require('fs')

// Use inquirer to build command line interface.
// Build an object, with `inquirer`, that will hold the questions and commands that will appear in a prompt interface in the terminal.
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
// Plug the inputs taken from the inquirer prompt object into the README template below, using Mardown to build the README.
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
// Console log the completed README to see the README written in Markdown, on the terminal.
    console.log(readMe)
    
    // Write the completed README to a file named `README.md`.
    // Handle any errors.
    fs.writeFileSync("README.md", readMe, function (err, data) {
        console.log(err)
        if (err) throw (err)
    })
    console.log("Markdown complete")
})

