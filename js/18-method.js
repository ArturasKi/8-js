/*
NUMBER
*/

console.log('Skaiciaus konvertavimas i string');
console.log((5215).toString());
console.log('' + 5215);

console.log('Desimtaines dalies "nukirpimas');
console.log((3.1415).toFixed(0));
console.log((3.1415).toFixed(1));
console.log((3.1415).toFixed(2));
console.log((3.1415).toFixed(3));
console.log(typeof (3.1415).toFixed(3));

console.log('Is teksto konvertavimas i skaiciu');
console.log(parseInt('17.53'));
console.log(typeof parseInt('17.53'));
console.log(parseFloat('17.53'));
console.log(typeof parseFloat('17.53'));
console.log(+'17.53');  // casting
console.log(parseFloat('labas'));
console.log(parseInt('labas'));
console.log(+'labas');
console.log('---------------');
console.log(parseFloat('labas17.53'));
console.log(parseInt('labas17.53'));
console.log(+'labas17.53');
console.log(+'17.53labas');
console.log(+'17.53labas17.53');
console.log('---------------');
console.log(parseFloat('17.53labas'));
console.log(parseInt('17.53labas'));
console.log(parseFloat('17.53labas17.53'));
console.log(parseInt('17.53labas17.53'));

console.log('---------------');
console.log('Math class');
console.log(Math.PI);
console.log(Math.E);
console.log(Math.SQRT2);
console.log(Math.abs(-7));
console.log('Apvalinimas');
console.log(Math.round(1.5));
console.log(Math.floor(1.5));   // apvalina iki mazesnio
console.log(Math.ceil(1.5));    // apvalina iki didesnio
console.log(Math.round(1.0001));
console.log(Math.floor(1.0001));
console.log(Math.ceil(1.0001)); 
console.log(Math.round(1.9999));
console.log(Math.floor(1.9999));
console.log(Math.ceil(1.9999)); 
console.log('Random.skaicius: [0..1]');
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log('min-max');
console.log(Math.min(1, 5, 7, -4, 3));
console.log(Math.max(1, 5, 7, -4, 3));
console.log(Math.trunc(1.55));  // palieka tik sveika skaiciaus daliW

/*
STRING
*/

console.log('-----------------')
console.log('-----------------')
console.log('-----------------')
console.log('-----------------')
console.log('-----------------')
const labas = 'Labas rytas, Lietuva!'
console.log(labas.length);    // simboliu skaicius
console.log(labas.includes('y')); // ar yra string'e
console.log(labas.includes('rytas'));
console.log(labas.includes('rytas '));
console.log(labas.includes('x'));
console.log('Kur stringe yra kitas sub-string');
console.log(labas.indexOf('L'));  // kelintas string'e
console.log(labas.indexOf('L', 1));
console.log(labas.indexOf('y'));
console.log(labas.indexOf('rytas'));
console.log(labas.indexOf('rytas '));
console.log(labas.indexOf('x'));
console.log('Sukarpyti string i dalis');
console.log(labas.split(' ')); // padaro array
console.log(labas.split('a'));
console.log(labas.split('!'));
console.log(labas.split('L'));
console.log('Kartojimas');
console.log('Steve'.repeat(3));
console.log('a'.repeat(20));
console.log(labas.charAt(2));
console.log(labas[2]);
console.log(labas.slice(6, 11));
console.log(labas.slice(labas.indexOf('r')));
console.log(labas.slice(labas.indexOf('r'), labas.indexOf('s', labas.indexOf)));

console.log('Teksto konvertavimas');
console.log(labas.toLocaleLowerCase());
console.log(labas.toLocaleUpperCase());
console.log('Teksto apvalymas nuo tarpu');
console.log('    Labas     rytas!    '.trimStart() + '.');
console.log('    Labas     rytas!    '.trimEnd() + '.');
console.log('    Labas     rytas!    '.trim() + '.');
console.log('Elon Musk'.trim() + '.');  // naudinga su username
console.log('            Elon Musk          '.trim() + '.');

console.log('Replace');
console.log(labas.replace('rytas', 'vakaras'));
console.log(labas.replace('a', '_'));
console.log(labas.replace(/a/gi, '_')); // regex
// console.log(labas.replaceAll('a', '_'));

/*
BOOLEAN
*/
console.log('-----------------')
console.log('-----------------')
console.log('-----------------')
console.log('-----------------')
console.log('-----------------')

console.log(true.toString());

/*
ARRAY
*/
console.log('-----------------')
console.log('-----------------')
console.log('-----------------')
console.log('-----------------')
console.log('-----------------')

const rytas = ['Labas', 'rytas', 'Lietuva'];
console.log(rytas.length);

console.log('Sujungti');
console.log(rytas.join(' '));
console.log(rytas.join(', '));
console.log(rytas.join('-=-'));

console.log('Paieska');
console.log(rytas.includes('a'));   // ar yra masyve narys 'a'.
console.log(rytas.includes('rytas'));
console.log(rytas.includes('Rytas'));
console.log(rytas.indexOf('a'));
console.log(rytas.indexOf('rytas'));
console.log(rytas.indexOf('Rytas'));
console.log(rytas.indexOf('Lietuva'));


console.log(rytas.push('PUSH')); // itraukia elementa i gala
console.log(rytas);
console.log(rytas.unshift('UNSHIFT')); // itraukia elementa i prieki
console.log(rytas);
console.log(rytas.pop()); // atima is galo
console.log(rytas);
console.log(rytas.shift()); // atima is priekio
console.log(rytas);

console.log('Extra')
console.log(rytas.reverse()); // is galo sudelioja masyva

// map, filter, sort, reduce, every, flat, forEach
const marks = [10, 2, 8, 4, 6];
console.log('map - individualiu reiksmiu konvertavimas'); // modifikuoja pradine informacija
console.log(marks.map(item => 2 * item));
console.log(marks.map(item => item % 3));
console.log(marks.map(item => item - 0.5));
console.log(marks.map(item => item - 0.5));

console.log('filter');  // filtruoja info, veikia kaip if
console.log(marks.filter(item => item));
console.log(marks.filter(item => item > 5));
console.log(marks.filter(item => item <= 5));
console.log(marks.filter(item => item > 5 && item % 3 === 0));

console.log('reduce - sutraukia visas reiksmes i viena reiksmes');
console.log(marks.reduce((total, item) => total + item, 0));
// 0 + 10 + 2 + 8 + 4 + 6
console.log(marks.reduce((total, item) => total + item));
// 10 + 2 + 8 + 4 + 6
console.log(marks.reduce((total, item) => total * item, 1));
// 1 * 10 * 2 * 8 * 4 * 6
console.log(marks.reduce((total, item) => total * item));
// 10 * 2 * 8 * 4 * 6
console.log(marks.reduce((total, item) => total - item, 0));
// 0 - 10 - 2 - 8 - 4 - 6
console.log(marks.reduce((total, item) => total - item));
// 10 - 2 - 8 - 4 - 6
console.log(marks.reduce((total, item) => total / item, 0));
// 0 / 10 / 2 ... = 0
console.log(marks.reduce((total, item) => total / item));
// 10 / 2 / 8 ...

console.log('sort');
const nums = [1, 2, 3, 10, 20, 30, 11, 21, 31];
console.log(marks.sort());
console.log(nums.sort());
console.log(nums.sort((a, b) => a - b));
console.log(nums.sort((a, b) => b - a));

const texts = ['asd', 'qw', 'asdas', 's'];
console.log(texts.sort());
console.log(texts.sort().reverse());
console.log(texts.sort((a, b) => a.length - b.length));
console.log(texts.sort((a, b) => b.length - a.length));

console.log('flat');
const matrix = [
    [1, 2, [7, 8]],
    [11, [9, 10], 22],
    [[11, 12], 3, 4],
];
console.log(matrix);
console.log(matrix.flat()); // iskleide masyvus i viena
console.log(matrix.flat(2));

console.log('... - spread operator');
console.log(Math.min(1, 5, 7, -4, 10));
console.log(Math.max(1, 5, 7, -4, 10));
const minMax = [1, 5, 7, -4, 10];
console.log(Math.min(...minMax));
console.log(Math.max(...minMax));

const m1 = [1, 2];
const m2 = [3, 4];
const m3 = [5, 6];
const m123 = [...m1, 123, ...m2, ...m3];
const m132 = [...m1, ...m3, 132, ...m2];
const m321 = [...m3, ...m2, ...m1, 321];
console.log(m123);
console.log(m132);
console.log(m321);

/*
OBJECT
*/
console.log('-----------------')
console.log('-----------------')
console.log('-----------------')
console.log('-----------------')
console.log('-----------------')

const person = {
    name: 'Petras',
    age: 99,
    isMarried: true,
}

console.log(person.name);
console.log(person.age);
console.log(person.isMarried);
console.log(person['name']);
console.log(person['age']);
console.log(person['isMarried']);

console.log('Automatinis visu objekto raktazodziu istraukimas');
const personKeys = Object.keys(person);
console.log(personKeys);

console.log('Automatinis visu objekto reiksmiu istraukimas');
for (const key of personKeys) {         
    console.log(key, ':', person[key]);
}
// kai "for" turi buti masyvas -> personKeys (raktazodziai), nedirba su objektu

console.log('FOR-IN');
for (const key in person) {
    console.log(key, ':', person[key]);
}
// kai reikia eiti per visus raktazodzius, vienintelis, kuris dirba su objetais

console.log('... - spread operator (naudojimas objekte');
console.log({ ...person });
console.log({ ...person, car: 'Tesla' });
console.log({ color: 'red', ...person, car: 'Tesla' });
console.log({ ...person, isMarried: false });
console.log({ isMarried: false, ...person });

const objA = {
    a: 'a',
    c: 'c',
    b: 'bbbbb',
}
const objB = {
    b: 'b',
    d: 'd',
}

const objAB = { ...objA, ...objB};
const objBA = { ...objB, ...objA };
console.log(objAB);
console.log(objBA);

/*
DESTRUCTURING - destrukturizavimas
*/
console.log('-----------------')
console.log('-----------------')
console.log('-----------------')
console.log('-----------------')
console.log('-----------------')

const skaiciai = [10, 2, 8, 6, 4, 9, 8, 5, 3];
const pirmasSkaicius = skaiciai[0];
const antrasSkaicius = skaiciai[1];
const treciasSkaicius = skaiciai[2];
console.log(pirmasSkaicius, antrasSkaicius, treciasSkaicius);

const [pirmas, antras, trecias, ...kita] = skaiciai;
console.log(pirmas, antras, trecias, kita);

const skaiciai2 = [9999];
const [xx1, ...xxx] = skaiciai2;
console.log(xx1, xxx);

const car = {
    name: 'Tesla',
    model: 'X',
    color: 'red',
}
const carName = car.name;
const carModel = car.model;
const carColor = car.color;
console.log(carName, carModel, carColor);

const { name, color, model } = car;
console.log(name, color, model);

console.log('-----------------')
console.log('-----------------')
console.log('-----------------')
console.log('-----------------')
console.log('-----------------')

const random = Math.floor(Math.random() * 10); // [0..9]
console.log(random);
console.log('-----------------')


function randomNumber(nuo, iki) {
    return randomNuoIki = nuo + Math.floor(Math.random() * (iki - nuo + 1));
}

for (let i = 0; i < 20; i++) {
    console.log(randomNumber(0, 10));
}
