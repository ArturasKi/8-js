function letters(text, step) {
    if (typeof text !== 'string') {
        return 'ERROR: tekstas yra netinkamo tipo.';
    }
    if (text === '') {
        return 'ERROR: tekstas negali buti tuscias.';
    }

    if (typeof step !== 'number') {
        return 'ERROR: zingsnis yra netinkamo tipo.';
    }
    if (!isFinite(step)) {
        return 'ERROR: zingsnis turi buti tikras skaicius.'
    }
    if (step % 1 !== 0) {
        return 'ERROR: zingsnis turi buti sveikasis skaicius.'
    }
    if (step === 0) {
        return 'ERROR: zingsnis negali buti lygus nuliui.'
    }
    if (step > text.length) {
        return 'ERROR: zingsnis negali buti didesnis uz teksto ilgi.'
    }
    
    let raides = '';

    if (step > 0) {
        for (i = step - 1; i < text.length; i += step) {
            raides += text[i];
         }
    } else {
        for (let i = text.length + step; i >= 0; i += step) {
            raides += text[i];
        }
    }

    return raides;
}

// console.log(letters(1561, 2), '-->', 'ERROR');
// console.log(letters('labas', 'iki'), '-->', 'ERROR');
// console.log(letters('labas', NaN), '-->', 'ERROR');
// console.log(letters('labas', -Infinity), '-->', 'ERROR');
// console.log(letters('labas', Infinity), '-->', 'ERROR');
// console.log(letters('labas', 1.555555), '-->', 'ERROR');

// console.log(letters('abc', 0), '-->', 'ERROR');
// console.log(letters('abc', 4), '-->', 'ERROR');
// console.log(letters('', 4), '-->', 'ERROR');

console.log(letters('abcdefg', 2), '-->', 'bdf');
console.log(letters('abcdefghijkl', 3), '-->', 'cfil');
console.log(letters('abcdefghijkl', 4), '-->', 'dhl');

console.log(letters('abcdefg', -2), '-->', 'fdb');
console.log(letters('abcdefghijkl', -3), '-->', 'jgda');
console.log(letters('abcdefghijkl', -4), '-->', 'iea');

