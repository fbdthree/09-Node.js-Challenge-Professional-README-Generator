// Imports `inquirer` package.
const inquirer = require('inquirer')
// Imports `fs` package.
const fs = require('fs')

// Use inquirer to build command line interface.
// Build a prompt object, with `inquirer`, that will hold the questions and commands that will appear in a prompt interface in the terminal.
inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "Please enter your project's title: "
    },
    {
        type: "input",
        name: "description",
        message: "Please enter your project's description: "
    },
    {
        type: "input",
        name: "intallationRequirements",
        message: "Please enter project installation requirements:"
    },
    {
        type: "input",
        name: "usage",
        message: "Please describe how to use the application that you have built: "
    },
    {
        type: "list",
        name: "license",
        choices: ["MIT", "ISC", "APACHE2.0", "GPL", "None"],
        message: "Please select a license from the following list: "
    },
    {
        type: "input",
        name: "contributors",
        message: "Please enter the names of your project's contributors: "
    },
    {
        type: "input",
        name: "testingRequirements",
        message: "Please enter your project's testing requirements: "
    },
    {
        type: "input",
        name: "github",
        message: "Please enter your project's Git Hub repository address: "
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email address associated with the project: "
    }
// Plug the inputs taken from the inquirer prompt object into the README template below, using Markdown and anchor tags to build the README.
]).then(response => {
    let readMe =
`
# **${response.title}**

## **Description**
${response.description} 

## **Table of Contents**
* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributors](#contributors)

* [Testing](#testing)

* [Github](#github)

* [Email](#email)  


### **Usage**
${response.usage}

### **License**
![GitHub license](https://img.shields.io/badge/license-${response.license}-blue.svg)


### **Contributors**
${response.contributors}

### **Installation**
${response.intallationRequirements}

### **Contributors**
${response.contributors}

### **Testing**
${response.intallationRequirements}

### **Github**
${response.github}

### **Email**
${response.email}
`

// Console log the completed README to see the README written in Markdown, on the terminal.
    console.log(readMe)
    
    // Write the completed README to a file named `README.md`.
    // Handle any errors.
    // Notify when complete.
    fs.writeFileSync("README.md", readMe, function (err, data) {
        console.log(err)
        if (err) throw (err)
    })
    console.log("Markdown complete")
})

