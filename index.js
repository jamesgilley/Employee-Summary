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
    ]) async function getEngineers(x) {
        let i = 0
        while (i < x.numEngineers) {
            let response = await getEngineerInfo(i)
            if (response) {

                let html = ` 
         <div class="border">
         <div class='engineer'>
         <h3>Engineer</h3>
         </div >
         <div class="mainContent">
         <p>Engineer Number:${i} Engineer Name: ${response[`engineerName${i}`]}</p> \n 
         <p>Engineer Number:${i} Engineer Id: ${response[`engineerId${i}`]}</p> \n
         <p>Engineer Number:${i} Engineer Email: ${response[`engineerEmail${i}`]}</p> \n
         <p>Engineer Number:${i} Engineer Github: ${response[`engineerGithub${i}`]}</p> \n
         <br/>
          <br/>
         </div>
         </div>
         `
            appendHTML(html)
      
            i++
          }
        }
      }
      
      const getInternInfo = (i) =>
        inquirer.prompt([
          {
            type: 'input',
            name: `internName${i}`,
            message: 'What is the intern name?'
          },
          {
            type: 'input',
            name: `internId${i}`,
            message: 'What is the intern Id?'
          },
          {
            type: 'input',
            name: `internEmail${i}`,
            message: 'What is the intern email?'
          },
          {
            type: 'input',
            name: `internSchool${i}`,
            message: 'What is the intern school?'
          },
        ])
      
      async function getInterns(x) {
        let i = 0;
        //for(let i = -1; i<x.numInterns; i++)
        while (i < x.numInterns) {
          let response = await getInternInfo(i)
          if (response) {
            let html = `
          <div class="border">
          <div class='intern'>
          <h3>Intern</h3>
          </div>
         <div class='mainContent'>
          <p>Intern Number:${i} Intern Name: ${response[`internName${i}`]}</p> \n
          <p>Intern Number:${i} Intern Id: ${response[`internId${i}`]}</p> \n
          <p>Intern Number:${i} Intern Email: ${response[`internEmail${i}`]}</p> \n
          <p>Intern Number:${i} Intern School: ${response[`internSchool${i}`]}</p> \n
          <br/>
          <br/>
          </div>
          </div>
          `
            appendHTML(html)
            i++
            console.log(response)
          }
        }
      }promptUser1()
      .then(answers => {
        writeFileAsync('index.html', generateHTML(answers))
        return getEngineers(answers)
          .then(x => {
            return getInterns(answers)
          })
          .then((x) => {
            console.log('answrrs', answers)
    
          })
      })
    
    const generateHTML = (x) =>
    
      `
     <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width">
        <title>repl.it</title>
        <link href="style.css" rel="stylesheet" type="text/css" />
      </head>
      <body>
      <style>
      .manager {
        background-color: blue;
        width: 100%;
        padding:5px;
        border: 5px;
      }
      .engineer {
        background-color: yellow;
        width: 100%;
        padding:5px;
        border: 5px;
      }
      .intern {
        background-color: green;
        width: 100%;
        padding:5px;
        border: 5px;
      }
      .mainContent {
        border: 10px;
      }
    
      .border{
        width: 25%;
          border-width:5px;  
          border-style:solid;
      }
      </style>
      
     <h1>Team Roster</h1>
    
       <br/>
       <div class="border">
       <div class='manager'>
       <h3 >Manager</h3>
       </div>
       <div class="mainContent">
       <h3>managerName:${x.managerName}</h3>
       <h3>managerId:${x.managerId}</h3>
       <h3>managerEmail:${x.managerEmail}</h3>
       <h3>managerOffice:${x.managerOffice}</h3>
       <br/>
       </div>
       </div>
    
       </body>
    </html>
    
       
     `;