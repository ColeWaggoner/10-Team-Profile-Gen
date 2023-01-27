// require all of your classes
// require inquirer, path if needed, fs
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
// require your page template
const render = require("./src/page-template.js");
// empty team members array
const teamMembers = [];

const employeeQ = [
  {
    type: "list",
    choices: ["Manager", "Engineer", "Intern", "No more employees"],
    message: "What type of employee would you like to make?",
    name: "employee",
  },
];

const managerQ = [
  {
    type: "input",
    message: "What is the name of the manager?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the email of the manager?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the id of the manager?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the managers office number?",
    name: "officeNumber",
  },
];

const internQ = [
  {
    type: "input",
    message: "What is the name of the intern?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the email of the intern?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the id of the intern?",
    name: "id",
  },
  {
    type: "input",
    message: "What school does the intern attend or attended?",
    name: "school",
  },
];

const engineerQ = [
  {
    type: "input",
    message: "What is the name of the engineer?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the email of the engineer?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the id of the engineer?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the engineers github name?",
    name: "github",
  },
];

function init() {
  inquirer.prompt(employeeQ).then((data) => {
    const choice = data.employee;
    switch (choice) {
      case "Manager":
        managerInfo();
        break;
      case "Intern":
        internInfo();
        break;
      case "Engineer":
        engineerInfo();
        break;
      case "No more employees":
        console.log(teamMembers)
        const htmlData = render(teamMembers)
        buildTeam(htmlData);
        
        break;
    }
  });
}

function managerInfo() {
  inquirer.prompt(managerQ).then((data) => {
    const manager = new Manager(
      data.name,
      data.id,
      data.email,
      data.officeNumber
    );
    teamMembers.push(manager);
    init();
  });
}

function internInfo() {
  inquirer.prompt(internQ).then((data) => {
    const intern = new Intern(data.name, data.id, data.email, data.school);
    teamMembers.push(intern);
    init();
  });
}

function engineerInfo() {
  inquirer.prompt(engineerQ).then((data) => {
    const engineer = new Engineer(data.name, data.id, data.email, data.github);
    teamMembers.push(engineer);
    init();
  });
}

function buildTeam(data) {
  fs.writeFileSync("./dist/newTeam.html", data, 'utf-8');
}

// make sure call your init function
init();
