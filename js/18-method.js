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

/*
ARRAY
*/

/*
OBJECT
*/