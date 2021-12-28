//const generatePage = require('./src/page-template');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const fs = require('fs');
const inquirer = require('inquirer');

const uniArray = [];

// manager Q-A prompts
const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'managerName',
            message: 'Please provide name of manager for this department',
            validate: input => {
                if(!input) {
                    console.log('Please provide valid input')
                } 
                return true;
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the email address",
            validate: email => {
                validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (validEmail) {
                    return true;
                } else {
                    console.log ('Please enter valid email!')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter office number related to manager",
            validate: validNumber => {
                if (validNumber) {
                    return true;
                } else {
                    console.log ('Please enter valid office number!')
                    return false; 
                }
            }
        }
        
    ])
};

addManager()
    .then (managerData => {
        const { name, id, email, officeNumber } = managerData;
        const manager = new Manager ( name, id, email, officeNumber );

        uniArray.push(manager);
        console.log(manager);
    })

    .catch(err => {
        console.log(err);
    });


