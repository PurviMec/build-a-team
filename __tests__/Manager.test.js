const Manager = require('../lib/Manager');

test('creates Manager object', () => {
    const manager = new Manager('employeeName', 'employeeId', 'employeeEmail', 4);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets role from getRole()
test('gets role of employee', () => {
    const manager = new Manager('employeeName', 'employeeId', 'employeeEmail');

    expect(manager.getRole()).toEqual("Manager");
}); 