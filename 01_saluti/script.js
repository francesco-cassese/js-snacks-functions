'use strict';

/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.

// --- Funzione classica ---

function salutaUtente(nome) {
    return `Ciao ${nome}`;
}

// --- Arrow Function --- NOME DIVERSO PER LASCIARLI ENTRAMBI "ATTIVI" EVITANDO CHE IN CONSOLE ESCA L'ERRORE!

const benvenutoUtente = nome => `Ciao ${nome}`

// Invoca la funzione qui e stampa il risultato in console

console.log(salutaUtente(userName));
console.log(benvenutoUtente(userName));

//Risultato atteso se si passa 'Mario': // ciao Mario
