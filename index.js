//requirements (classes, inquirer etc.)
const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");
const htmlBase = require("./src/baseHTML");
//empty team array
const team = [];
//manager questions
const managerQ = [
    {
        type: "input",
        name: "name",
        message: "name: ",
    },
    {
        type: "input",
        name: "id",
        message: "ID: ",
    },
    {
        type: "input",
        name: "email",
        message: "email: ",
    },
    {
        type: "input",
        name: "officeNumber",
        message: "office number: "
    },
]
//engineer questions
const engineerQ = [
    {
        type: "input",
        name: "name",
        message: "name: ",
    },
    {
        type: "input",
        name: "id",
        message: "ID: ",
    },
    {
        type: "input",
        name: "email",
        message: "email: ",
    },
    {
        type: "input",
        name: "github",
        message: "github username:",
    }
]
//intern questions
const internQ = [
    {
        type: "input",
        name: "name",
        message: "name: ",
    },
    {
        type: "input",
        name: "id",
        message: "ID: ",
    },
    {
        type: "input",
        name: "email",
        message: "email: ",
    },
    {
        type: "input",
        name: "school",
        message: "school: ",
    }
]
//role defining question
const ezEmployee = [
    {
        type: 'list',
        name: 'role',
        message: "Select a Role: ",
        choices: [
            "Engineer",
            "Intern",
            "Manager",
            "All Done"
        ]
    }
]
//take data from prompts based on role and add to team array
function createManager() {
    inquirer.prompt
        (managerQ)
        .then((answers) => {
            team[team.length] = new Manager(
                answers.name,
                answers.id,
                answers.email,
                answers.officeNumber
            );
            firstQ();
        });
}
function createEngineer() {
    inquirer.prompt
        (engineerQ)
        .then((answers) => {
            team[team.length] = new Engineer(
                answers.name,
                answers.id,
                answers.email,
                answers.github
            );
            firstQ();
        });
}
function createIntern() {
    inquirer.prompt
        (internQ)
        .then((answers) => {
            team[team.length] = new Intern(
                answers.name,
                answers.id,
                answers.email,
                answers.school
            );
            firstQ();
        });
}
//write html file with data in team array
function writeIt(answers) {
    let html = htmlBase(answers);
    fs.writeFile('./dist/index.html', html, (err) =>
            err ? console.log(err) : console.log('team profile generated')
            );   
}
//initial question, selects prompts based on role input, or ends if all done is selected
function firstQ() {
    inquirer.prompt(ezEmployee).then((answers) => {
        switch (answers.role) {
            case "Manager":
                createManager();
                break;
            case "Intern":
                createIntern();
                break;
            case "Engineer":
                createEngineer();
                break;
            case "All Done":
                writeIt(team);
        }
    });
}
firstQ();

