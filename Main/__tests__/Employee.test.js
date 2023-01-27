const Employee = require("../lib/Employee");

describe("Employee", () => { 
describe("getName", () => {
  it("allows the name to be set using a constructor", () => {
    const newEmployee = new Employee('cole', 'id', 'email');
    expect(newEmployee.name).toEqual("cole");
  });
});


describe("getEmail", () => {
  it("should show the email attached to this specfifc employee", () => {
    const employee = new Employee("name", "id", "gmail");
    expect(employee.getEmail()).toEqual("gmail");
  });
});


describe("Employee", () => {
  it("should show the name attached to this specific employee", () => {
    const employee = new Employee("name", "id", "email");
    expect(employee.getRole()).toEqual("Employee");
  });
});


describe("getId", () => {
  it("should show the id attached to this specific employee", () => {
    const employee = new Employee("name", "45", "email");
    expect(employee.getId()).toEqual("45");
  });
});
})