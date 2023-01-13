for (i = 0; i < 101; i++) {
    if (i % 2 === 0) {
        console.log(i,'Ce chiffre est pair')
    }
    else {
        console.log(i,'Ce chiffre est impair')
    }
    var diviseur = 0;
    for (j = 0; j < 101; j++) {
        if (i % j == 0) {
            diviseur += 1
        }
    }
    if (diviseur == 2) {
        console.log(`Ce chiffre est ${i} mais aussi premier`)
        }
}

// Corretion 

// let primes = [2];

// for (let i = 2; i < 101; i++) {
//     for (let j = 0; j < i / 2; j++) {
//         if ((i % j !== 0) && !primes.includes(i)) {
//             primes.push(i);
//         }
//     }
// }

// console.log(primes);