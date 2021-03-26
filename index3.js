/*
    1. Utilisez la méthode .readFile du core module 'fs'
    pour lire le fichier "notes.txt", puis traitez le contenu
    pour calculer la moyenne des notes
    
    2. Utilisez la méthode .writeFile pour écrire la moyenne
    calculée dans un nouveau fichier que vous nommerez "moyenne.txt"
    
    N'oubliez pas la gestion des erreurs dans votre code
*/

const fs = require('fs').promises;

let filename = 'notes.txt';
let destination = 'moyenne.txt';

fs.readFile(filename, 'utf8', (err, data) => {
    if (err) throw err;

    // traitement ...
    const notes = processNotesFile(data);
    const moyenne = computeAvg(notes).toFixed(2);

    // écriture du fichier ...
    fs.writeFile(destination, `${moyenne}/20`, err => {
        if (err) throw err;

        console.log(`La moyenne ${moyenne}/20 a bien été écrite dans ${destination}`);

        // ...
    });
});

function processNotesFile(content) {
    return content.split('\n').map(n => n.split('/')[0]).map(Number);
}

function computeAvg(notesArr) {
    return notesArr.reduce((total, n) => total + n) / notesArr.length;
}




