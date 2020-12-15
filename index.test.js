const { Employee, Engineer, Manager, Intern } = require('./index');

let Bob = new Employee('Bob', 5, 'bob@bob.com');

test('Test that Bob.getRole is a defined function for the class', () => {
    expect(Bob.getRole).toBeDefined();
});

let Charlie = new Manager('Charlie', 7, 'charlie@email.com', 77);

test('Test that Charlie.getRole is a defined function for the class', () => {
    expect(Charlie.getRole).toBeDefined();
});

test('Test that Charlie is an instance of the class Manager.', () => {
    expect(Charlie).toBeInstanceOf(Manager);
});


let David = new Engineer('David', 10, 'david@email.com', 'davidgithub');

test('Test that David is an instance of the class Engineer.', () => {
    expect(David).toBeInstanceOf(Engineer);
});

let Eric = new Intern('Eric', 11, 'eric@email.com', 'MIT');

test('Test that Eric is an instance of the class Intern.', () => {
    expect(Eric).toBeInstanceOf(Intern);
});