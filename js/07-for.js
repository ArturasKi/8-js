/*
LOOP: for, while, for-in, for-of, foreach...
*/
const pazymiai = [10, 2, 8, 4, 6];
let suma = 0;

for (let i = 0; i < pazymiai.length; i++) {
    const pazymys = pazymiai[i];
    suma += pazymys;

    console.log(`(${i}) pazymys ${pazymys} [${suma}]`);
}

console.log('Galutine suma:', suma);

const vidurkis = suma / pazymiai.length;
console.log('Vidurkis:', vidurkis);


console.log('--------------');

for (let i = -80; i < -60; i++) {
    console.log(i);
}





/*
const pazymiai = [10, 2, 8, 4, 6, 8];

const pazymiuKiekis = pazymiai.length;
let pazymiuSuma = 0;

let index = 0;
pazymiuSuma += pazymiai[index++];
pazymiuSuma += pazymiai[index++];
pazymiuSuma += pazymiai[index++];
pazymiuSuma += pazymiai[index++];
pazymiuSuma += pazymiai[index++];
pazymiuSuma += pazymiai[index++];

const vidurkis = pazymiuSuma / pazymiuKiekis;
console.log(vidurkis);
*/