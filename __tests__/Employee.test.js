const Employee = require('../lib/Employee');

test ('employee name',()=>{
    const employee = new Employee ('employeeName', 'employeeId', 'employeeEmail');

    expect(employee.getName()).toEqual(expect.any(String));
});

test ('employee id',()=>{
    const employee = new Employee ('employeeName', 'employeeId', 'employeeEmail');

    expect(employee.getId()).toEqual(expect.any(String));
});

test ('employee email',()=>{
    const employee = new Employee ('employeeName', 'employeeId', 'employeeEmail');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test ('create employee object', () => {
    const employee = new Employee('employeeName', 'employeeId', 'employeeEmail');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
});

test ('get employee role', () => {
    const employee = new Employee('employeeName', 'employeeId', 'employeeEmail');

    expect(employee.getRole()).toEqual("Employee");
});
