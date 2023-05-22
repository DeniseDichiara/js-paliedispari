//* Palidroma
//* Chiedere all’utente di inserire una parola
//* Creare una funzione per capire se la parola inserita è palindroma

const usertWord = prompt('Hi! Enter the first word');
const sameWord = ""


if (usertWord.length === sameWord.length){
    console.log('La parola è polidroma')
} else{
    console.log('Non è polidroma')
}

function wordCheck (word, polidromeWord){
    if (word.value === polidromeWord.value){
        return true;
    }
    return false;
}

