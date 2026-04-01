/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

function contatoreVocali(parola) {
    let contatore = 0                                     // dichiaro variabile contatore e la setto a 0
    const listaVocali = ["a", "e", "i", "o", "u"];        // creo una lista contenente le vocali
    for (let i = 0; i < parola.length; i++) {             // inizio il primo ciclo sulla parola passata
        const letteraCorrente = parola[i].toLowerCase();  // assegno la variabile ad ogni interazione e mi assicuro che la parola passata si minuscola 
        for (let j = 0; j < listaVocali.length; j++) {    // contemporaneamente inizio un secondo ciclo sulla lista delle vocali 
            if (letteraCorrente === listaVocali[j]) {     // se la lettera corrente è uguale ad una delle vocali
                contatore++                               // aumento il contatore
            }
        }
    }
    return contatore                                      // mi restituisce il contatore 
}


// Invoca la funzione qui e stampa il risultato in console

const vocaliTrovate = console.log(contatoreVocali(word));


//Risultato atteso se si passa 'javascript': 3 (a, a, i)