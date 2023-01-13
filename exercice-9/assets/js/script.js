
// console.log(output)

// let row = window.prompt('Veuillez saisir le nombre de lignes')
// let col = window.prompt('Veuillez saisir le nombre de colonnes')
// symb = '#'

// for (i = 0; i < row; i++) {
//     symb += '#';
// }
// console.log(symb)

let output = ''
for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        if ((i+j) % 2 === 0) {
            output += '#'
        }
        else {
            output += ' ';
        }
    }
    output += '\n';
}
console.log(output);