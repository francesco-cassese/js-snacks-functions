/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

function filtraNomi(nomi, lettera) {
    let nomiFiltrati = [];                   // Creo lista vuota
    for (let i = 0; i < nomi.length; i++) {  // Inizio il ciclo 
        let nomeCorrente = nomi[i];          // inizializzo e assegno la variabile ad ogni interazione 
        if (nomeCorrente[0] === lettera) {   // Se la prima lettera del nome è uguale alla lettera che gli abbiamo passato
            nomiFiltrati.push(nomeCorrente); // Push del nome corrente in nomi filtrati
        }
    }
    return nomiFiltrati                      // Restituisce l'array nomi filtrati 
}

// --- Array function ---

const nameFilter = (nomi, lettera) => {
    let nomiFiltrati = [];
    for (let i = 0; i < nomi.length; i++) {
        let nomeCorrente = nomi[i];
        if (nomeCorrente[0] === lettera) {
            nomiFiltrati.push(nomeCorrente);
        }
    }
    return nomiFiltrati
}

// Invoca la funzione qui e stampa il risultato in console

const listaNomiFiltrati = filtraNomi(names, `A`);
const nameFilterList = nameFilter(names, `A`);

console.log(nameFilterList);
console.log(listaNomiFiltrati);

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]