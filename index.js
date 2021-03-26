const os = require('os');
const opsy = os.type();
const cores = os.cpus();
const arch = os.arch();

console.log(`Mon système d'exploitation est ${opsy} et dispose de ${cores.length} cœurs, dont l'architecture est basée sur ${arch}.`);