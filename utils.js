
export function sumFunc(number1, number2) {
    console.log(number1 + number2)
}

sumFunc(5, 5)

 function numeConcatinat(lastName, firstName) {
    return lastName + " " + firstName;
}

const numeLastFirst = numeConcatinat("Mariana", "Furtuna");
console.log(numeLastFirst);


 function argumenteInArray() {
    return Array.from(arguments);
}
const primulrezultat = argumenteInArray(2, 'trei', true)
console.log(primulrezultat);

const alDoileaRezultat = argumenteInArray(4, 5, 'noua', false);
console.log(alDoileaRezultat);