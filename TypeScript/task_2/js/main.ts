export interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

export interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

export const Director = class Director implements DirectorInterface {
    constructor() {}

    workFromHome() {
        return 'Working from home';
    }

    getCoffeeBreak() {
        return 'Getting a coffee break';
    }

    workDirectorTasks() {
        return 'Getting to director tasks';
    }
}

export const Teacher = class Teacher implements TeacherInterface {

    workFromHome() {
        return 'Cannot work from home';
    }

    getCoffeeBreak() {
        return 'Cannot have a break';
    }

    workTeacherTasks() {
        return 'Getting to work';
    }
}

export const createEmployee = (salary: number | string): TeacherInterface | DirectorInterface => {
    if (typeof(salary) === 'number' && salary < 500) {
        return new Teacher();
    }
    return new Director();
}

export const isDirector = (employee: TeacherInterface | DirectorInterface): employee is DirectorInterface => {
    return (employee as DirectorInterface).workDirectorTasks !== undefined;
}

export const executeWork = (employee: TeacherInterface | DirectorInterface) => {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    } else {
        return employee.workTeacherTasks();
    }
}

export type Subjects = 'Math' | 'History';

const teachClass = (todayClass: Subjects): string => {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    } else if (todayClass === 'History') {
        return 'Teaching History';
    }
}



console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));
const a = createEmployee(501);
console.log(typeof(a));
console.log(a.getCoffeeBreak());
console.log(a.workFromHome());
const b = createEmployee(400);
console.log(typeof(b));
console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));
console.log(teachClass('Math'));
console.log(teachClass('History'));
