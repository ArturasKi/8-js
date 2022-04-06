/*
OBJECT
*/

/*
Mokiniai:
    - varda, 
    - pazymius, 
    - kontaktini asmeni 
        - varda, 
        - telefono nr
*/

const students = [
    {
        name: 'Petras',
        marks: [10, 6],
        contact: {
            name: 'P.P.',
            phone: 111,
            address: {
                city: 'Vilnius',
                street: 'Street'
            },
        },
    },
    {
        name: 'Maryte',
        marks: [10, 7],
        contact: {
            name: 'M.M.',
            phone: 222,
            address: {
                city: 'Vilnius',
                street: 'Street'
            },
        },
    },
    {
        name: 'Jonas',
        marks: [10, 8],
        contact: {
            name: 'J.J.',
            phone: 333,
            address: {
                city: 'Vilnius',
                street: 'Street'
            },
        },
    },
    {
        name: 'Ona',
        marks: [10, 9],
        contact: {
            name: 'O.O.',
            phone: 444,
            address: {
                city: 'Vilnius',
                street: 'Street'
            },
        },
    },
];

const studentIndex = 1;
const student = students[studentIndex];
const name = student.name;
const marks = student.marks;
const contact = student.contact;
const contactName = contact.name;
const contactPhone = contact.phone;
const contactCity = student.contact.address.city;

console.log(name);
console.log(marks);
console.log(contactName);
console.log(contactPhone);
console.log(contactCity);

















/*
const students = [
    ['Petras', [10, 6], ['m.m.', 111]],
    ['Maryte', [10, 7], ['m.m.', 222]],
    ['Jonas', [10, 8, 9], ['j.j.', 333]],
    ['Ona', [10, 9], ['o.o.', 444]],
];

const index = 2;
const student = students[index];
const studentName = student[0];
const studentMarks = student[1];
const studentContactPerson = student[2];
const contactName = studentContactPerson[0];
const contactPhone = studentContactPerson[1];

console.log('Student name:', studentName);
console.log('Marks:', studentMarks);
console.log('Contact name:', contactName);
console.log('Contact phone:', contactPhone);
*/
