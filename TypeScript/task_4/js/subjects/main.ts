/// <reference path="./Teacher.ts" />
/// <reference path="./Subject.ts" />
/// <reference path="./Cpp.ts" />

namespace Main {
    export function run() {
        const teacher: Subjects.Teacher = {
            firstName: "John",
            lastName: "Doe",
            experienceTeachingC: 2,
        };

        const subject = new Subjects.Subject();
        subject.setTeacher = teacher;

        console.log("Teacher:", teacher);
        console.log("Subject:", subject);
    }
}
