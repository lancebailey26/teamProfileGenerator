const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");
const internal = require("stream");
var team = [{}];

function inquire(){
    inquirer
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
            
        ])
        .then((answers) => {
            if (answers.role === "Engineer"){
                inquirer
                .prompt([
                    {
                       type:'input',
                       name:'github',
                       message:"enter github: ", 
                    }
                ])
                const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
                team.push(engineer)
                
            } else if (answers.role === "Manager"){
                inquirer
                .prompt([
                    {
                       type:'input',
                       name:'officeNumber',
                       message:"office number: ", 
                    }
                ])
                const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
                team.push(manager)
            } else if (answers.role === "Intern"){
                inquirer
                .prompt([
                    {
                       type:'input',
                       name:'school',
                       message:"school: ", 
                    }
                ])
                const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
                team.push(intern)
             };
        })
    }


inquire();

