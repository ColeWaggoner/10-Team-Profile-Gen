const Engineer = require('../lib/engineer');

describe('Engineer', () => {
    describe('getRole', () => {
        it('should set the role of employee to engineer', () => {
            const engineer = new Engineer();
            expect(engineer.getRole()).toEqual('Engineer');
        });
    });
    
  
    describe("getEmail", () => {
        it("should show the email of specfifc employee", () => {
            const engineer = new Engineer('name', 'id', 'gmail');
            expect(engineer.getEmail()).toEqual('gmail');
        });
    });
    

    describe('getName', () => {
        it("should show the name attached to this specific employee", () => {
            const engineer = new Engineer('cole', 'id', 'email', 'github');
            expect(engineer.getName()).toEqual('cole')
        })
    });
   

    describe('getId', () => {
        it('should show the id of specific employee', () => {
            const engineer = new Engineer('name', '123', 'email');
            expect(engineer.getId()).toEqual('123');
        });
    });
    

    describe('getGithub', () => {
        it('should show the github name of the engineer', () => {
            const engineer = new Engineer('name', 'id', 'email', 'NoelStafford');
            expect(engineer.getGitHub()).toEqual('NoelStafford');
        });
    });
    
});