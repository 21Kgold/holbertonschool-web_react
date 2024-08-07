export interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
};

export interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
};

export const Director = class Director implements DirectorInterface {
    workFromHome = (): string => "Working from home";
    getCoffeeBreak = (): string => "Getting a coffee break";
    workDirectorTasks = (): string => "Getting to director tasks";
};

export const Teacher = class Teacher implements TeacherInterface {
    workFromHome = (): string => "Cannot work from home";
    getCoffeeBreak = (): string => "Cannot have a break";
    workTeacherTasks = (): string => "Getting to work";
};

// Factory function based in salary
export const createEmployee = (salary: number | string): DirectorInterface | TeacherInterface => {
    if (typeof salary !== "number") salary = parseInt(salary);
    if (salary < 500 ) return new Teacher();
    else return new Director();
};

// Check if object is a Director object
export const isDirector = (employee: TeacherInterface | DirectorInterface): employee is DirectorInterface => {
    return (employee as DirectorInterface).workDirectorTasks !== undefined;
};

// Identify object class to return the correct class method
export const executeWork = (employee: TeacherInterface | DirectorInterface): string => {
    if (isDirector(employee)) return employee.workDirectorTasks();
    else return employee.workTeacherTasks();
};

// Restrict and evaluate argument values
export type Subjects = 'Math' | 'History';

export const teachClass = (todayClass: Subjects): string => {
    if (todayClass === 'Math') return 'Teaching Math';
    else if (todayClass === 'History') return 'Teaching History';
};

const employee1 = createEmployee(200);
const employee2 = createEmployee(600);
const employee3 = createEmployee("200");
const employee4 = createEmployee("600");

console.log(employee1);
console.log(employee2);
console.log(employee3);
console.log(employee4);

console.log(isDirector(employee1));
console.log(isDirector(employee2));
console.log(isDirector(employee3));
console.log(isDirector(employee4));

console.log(executeWork(employee1));
console.log(executeWork(employee2));
console.log(executeWork(employee3));
console.log(executeWork(employee4));

console.log(teachClass('Math'));
console.log(teachClass('History'));
