// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require('inquirer');
const { type } = require("os");
const generateMarkdown = require("./generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  

{   
    message: "What is the name of the project?",
    name: "title"
},
{   
    message: "Please provide a table on content",
    name: "table of content"
},
{  
    message: "Please provide a description of the project",
    name: "description"
},
{   
    message: "What is the installation process?",
    name: "installation"
},
{   
    message: "How will this project be used?",
    name: "usage"
},
{   
    message: "What licenses are required with this project?",
    name: "license",
    type: "list",
    choices: [
        "MIT",
        "Apache",
        "GPLv2",
        "Unlicense",]
},
{   
    message: "Who were the contributors to this project?",
    name: "contribution"
},
{   
    message: "What is the test process for this project?",
    name: "test"
},
{   
    message: "What is your GitHub user name?",
    name: "userName"
},
{
    message: "What is your email address?",
    name: "email"

}

];
// TODO: Create a function to write README file

function writeToFile() {
    inquirer.prompt(questions)
    .then((inquirerResponse, data) => {   
        console.log(inquirerResponse);
        fs.writeFileSync(inquirerResponse.title + ".md", generateMarkdown(inquirerResponse));
    })
    .catch((err) => {
        console.log(err);
    })
}

writeToFile();
