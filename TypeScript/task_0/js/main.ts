interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
};

const student1: Student = {
    firstName: 'John',
    lastName: 'Lenon',
    age: 10,
    location: 'Liverpool'
};

const student2: Student = {
    firstName: 'Paul',
    lastName: 'McCarney',
    age: 8,
    location: 'Liverpool'
};

const studentsList: Student[] = [student1, student2];

function renderTable(studentsList: Student[]): void {
    const table: HTMLTableElement = document.createElement('table');
    const headerRow: HTMLTableRowElement = table.insertRow(0);
    headerRow.insertCell(0).textContent = 'firstname';
    headerRow.insertCell(1).textContent = 'location';

    for (let i = 0; i < studentsList.length; i++) {
        const rowToInsert: HTMLTableRowElement = table.insertRow(i + 1);
        rowToInsert.insertCell(0).textContent = studentsList[i].firstName;
        rowToInsert.insertCell(1).textContent = studentsList[i].location;
    }
    document.body.appendChild(table);
}

renderTable(studentsList);