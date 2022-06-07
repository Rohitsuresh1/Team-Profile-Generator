const Intern= require('../lib/Intern');

test('created an Intern object', () => {
    const intern= new Intern('joe','1','123@123.com','school');

    expect(intern.name).toBe('joe');
    expect(intern.id).toBe('1');
    expect(intern.email).toBe('123@123.com');
    expect(intern.school).toBe('school');
    expect(intern.getName()).toEqual(expect.stringContaining('joe'));
    expect(intern.getId()).toEqual(expect.stringContaining('1'));
    expect(intern.getEmail()).toEqual(expect.stringContaining('123@123.com'));
    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
    expect(intern.getSchool()).toEqual(expect.stringContaining('school'));
    console.log(intern);
});