const Manager= require('../lib/Manager');

test('created an Manager object', () => {
    const manager= new Manager('joe','1','123@123.com','11223344');

    expect(manager.name).toBe('joe');
    expect(manager.id).toBe('1');
    expect(manager.email).toBe('123@123.com');
    expect(manager.officeNumber).toBe('11223344');
    expect(manager.getName()).toEqual(expect.stringContaining('joe'));
    expect(manager.getId()).toEqual(expect.stringContaining('1'));
    expect(manager.getEmail()).toEqual(expect.stringContaining('123@123.com'));
    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
    console.log(manager);
});