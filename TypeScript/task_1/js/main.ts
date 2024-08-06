export interface Teacher {
    readonly firstName: string; // - can only be set during initialization of an object of this interface
    readonly lastName: string; // - can only be set during initialization of an object of this interface
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;  // optional null or number
    location: string;
    [nameAttribute: string]: any;  // optional string attribute(s) with any type values
}

export interface Directors extends Teacher {
    numberOfReports: number;
}

export interface PrintTeacherFunction {
    (firstName: string, lastName: string): string;
}

export interface Student {
    workOnHomework(): string;
    displayName(): string;
}

export interface StudentInstance {
    new (firstName: string, lastName: string): Student;
}

export const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
    return firstName[0] + '. ' + lastName;
}

export class StudentClass implements Student {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
}

const teacher1: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Lenon',
    yearsOfExperience: 33,
    location: 'Liverpool, England',
    contract: false,
    subject: 'guitar',
};

const teacher2: Teacher = {
    firstName: 'Paul',
    fullTimeEmployee: true,
    lastName: 'McCartney',
    location: 'Liverpool, England',
    subject: 'piano',
};

const teacher3: Teacher = {
    firstName: 'George',
    fullTimeEmployee: true,
    lastName: 'Harrison',
    location: 'Liverpool, England',
};

const director1: Directors = {
    firstName: 'Ringo',
    fullTimeEmployee: true,
    lastName: 'Star',
    location: 'Liverpool, England',
    numberOfReports: 1,
};

console.log(teacher1);
console.log(teacher2);
console.log(teacher3);
console.log(director1);
const printed = printTeacher('John', 'Lennon');
console.log(printed);

const myStudent: Student = new StudentClass('Yoco', 'Ono');
const a = myStudent.workOnHomework();
const b = myStudent.displayName();
console.log(`${b}: ${a}`);
