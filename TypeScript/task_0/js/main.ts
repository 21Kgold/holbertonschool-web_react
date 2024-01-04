interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'John',
    lastName: 'Lenon',
    age: 13,
    location: 'Liverpool, England',
};

const student2: Student = {
    firstName: 'Paul',
    lastName: 'McCartney',
    age: 11,
    location: 'Liverpool, England',
};

const studentsList: Student[] = [student1, student2];

function renderTable(studentsList: Student[]): void {
    const table: HTMLTableElement = document.createElement('table');
    const headerRow: HTMLTableRowElement = table.insertRow(0);
    headerRow.insertCell(0).textContent = 'firstname';
    headerRow.insertCell(1).textContent = 'location';

    for (let i: number = 0; i < studentsList.length; i++) {
        let rowToInsert: HTMLTableRowElement = table.insertRow(i + 1);
        rowToInsert.insertCell(0).textContent = studentsList[i].firstName;
        rowToInsert.insertCell(1).textContent = studentsList[i].location;
    }
    document.body.appendChild(table);
}

renderTable(studentsList);
