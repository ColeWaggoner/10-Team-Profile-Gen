const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("getRole", () => {
    it("should set the role of the employee to manager", () => {
      const manager = new Manager();
      expect(manager.getRole()).toEqual("Manager");
    });
  });


  describe("getEmail", () => {
    it("should show the email attached to this specfifc employee", () => {
      const manager = new Manager("name", "id", "email.com", "officeNumber");
      expect(manager.getEmail()).toEqual("email.com");
    });
  });



  describe("getName", () => {
    it("should show the name attached to this specific manager", () => {
      const manager = new Manager("Noel", "id", "email", "officeNumber");
      expect(manager.getName()).toEqual("Noel");
    });
  });


  
  describe("getId", () => {
    it("should show the id attached to this specific employee", () => {
      const manager = new Manager("name", "56789", "email", "officeNumber");
      expect(manager.getId()).toEqual("56789");
    });
  });

  });
