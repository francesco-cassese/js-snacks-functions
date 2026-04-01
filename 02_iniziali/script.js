'use strict';

/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

function estraiIniziali(nomi) {
    let iniziali = []; // Creo array vuoto

    for (let i = 0; i < nomi.length; i++) { // Inizio il ciclo
        let nomeCorrente = nomi[i];         // inizializzo variabile e faccio un assegnamento per ogni iterazione del ciclo
        if (nomeCorrente.length > 0) {      // Mi assicuro che l'array non sia vuoto
            iniziali.push(nomeCorrente[0])  // Eseguo il push solo delle iniziali 
        }
    }

    return iniziali;                        //mi restituisce l'array "iniziali"
}


// Invoca la funzione qui e stampa il risultato in console

const listaIniziali = console.log(estraiIniziali(names))

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]