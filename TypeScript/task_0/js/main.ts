interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Alain',
    lastName: 'Deloin',
    age: 42,
    location: 'Nowhere'
};

const student2: Student = {
    firstName: 'Carole',
    lastName: 'Parabole',
    age: 24,
    location: 'Somewhere'
};

const studentsList: Student []= [student1,student2];

console.log(studentsList);
