const Engineer= require('./lib/Engineer');
const Manager= require('./lib/Manager');
const Intern= require('./lib/Intern');
const inquirer=require('inquirer');
const generatePage = require('./src/pagetemplate');
const fs = require('fs');

class App {
    constructor() {
        this.data=[];
    }

    addManager() {
        inquirer.prompt([
            {
            type: 'input',
            name: 'name',
            message: `Enter manager's name: (required)`,
            validate: input => {
                if (input) {
                return true;
                } else {
                console.log('You need to enter a name!');
                return false;
                }
            }
            },
            {
            type: 'input',
            name: 'id',
            message: `Enter manager's id: (required)`,
            validate: input => {
                if (input) {
                return true;
                } else {
                console.log('You need to enter an id!');
                return false;
                }
            }
            },
            {
            type: 'input',
            name: 'email',
            message: `Enter manager's email: (required)`,
            validate: input => {
                if (input) {
                return true;
                } else {
                console.log('You need to enter an email!');
                return false;
                }
            }
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: `Enter manager's office number: (required)`,
                validate: input => {
                    if (input) {
                    return true;
                    } else {
                    console.log('You need to enter a phone number!');
                    return false;
                    }
                }
            }
        ])
        .then((data) =>{
        this.manager = new Manager (data.name,data.id,data.email,data.officeNumber);
        this.data.push(this.manager)
        this.createTeam();
        });
    }

    addEngineer() {
        inquirer.prompt([
            {
            type: 'input',
            name: 'name',
            message: `Enter engineer's name: (required)`,
            validate: input => {
                if (input) {
                return true;
                } else {
                console.log('You need to enter a name!');
                return false;
                }
            }
            },
            {
            type: 'input',
            name: 'id',
            message: `Enter engineer's id: (required)`,
            validate: input => {
                if (input) {
                return true;
                } else {
                console.log('You need to enter an id!');
                return false;
                }
            }
            },
            {
            type: 'input',
            name: 'email',
            message: `Enter engineer's email: (required)`,
            validate: input => {
                if (input) {
                return true;
                } else {
                console.log('You need to enter an email!');
                return false;
                }
            }
            },
            {
                type: 'input',
                name: 'github',
                message: `Enter engineer's github account: (required)`,
                validate: input => {
                    if (input) {
                    return true;
                    } else {
                    console.log('You need to enter a github username!');
                    return false;
                    }
                }
            }
        ])
        .then((data) =>{
            this.engineer = new Engineer (data.name,data.id,data.email,data.github);
            this.data.push(this.engineer);
            this.createTeam();
            });

    }
    
    addIntern() {
        inquirer.prompt([
            {
            type: 'input',
            name: 'name',
            message: `Enter intern's name: (required)`,
            validate: input => {
                if (input) {
                return true;
                } else {
                console.log('You need to enter a name!');
                return false;
                }
            }
            },
            {
            type: 'input',
            name: 'id',
            message: `Enter intern's id: (required)`,
            validate: input => {
                if (input) {
                return true;
                } else {
                console.log('You need to enter an id!');
                return false;
                }
            }
            },
            {
            type: 'input',
            name: 'email',
            message: `Enter intern's email: (required)`,
            validate: input => {
                if (input) {
                return true;
                } else {
                console.log('You need to enter an email!');
                return false;
                }
            }
            },
            {
                type: 'input',
                name: 'school',
                message: `Enter intern's school: (required)`,
                validate: input => {
                    if (input) {
                    return true;
                    } else {
                    console.log('You need to enter a school name!');
                    return false;
                    }
                }
            }
        ])
        .then((data) =>{
            this.intern = new Intern (data.name,data.id,data.email,data.school);
            this.data.push(this.intern);
            this.createTeam();
            });

    }

    createTeam() {
        inquirer.prompt(
            {
                type: 'list',
                name: 'choise',
                message: 'Do you want to ',
                choices: ['Add an Engineer','Add an Intern','Stop adding (team complete)']
            }
        )
        .then(({choise})=>{
            if(choise==='Stop adding (team complete)'){
               const page= generatePage(this.data);
            //    console.log(this.data);
            //    console.log(page);
               fs.writeFile('./dist/index.html',page, err => {
                if (err) throw new Error(err);
                });
            }
            else if(choise==='Add an Engineer'){
               this.addEngineer(); 
            }
            else {
                this.addIntern();
            }
        })
    };


};

new App().addManager();

module.exports= App;