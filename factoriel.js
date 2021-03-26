/**
 * Fonction calculant le factoriel de "n"
 * @param {Number} n Valeur du factoriel
 */

 var f = [];
function facto(n) {
    /** Votre code ici */
    if (n == 0 || n == 1)
    return 1;
  if (f[n] > 0)
    return f[n];
  return f[n] = facto(n-1) * n;
}

/** Exporter ici la fonction 'facto' */

module.exports = { facto }