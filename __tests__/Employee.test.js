const Employee = require('../lib/Employee');

test ('get employee name',()=>{
    const employee = new Employee ('employeeName');

     expect(employee.name).toBe('employeeName');
     //expect(employee.value).toEqual(expect.any(String));
});

test ('get employee id',()=>{
    const id = new Employee ('employeeId');

    //expect(id.value).toBe('employeeId');
    expect(id.value).toEqual(expect.any(String));
});
