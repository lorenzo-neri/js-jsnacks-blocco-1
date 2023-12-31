/* 

L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.

# tools:
- prompt
- const/let
- console.log()
- .length
- document.querySelector
- document.createElement
- .append

*/

//BONUS PERSONALE
//creare degli elementi nel DOM
const bodyEl = document.querySelector('body');

const shorterWordEl = document.createElement('div');
const longerWordEl = document.createElement('div');

bodyEl.append(shorterWordEl);
bodyEl.append(longerWordEl);

//aggiungere gli elementi al DOM

//stampare gli elmenti in pagina

//Chiedere la prima parola all'utente con prompt
const firstWord = prompt('Ciao, scrivi una prima parola');
console.log(firstWord);

//Chiedere la seconda parola all'utente con prompt
const secondWord = prompt('Ora scrivi una seconda parola');
console.log(secondWord);

//stampare prima la parola più corta
//stampare dopo la parola più lunga
if (firstWord.length > secondWord.length) {
    console.log(firstWord);
    console.log(secondWord);
    shorterWordEl.append(`La parola più corta da te scritta è la seconda parola: ${secondWord}`);
    longerWordEl.append(`La parola più lunga da te scritta è la prima parola: ${firstWord}`);
} else if (firstWord.length < secondWord.length) {
    console.log(secondWord);
    console.log(firstWord);
    shorterWordEl.append(`La parola più corta da te scritta è la prima parola: ${firstWord}`);
    longerWordEl.append(`La parola più lunga da te scritta è la seconda parola: ${secondWord}`);
} else {
    alert('LE PAROLE SONO DELLA STESSA LUNGHEZZA!!!');
    location.reload();
}

/* 

(con while) Snack 2:
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.

*/

let i = 0;

let listWord = [];

while (i < 2){

    const userWord = prompt('Scrivi una parola o più parole')
    console.log(userWord);

    listWord.push(userWord);
    console.log(listWord);

    i++
}

if (listWord[0].length > listWord[1].length){
    console.log(`la parola più corta è ${listWord[1]}`);
    console.log(`la parola più lunga è ${listWord[0]}`);

} else if (listWord[0].length < listWord[1].length) {
    console.log(`la parola più corta è ${listWord[0]}`);
    console.log(`la parola più lunga è ${listWord[1]}`);
}

//CORRETTO!!



