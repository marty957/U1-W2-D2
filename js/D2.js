/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

const a = 5;
const b = 10;
const c = 22;
console.log("prima variabile", a, "seconda variabile", b, "terza variabile", c);

if (a > b) {
  console.log("questo è il numero maggiore", a);
} else if (b > c) {
  console.log("questo è il numero maggiore", b);
} else {
  console.log("questo è il numero maggiore", c);
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

if (b === 5) {
  console.log("B is equal");
} else {
  console.log("B is not equal");
}
/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

if (a % 5 === 0) {
  console.log("la variabile A è divisibile per 5");
}
if (b % 55 === 0) {
  console.log("la variabile B è divisibile per 5");
}
if (c % 5 != 0) {
  console.log("la variabile C non e divisibile per 5");
}
/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

const d = 4;
const e = 8;
const f = 3;
const g = 5;
const h = 0;

if (d === 8 || e === 8 || f === 8 || g === 8 || h === 8) {
  console.log("tra le variabili D,E,F,G,E almeno una è uguale a 8");
}

/*if (d + e === 8) {
  console.log("la somma tra D e E da 8");
} else if (d - e === 8) {
  console.log("la sottrazione tra D e E DA 8");*/
if (!(d + e === 8) && !(d - e === 8)) {
  console.log("la variabile D", d, "la variabile E", e, "nè la loro somma nè la sottrazione può dare 8");
}
if (e === 8) {
  console.log("la variabile E è", e);
}

if (e + h === 8 && e - h === 0) {
  console.log("le variabili E ed H sommate o sottratte danno 8");
}
/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

const totalShoppingCart = 55;

if (totalShoppingCart > 50) {
  console.log("spedizione gratuita, totale carello:", totalShoppingCart);
} else console.log("il carello è inferiore a 50 per cui le spese di spedizione ammontano a 10 euro", totalShoppingCart + 10);

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
if (totalShoppingCart - (totalShoppingCart * 20) / 100 > 50) {
  console.log("spedizione gratuita, totale carello:", totalShoppingCart);
} else {
  console.log("il carello è inferiore a 50 euro per cui le spese di spedizione ammontano a 10 euro. Totale dovuto:", totalShoppingCart + 10);
}
/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
const value1 = 16;
const value2 = 98;
const value3 = 53;

if (value1 > value2 && value1 > value3 && value2 > value3) {
  console.log("l'ordine giusto è il seguente", value1, value2, value3);
} else if (value2 > value1 && value2 > value3 && value1 > value3) {
  console.log("l'ordine giusto è il seguente", value2, value1, value3);
} else if (value2 > value1 && value2 > value3 && value1 < value3) {
  console.log("l'ordine giusto è il seguente", value2, value3, value1);
} else {
  console.log("l'ordine giusto è il seguente", value3, value1, value2);
}
const value = [32, 0.8, 65, 95];
value.sort();
console.log("ordine dell'array value", value);

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

console.log(typeof value);
console.log(typeof value1);

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
if (value1 % 2 === 0) {
  console.log("il numero contenuto nella varaibile 1 è pari", value1);
} else {
  console.log("la variabile 1 è dispari", value1);
}
if (value2 % 2 === 0) {
  console.log("il numero contenuto nella varaibile 2 è pari", value2);
} else {
  console.log("la variabile 2 è dispari", value2);
}
if (value3 % 2 === 0) {
  console.log("il numero contenuto nella varaibile 3 è pari", value3);
} else {
  console.log("la variabile 3 è dispari", value3);
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.*/
let val = 7;
if (val < 10) {
  console.log("Meno di 10");
} else if (val < 5) {
  console.log("Meno di 5");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};
console.log(me);

me.city = "toronto";
console.log(me.city);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
delete me.lastName;
console.log(me);
/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/*delete me.skills.css;
console.log(me);
console.log(me.skills); non funziona*/

/*me.skills.pop();
console.log(me.skills); non funziona*/

const meCopia = structuredClone(me);
meCopia.skills = ["javascript", "html"];
console.log(meCopia);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
const myVar = [];
console.log("visualizzazione myVar vuoto"), myVar;

myVar.unshift(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
/*myVar.push(0); aggiunge all'ultimo elemento*/
console.log("myVar riempito", myVar);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

myVar.splice(9, 1, 100);
console.log("sostituzione ultimo valore", myVar);
