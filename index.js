const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");
var teamArray = [];

function inquire(){
    const response = inquirer
        .prompt([
            {
            type: 'input',
            name:'name',
            message:"Name: ",
            },
            {
            type: 'input',
            name: "id",
            message:"ID: "
            },
            {
            type: 'input',
            name:'email',
            message:"Email: ",
            },
            {
                type: 'list',
                name: 'role',
                message: "Role: ",
                choices: [
                     "Engineer",
                     "Intern",
                     "Manager",
                ]
            }
        ]);
}

inquire();
