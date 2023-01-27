const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('getRole', () => {
        it('should return the role of this Employee as Intern', () => {
            const intern = new Intern();
            expect(intern.getRole()).toEqual('Intern');
        });
    });
   

    describe("getEmail", () => {
        it("should show the email attached to this specfifc employee", () => {
            const intern = new Intern('name', 'id', 'email.com', 'school');
            expect(intern.getEmail()).toEqual('email.com');
        });
    });
    

    describe('getName', () => {
        it("should show the name attached to this specific employee", () => {
            const intern = new Intern('cole', 'id', 'email', 'school');
            expect(intern.getName()).toEqual('cole')
        })
    });
    

    describe('getId', () => {
        it('should show the id attached to this specific employee', () => {
            const intern = new Intern('name', '123', 'email', 'school');
            expect(intern.getId()).toEqual('123');
        });
    });
    
    
    describe('getSchool', () => {
        it('should show the school attached to the intern', () => {
            const intern = new Intern('name', 'id', 'email', 'UCF');
            expect(intern.getSchool()).toEqual('UCF');
        });
    });  
});
