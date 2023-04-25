// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Please enter your GitHub username.",
        name: "username",
        validate: function (answer){
            if (answer.length <1){
                return crossOriginIsolated.log("a valid response is required");
            }
            return true;
        }
    },
    {
        type: "input",
        message: "Please enter the title of your project.",
        name: "title",
        validate: function (answer){
            if (answer.length <1){
                return crossOriginIsolated.log("a valid response is required");
            }
            return true;
        }
    },
    {
        type: "input",
        message: "Please describe your project.",
        name: "description",
        validate: function (answer){
            if (answer.length <1){
                return crossOriginIsolated.log("a valid response is required");
            }
            return true;
        }
    },
    {
        type: "input",
        message: "Please enter installation instructions.",
        name: "instructions",
        validate: function (answer){
            if (answer.length <1){
                return crossOriginIsolated.log("a valid response is required");
            }
            return true;
        }
    },
    {
        type: "input",
        message: "Please enter usage information",
        name: "usage",
        validate: function (answer){
            if (answer.length <1){
                return crossOriginIsolated.log("a valid response is required");
            }
            return true;
        }
    },
    {
        type: "input",
        message: "Please enter any contributors.",
        name: "contributors",
        validate: function (answer){
            if (answer.length <1){
                return crossOriginIsolated.log("a valid response is required");
            }
            return true;
        }
    },
    {
        type: "input",
        message: "Please enter any test instructions.",
        name: "tests",
        validate: function (answer){
            if (answer.length <1){
                return crossOriginIsolated.log("a valid response is required");
            }
            return true;
        }
    },
    {
    type: "list",
    message: "Which license are you using?",
    name: "license",
    choices: ["GNU", "Apache", "MIT", "No License"],
    validate: function (answer){
        if (answer.length <1){
            return crossOriginIsolated.log("a valid response is required");
        }
        return true;
    }
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
fs.writeFileSync(fileName,data) 
};


// TODO: Create a function to initialize app
function init() {}
inquirer.prompt(questions).then(response => {
console.log("Let's Create Your ReadMe!");
writeToFile("README.md", generateMarkdown(response));
});

// Function call to initialize app
init();
