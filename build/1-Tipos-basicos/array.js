"use strict";
var nomeDogs = [
    'Tuco',
    'Thell'
];
function exibeDogs(nomeDogs) {
    return "Os dogs s\u00E3o: " + nomeDogs.join(' , ');
}
console.log(exibeDogs(nomeDogs));
