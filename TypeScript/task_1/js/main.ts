interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    years0fExperience?: number;
    location: string;
    [newAttribute: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
}

interface StudentConstructor {
    new(firstName: string, lastName: string): Student;
}

interface Student {
    workOnHomework(): string;
    displayName(): string;
}

const StudentClass: StudentConstructor = class StudentClass implements Student {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workOnHomework() {
        return 'Currently working';
    }
    displayName() {
        return this.firstName;
    }
}

export { printTeacher, StudentClass };
