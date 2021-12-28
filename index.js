//const generatePage = require('./src/page-template');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const fs = require('fs');
const inquirer = require('inquirer');

const uniArray = [];

// manager Q-A prompts
// const addManager = () => {
//     return inquirer.prompt ([
//         {
//             type: 'input',
//             name: 'managerName',
//             message: 'Please provide name of manager for this department',
//             validate: input => {
//                 if(!input) {
//                     console.log('Please provide valid input')
//                 } 
//                 return true;
//             }
//         },
//         {
//             type: 'input',
//             name: 'email',
//             message: "Please enter the email address",
//             validate: email => {
//                 validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
//                 if (validEmail) {
//                     return true;
//                 } else {
//                     console.log ('Please enter valid email!')
//                     return false; 
//                 }
//             }
//         },
//         {
//             type: 'input',
//             name: 'officeNumber',
//             message: "Please enter office number related to manager",
//             validate: validNumber => {
//                 if (validNumber) {
//                     return true;
//                 } else {
//                     console.log ('Please enter valid office number!')
//                     return false; 
//                 }
//             }
//         }
        
//     ])
// };

// addManager()
//     .then (managerData => {
//         const { name, id, email, officeNumber } = managerData;
//         const manager = new Manager ( name, id, email, officeNumber );

//         uniArray.push(manager);
//         console.log(manager);
//     })

//     .catch(err => {
//         console.log(err);
//     });

const addEmployee = () => {
    console.log(`
        =================
        Adding employees to the team
        =================
    `);
    
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Please select one of these",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What's the name of the employee?", 
            validate: input => {
                if(!input) {
                    console.log('Please provide valid input')
                } 
                return true;
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the employee ID.",
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
            message: "Please enter the employee's email.",
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
            name: 'github',
            message: "Please enter the employee's github username.",
            when: (input) => input.role === "Engineer",
            validate: inputName => {
                if (inputName ) {
                    return true;
                } else {
                    console.log ("Please enter valid employee's github username!")
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school name",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter valid intern's school!")
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Are we willing to add more employees to this team?',
            default: false
        }
    ])
    
    
};

addEmployee()
.then(employeeData => {
    
    let { name, id, email, role, github, school, confirmAddEmployee } = employeeData; 
    let employee; 

    if (role === "Engineer") {
        employee = new Engineer (name, id, email, github);

        console.log(employee);

    } else if (role === "Intern") {
        employee = new Intern (name, id, email, school);

        console.log(employee);
    }

    uniArray.push(employee); 

    if (!confirmAddEmployee) {
        return uniArray
    } 
    return addEmployee(uniArray);
})
.catch(err => {
    console.log(arr);
})
    


