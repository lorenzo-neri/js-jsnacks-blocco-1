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

const longerWordEl = document.createElement('div');

bodyEl.append(longerWordEl);

//aggiungere gli elementi al DOM

//stampare gli elmenti in pagina

//Chiedere la prima parola all'utente con prompt
const firstWord = prompt('Ciao, scrivi una prima parola');
console.log(firstWord);

//Chiedere la seconda parola all'utente con prompt
const secondWord = prompt('Ora scrivi una seconda parola');
console.log(secondWord);

//stampare in console la parola più lunga
if(firstWord.length > secondWord.length){
    console.log(firstWord);
    longerWordEl.append(`La parola più lunga da te scritta è: ${firstWord}`);
} else {
    console.log(secondWord);
    longerWordEl.append(`La parola più lunga da te scritta è: ${secondWord}`);
}
