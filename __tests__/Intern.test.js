const Intern = require('../lib/Intern');

test('create an intern obj', () => {
    const intern = new Intern('employeeName', 'employeeId', 'employeeEmail', 'schoolName' );

    expect(intern.school).toEqual(expect.any(String));
});

test('gets intern school', () => {
    const intern = new Intern('employeeName', 'employeeId', 'employeeEmail', 'schoolName' );

    expect(intern.school).toEqual(expect.any(String));
});

test('role of employee', () => {
    const intern = new Intern('employeeName', 'employeeId', 'employeeEmail', 'schoolName' );

    expect(intern.getRole()).toEqual('Intern');
});