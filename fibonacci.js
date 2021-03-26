/**
 * Renvoie la valeur de la suite de Fibonacci à l'indice "n"
 * @param {Number} n Valeur de la suite de Fibonacci à atteindre
 */
function fibo(n) {
    if (n < 1) return 0
    if (n <= 2) return 1

    return fibo(n-1) + fibo(n-2)
}

/** Exporter ici la fonction 'fibo' */

module.exports = { fibo };