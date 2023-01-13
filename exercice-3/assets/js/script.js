// let int = window.prompt("Saisir un nombre");
// let int2 = window.prompt("Saisir un nombre");
// prod = int * int2


let int = Number(window.prompt("Saisir un nombre")), int2 = Number(window.prompt("Saisir un 2e nombre"));

while ((int * int2) < 240) {
    console.log(int * int2);
    int2 = int2 * int
} 