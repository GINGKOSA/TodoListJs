/**
 * 1. Importez les modules "factoriel.js" et "fibonacci.js"
 * 2. Servez-vous des fonctions importées pour compléter les « ??? » 
 */

console.log(`\n=== FACTORIEL ==================\n`)

const maths = require('./factoriel.js');
const maths2 = require('./fibonacci.js');



/*
    Factoriel de n (ou aussi noté « n! ») correspond à la multiplication de\ntous les nombres entiers de 1 jusqu'à n.
    Par exemple: 5! = 1 × 2 × 3 × 4 × 5 = 120
    https://fr.wikipedia.org/wiki/Factorielle
*/


// --

console.log(`3!  = ${maths.facto(3)}`)
console.log(`7! = ${maths.facto(7)}`)
console.log(`10! = ${maths.facto(10)}`)

console.log(`\n=== FIBONACCI ==================\n`)

/*
    La suite de Fibonacci est une suite d'entiers dans laquelle chaque terme est la somme des deux termes qui le précèdent. Elle commence par les termes 0 et 1
    https://fr.wikipedia.org/wiki/Suite_de_Fibonacci
*/

console.log(`   F9  = ${maths2.fibo(9)}`)
console.log(`   F12 = ${maths2.fibo(12)}`)
console.log(`   F15 = ${maths2.fibo(15)}`)
