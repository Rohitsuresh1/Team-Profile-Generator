const Employee= require('../lib/Employee');

test('created an Employee object', () => {
    const employee= new Employee('joe','1','123@123.com');

    expect(employee.name).toBe('joe');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('123@123.com');
    expect(employee.getName()).toEqual(expect.stringContaining('joe'));
    expect(employee.getId()).toEqual(expect.stringContaining('1'));
    expect(employee.getEmail()).toEqual(expect.stringContaining('123@123.com'));
    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
    console.log(employee);
});

