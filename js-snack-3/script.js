/* 

Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.

# tools
- prompt
- const/let
- console.log()
- document.querySelector
- document.createElement
- .append
*/

let total = 0

const bodyEl = document.querySelector('body');
const totalEl = document.createElement('div');

bodyEl.append(totalEl);

//chiedere per 10 volte di inserire un numero con prompt
for (let i = 0; i < 10; i++) {
    const userNumbers = Number(prompt(`${i + 1}) Inserisci un numero`));
    console.log(userNumbers);

    total += userNumbers
}
//stampare la somma di tutti i numeri inseriti
if (!isNaN(total)) {
    console.log(`La somma dei numeri digitati è ${total}`);
    totalEl.append(`La somma dei numeri digitati è ${total}`);
} else {
    alert('I CARATTERI DIGITATI NON SONO NUMERICI, SI PREGA DI RIPROVARE!');
    location.reload();
}