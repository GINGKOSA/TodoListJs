/**
 * La constante __filename représente le chemin absolu du fichier principal
 * Lancez une première fois le programme pour voir le résultat !
 */
console.log(`Chemin absolu du fichier : "${__filename}"\n`)


/**
 * En utilisant le core-module "path" (n'oubliez pas de l'importer),
 * complétez les phrases suivantes :
 */

const path = require('path'); //importation du paths

console.log(`- Nom du fichier seul    : ${path.basename(__filename)}`)
console.log(`kfrppoerzfope : ${path.extname(`${__filename}`)}`)
console.log(`vgrttoptrkgo : ${path.dirname(`${__filename}`)}`)



