const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, id, email, workplace) {
    super(name, id, email);
    this.workplace = workplace;
  }

  getWorkPlace() {
    return this.workplace;
  }
  
  getRole() {
    return "Manager";
  }
}
module.exports = Manager;
