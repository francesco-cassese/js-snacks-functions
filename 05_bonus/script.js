/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.

function getStatoGiornata(oraAttuale) {

    if (oraAttuale < 13) {         // Se oraAttuale è minore delle 13 restituisci -1 
        return -1
    }
    if (oraAttuale <= 17) {        // Se oraAttuale è minore delle 17 restituisci 0
        return 0
    }
    if (oraAttuale > 17) {         // Se oraAttuale è maggiore delle 17 restituisci 1
        return 1
    }
}

let buongiornoUtente = getStatoGiornata(18);

// Invoca la funzione qui e stampa il risultato in console

if (buongiornoUtente === -1) {
    console.log(`Buongiorno ${name}`);
} else if (buongiornoUtente === 0) {
    console.log(`Buonpomeriggio ${name}`);
} else if (buongiornoUtente === 1) {
    console.log(`Buonasera ${name}`);
}

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.