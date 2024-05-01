let sonlar = ['non', 'asal', 'banan', 'olma', 'aziza', 'Gul', 'mashina'];
let nbor = [];
let nyoq = [];

for (let i = 0; i < 7; i++) {
    if (sonlar[i].indexOf('n') !== -1) {
        nbor.push(sonlar[i]);
    } else {
        nyoq.push(sonlar[i]);
    }
}

console.log(nbor);
console.log(nyoq);