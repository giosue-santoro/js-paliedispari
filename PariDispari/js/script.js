//funzione numero random del computer
function randomNumber(min, max){ 
    var npcNumber = Math.floor(Math.random() * (max + 1 - min) + min);
    return npcNumber;
  }
  
//(pari = true; dispari = false) check del risultato della partita
function check (risultato){
  var check
  if (risultato % 2 === 0) {
      check = true;
  } else {
      check = false;
  }
  return check;
  }
  
var npcNumber = randomNumber(1, 5);
var risultato = 0;
var scelta = prompt('Pari o dispari?');

//se utente ha inserito 'pari' o 'dispari' è ammesso
if (scelta === 'pari' || scelta === 'dispari'){
  var userNumber = parseInt(prompt('Scrivi un numero compreso tra 1 e 5'))

  //controllo se l'input utente è un numero
  if (!isNaN(userNumber)) {
      //se il numero è compreso tra 1 e 5
    if (userNumber >= 1 && userNumber <= 5) {

      //sommo i numeri dell'utente e del computer
      result = userNumber + npcNumber;

      //richiamo la funzione per controllare risultato
      var check = check(risultato);
  
      //notifiche all'utente del risultato
      if (check && scelta === 'pari') {
        alert('Vittoria!')
      }
      if (check && scelta === 'dispari'){
        alert('Sconfitta!')
      }
      if (!check && scelta === 'pari'){
        alert('Sconfitta!')
      }
      if (!check && scelta === 'dispari'){
        alert('Vittoria!')
      }
      //notifiche all'utente per soddisfamento requisiti di gioco
    } else {
      alert('Scegli un numero tra 1 e 5 se vuoi giocare')
    }
  } else {
    alert('Non hai scritto un numero')
  }
} else {
  alert('Devi selezionare pari o dispari')
}