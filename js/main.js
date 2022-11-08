// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero
//da 1 a 5. Generiamo un numero random (sempre da 1 a 5) 
//per il computer (usando una funzione). Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari 
// (usando una funzione) Dichiariamo chi ha vinto.
// Se l’utente ha scritto “pari” e la somma è pari, 
// ha vinto l’utente Se l’utente ha scritto “pari” e la 
// somma è dispari, ha vinto il pc

//chiediamo di scrivere pari o dispari
let pariDispari = prompt ("scegli scrivendo pari o dispari");
// controlliamo che sia pari o dispari
if (pariDispari === "pari" || pariDispari === "dispari") {
    console.log(`la tua scelta é stata salvata ed é ${pariDispari} `);
} else if ( pariDispari !== "pari" || pariDispari !== "dispari") {
    
   const errorPariDispari = alert("l'inserimento é errato ricarica la pagina");
}




//chiediamo di inserire un numero

     
// // let utentePariDispari = parseInt (pariDispari);
// // console.log(pariDispari);
// // //chiediamo all'utente di inserire un numero da 1 a 5

// // const utente = prompt("inserisci un numero da min 1 a max 5");

// // let sbagliato = prompt("inserisci un numero valido");
// // //se il numero utente é maggiore di 5 ripeto il prompt

 




// console.log(utente);