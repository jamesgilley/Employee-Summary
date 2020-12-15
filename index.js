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