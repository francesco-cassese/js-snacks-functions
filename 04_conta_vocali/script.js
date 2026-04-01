/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

function contatoreVocali(parola) {
    let contatore = 0
    const listaVocali = ["a", "e", "i", "o", "u"];
    for (let i = 0; i < parola.length; i++) {
        const letteraCorrente = parola[i].toLowerCase();
        for (let j = 0; j < listaVocali.length; j++) {
            if (letteraCorrente === listaVocali[j]) {
                contatore++
            }
        }
    }
    return contatore
}


// Invoca la funzione qui e stampa il risultato in console

const vocaliTrovate = console.log(contatoreVocali(word));


//Risultato atteso se si passa 'javascript': 3 (a, a, i)