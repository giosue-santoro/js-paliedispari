function checkPalindroma(str) {

    // Definisco la lunghezza della parola
    var length = string.length;

    // Ciclo la prima metà della parola
    for (let i = 0; i < length / 2; i++) {

        // Controllo se la prima metà e la seconda metà sono uguali
        if (string[i] !== string[length - 1 - i]) {
            return 'La parola non è palindroma';
        }
    }
    return 'La parola è palindroma';
}

// Utente inserisce valore
var string = prompt('Inserisci una parola: ');

// Richiamo della funzione
var value = checkPalindroma(string);

//scrivo Output su pagina all'utente
document.write(value);

