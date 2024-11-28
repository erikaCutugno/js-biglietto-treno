// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
const userKm = Number(prompt("Inserisci il numero di chilometri che vuoi percorrere"));
const userAge = Number(prompt("Inserisci la tua età"));
console.log(`L'utente vuole percorre ${userKm} chilometri ed ha ${userAge} anni`)
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//- il prezzo del biglietto è definito in base ai km (0.21 € al km)
const price = 0.21 * userKm;
console.log(`Il prezzo base del biglietto è ${price.toFixed(2)} €`)

let priceYoungOrOld;
// controllo che userKm sia un numero
const checknumber = userKm / userKm;
//- va applicato uno sconto del 20% per i minorenni
//- va applicato uno sconto del 40% per gli over 65.

if (userAge < 18 && checknumber==1){
    priceYoungOrOld = price - (price * 0.2);
    alert(`Viene applicato uno sconto del 20% quindi il prezzo del biglietto è ${priceYoungOrOld.toFixed(2)} €`)
} else if (userAge > 65 && checknumber==1){
    priceYoungOrOld = price - (price * 0.4);
    alert(`Viene applicato uno sconto del 40% quindi il prezzo del biglietto è ${priceYoungOrOld.toFixed(2)} €`)
} else if (userAge >= 18 && userAge <=65 && checknumber==1){
    alert(`Il prezzo del biglietto è ${price.toFixed(2)} €`)
} else if (checknumber !== 1){
    alert("ATTENZIONE i chilometri inseriti devono essere solo numeri maggiori di 0")
} else {
    alert("ATTENZIONE gli anni inseriti devono essere solo numeri");
}

//- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.