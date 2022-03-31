/*
Visi mokiniai turi TIK 4 pazymius ir reikia suskaiciuoti vidurki.
*/

/*
const petras = [10, 4, 8, 2];
const maryte = [5, 9, 7, 6];
const jonas = [7, 7, 8, 2];
const ona = [1, 5, 7, 10];

let petroSuma = 0;
petroSuma += petras[0];
petroSuma += petras[1];
petroSuma += petras[2];
petroSuma += petras[3];
const petroKiekis = petras.length;
const petroVidurkis = petroSuma / petroKiekis;
console.log('Petras: ', petroVidurkis);

let marytesSuma = 0;
marytesSuma += maryte[0];
marytesSuma += maryte[1];
marytesSuma += maryte[2];
marytesSuma += maryte[3];
const marytesKiekis = maryte.length;
const marytesVidurkis = marytesSuma / marytesKiekis;
console.log('Maryte: ', marytesVidurkis);

let jonoSuma = 0;
jonoSuma += jonas[0];
jonoSuma += jonas[1];
jonoSuma += jonas[2];
jonoSuma += jonas[3];
const jonoKiekis = jonas.length;
const jonoVidurkis = jonoSuma / jonoKiekis;
console.log('Jonas: ', jonoVidurkis);

let onosSuma = 0;
onosSuma += ona[0];
onosSuma += ona[1];
onosSuma += ona[2];
onosSuma += ona[3];
const onosKiekis = ona.length;
const onosVidurkis = onosSuma / onosKiekis;
console.log('Ona: ', onosVidurkis);
*/
const petras = [10, 4, 8, 2];
const maryte = [5, 9, 7, 6];
const jonas = [7, 7, 8, 2];
const ona = [1, 5, 7, 10];

function vidurkis(pazymiuSarasas) {
    let pazymiuSuma = 0;
    pazymiuSuma += pazymiuSarasas[0];
    pazymiuSuma += pazymiuSarasas[1];
    pazymiuSuma += pazymiuSarasas[2];
    pazymiuSuma += pazymiuSarasas[3];
    return pazymiuSuma / pazymiuSarasas.length;
}

const petroVidurkis = vidurkis(petras);
console.log('Petras:', petroVidurkis);

const marytesVidurkis = vidurkis(maryte);
console.log('Maryte:', marytesVidurkis);

const jonoVidurkis = vidurkis(jonas);
console.log('Jonas:', jonoVidurkis);

const onosVidurkis = vidurkis(ona);
console.log('Ona:', onosVidurkis);

/*
Funkcija gauna varda ir turi grazinti sakini:
"Vardo pirma raide yra [V] ir vardas sudarytas is 5 raidziu."
*/

function vardoAnalize (name) {
    return `Vardo ${name} pirma raide yra ${name[0]} ir vardas sudarytas is ${name.length} raidziu.`;
}

const petroVardas = vardoAnalize('Petras');
console.log(petroVardas);

const marytesVardas = vardoAnalize('Maryte');
console.log(marytesVardas);

const aloyzoVardas = vardoAnalize('Aloyzas');
console.log(aloyzoVardas);
