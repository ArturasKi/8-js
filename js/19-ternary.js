// Ternary - supaprastinta if / else salyga

const n1 = 4;
const n2 = 6;
let a = 0;

if (n1 > n2) {
    a = 'daugiau';
} else {
    a = 'maziau';
}

console.log(a);

const b = n1 > n2 ? 'daugiau' : 'maziau';
console.log(b);

const isMarried = false;
const al = `Al is ${isMarried ? '' : 'not '}married.`;
console.log(al);


const c = 50;
const d = 100 + (c >= 50 ? 69 : 13);
console.log(d);

const superTernary = 1 // true, todėl ima if -> ? 2
                        ? 2 // true, todėl ima if -> ? 3
                            ? 3 
                            : 4 
                        : 5;
const simpleTernary = 1 // true, todėl ima if -> ? 2
                        ? 2
                        : 3;
console.log(superTernary);
console.log(simpleTernary);


const superTernary2 = 0 // false, todėl ima else -> : 2
                        ? 1 
                        : 2 // true, todėl ima if -> ? 3
                            ? 3 
                            : 4;
console.log(superTernary2);

const krit = true;
const silta = false;

const kaVilktis = krit ? silta ? 'maike' : 'striuke' : silta ? '' : 'megztinis';
console.log(kaVilktis);

const suma = (a, b) => a + b;
const skirtumas = (a, b) => a - b;
const veiksmas = '+';
const m1 = 7;
const m2 = 5;

const rez = veiksmas === '+' ? suma(m1, m2) : skirtumas (m1, m2);

const func = veiksmas === '+' ? suma : skirtumas;
const rez2 = func(m1, m2);

console.log(rez);
console.log(rez2);
