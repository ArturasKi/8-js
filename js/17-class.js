/*
CLASS: savybiu ir metodu junginys/grupe.
Savybes - kintamieji (info);
Metodai - funkcionalumas

Klases - receptura;
Objektas - pagal receptura pagamintas konkretus/apciuopiamas dalykas
*/

class Bankomatas {
    constructor(street, color) {
        this.gatve = street;
        this.spalva = color;
        this.turnedOn = false;
        this.money = 0;
    }
    switchOn() {
        this.turnedOn = true;
        console.log(`${this.gatve}: bankomatas ijungtas.`);
    }

    switchOff() {
        this.turnedOn = false;
        console.log(`${this.gatve}: bankomatas isjungtas.`);
    }

    cashIn(money) {
        // jei neijungtas - ERROR
        // jei nenormalus skaicius - ERROR
        // iskaiciuojam pinigus

        if (!this.turnedOn) {
            console.log('Panasu, jog nera elektros...');
            return;
        }
        if (typeof money !== 'number' || !isFinite(money)) {
            console.log('Nepanasu i tikra piniga');
            return;
        } 
        if (money <= 0) {
            console.log('Minusiniu pinigu nebuna');
            return
        }

        this.money +=money;
        console.log(`${this.gatve}: inesta ${money} pinigu.`);
    }

    cashOut(money) {
        if (!this.turnedOn) {
            console.log('Panasu, jog nera elektros...');
            return;
        }
        if (typeof money !== 'number' || !isFinite(money)) {
            console.log('Nepanasu i tikra piniga');
            return;
        } 
        if (money <= 0) {
            console.log('Minusiniu pinigu nebuna');
            return
        }
        if (this.money < money) {
            console.log('Bankomate siuo metu nera tokios sumos');
            return;
        }
        
        this.money -= money;
        console.log(`${this.gatve}: isgryninta ${money} pinigu.`);
    }
    status () {
        console.log(`${this.gatve}: siuo metu pinigu likutis yra ${this.money}`);
    }
}

const bankomatas1 = new Bankomatas('Didzioji g. 2', 'red');
const bankomatas2 = new Bankomatas('Mazoji g. 3', 'blue');

bankomatas1.switchOn();
bankomatas2.switchOn();

bankomatas1.cashIn(true);
bankomatas1.cashIn(5);
bankomatas2.cashIn(555);
bankomatas1.cashIn(5);
bankomatas2.cashIn(5);

bankomatas1.cashOut(9);
bankomatas2.cashOut(9);
bankomatas1.cashOut(9);
bankomatas2.cashOut(9);

bankomatas1.status();
bankomatas2.status();






/* PVZ
function average(list) {
    let sum = 0;
    for (const item of list) {
        sum += item;
    }
    return sum / list.length;
}

const rez1 = average([10, 2, 8, 4]);
console.log(rez1);

const rez2 = average([10, 2, 8, 4, 10, 10, 9]);
console.log(rez2);
*/