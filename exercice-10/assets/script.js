// Demander à l'utilisateur l'ensemble des notes

array = []
var failure = 0
do {
var marks = Number(window.prompt("Veuillez saisir une note"))
if (marks < 10 && marks !='') {
   failure += 1 
}
array.push(marks)
console.log(array);
} while (marks != '')

// Calcul somme

var sum = 0
for (i = 0; i < array.length; i++) {
    sum += array[i]
}
console.log(`La somme totale est de ${sum}`)

// Calcul moyenne

var moyenne = sum / (array.length - 1)
console.log(`Votre moyenne est de ${moyenne}`)

if (moyenne >= 10) {
    console.log(`Bravo ! Vous êtes admis(e) en classe supérieure avec une moyenne de : ${moyenne}"`)
}
else console.log(`Malheureusement, vous devez reprendre votre année.`)

console.log(`Vous avez ${failure} matière(s) à rattraper`)