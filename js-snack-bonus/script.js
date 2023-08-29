/* 

Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.

# tools
- array
- prompt
- const/let
- %
- console.log

*/

//creare array vuoto
const numberList = [];

//chiedere per 6 volte un numero con prompt
for (let i = 0; i < 6; i++) {
    const userNumber = Number(prompt(`Inserisci un numero`))
    console.log(userNumber);

    //qualsiasi numero dispari inserire nell'array altrimenti adios numero pari!
    if (userNumber % 2 !== 0) {
        numberList.push(userNumber);
    } 
}
//stampare in console
console.log(`Ecco i numeri dispari che hai digitato: ${numberList}`);