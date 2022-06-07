const Engineer= require('../lib/Engineer');

test('created an Engineer object', () => {
    const engineer= new Engineer('joe','1','123@123.com','111@111.com');

    expect(engineer.name).toBe('joe');
    expect(engineer.id).toBe('1');
    expect(engineer.email).toBe('123@123.com');
    expect(engineer.github).toBe('111@111.com');
    expect(engineer.getName()).toEqual(expect.stringContaining('joe'));
    expect(engineer.getId()).toEqual(expect.stringContaining('1'));
    expect(engineer.getEmail()).toEqual(expect.stringContaining('123@123.com'));
    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
    expect(engineer.getGithub()).toEqual(expect.stringContaining('111@111.com'));
    console.log(engineer);
});