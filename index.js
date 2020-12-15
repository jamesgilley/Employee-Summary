const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

class Employee {
    constructor(name, id, email) { // Class Constructor 
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() { console.log(`Hello, my name is ${this.name}`); };
    getId = () => { console.log(`Hello, my name is ${this.id}`); };
    getEmail = () => { console.log(`Hello, my name is ${this.email}`); };
    getRole = () => { console.log(`Hello, my role is Employee`); };

}

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole = () => {
        console.log(`Hello, my role is Manager`);
    };
}

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getGithub = () => {
        console.log(`My github username is: ${this.github}`);
    };
    getRole = () => {
        console.log(`Hello, my role is Engineer`);
    }
}

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getSchool = () => {
        console.log(`My school is: ${this.school}`);
    };
    getRole = () => {
        console.log(`Hello, my role is Intern`);
    }
}
const promptUser1 = () =>
    inquirer.prompt([{
            type: 'input',
            name: 'numEngineers',
            message: 'How many Engineers on the team?',
        },
        {
            type: 'input',
            name: 'numInterns',
            message: 'How many Interns on the team?',
        },
        {
            type: 'input',
            name: 'managerName',
            message: 'What is the name of the manager?',
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'What is the Id of the manager?',
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'What is the Email Address of the manager?',
        },
        {
            type: 'input',
            name: 'managerOffice',
            message: 'What is the office number of the manager?',
        },
    ])
const getEngineerInfo = (i) =>
    inquirer.prompt([{
            type: 'input',
            name: `engineerName${i}`,
            message: 'What is the engineer name?'
        },
        {
            type: 'input',
            name: `engineerId${i}`,
            message: 'What is the engineer Id?'
        },
        {
            type: 'input',
            name: `engineerEmail${i}`,
            message: 'What is the engineer Email?'
        },
        {
            type: 'input',
            name: `engineerGithub${i}`,
            message: 'What is the engineer Github Username?'
        },
    ])