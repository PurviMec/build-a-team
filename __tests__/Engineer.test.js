const Engineer = require('../lib/Engineer');

test ('create an engineer object', () => {
    const engineer = new Engineer ('engineerName', 'employeeId', 'employeeEmail', 'github');

    expect(engineer.github).toEqual(expect.any(String));
});

test ('get gitHub', () => {
    const engineer = new Engineer ('engineerName', 'employeeId', 'employeeEmail', 'github');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('get employee Role', ()=> {
    const engineer = new Engineer ('engineerName', 'employeeId', 'employeeEmail', 'github');

    expect(engineer.getRole()).toEqual('Engineer');
});

