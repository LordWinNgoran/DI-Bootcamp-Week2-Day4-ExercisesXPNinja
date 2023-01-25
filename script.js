/****************************Week 2 Day 4 Exercise XP***************** */

/**
 * @author: N'GORAN Kouadio Jean Cyrille
 * @description: Exercise XPNINJA DAY 4 Week2
 * Date : 25/01/2023
 */





/* ***************** Exercice 1 : Random Numebr ****************** */

// 1 - Get a random number between 1 and 100.

function randomNumber() {

   
    let rdmNumber = Math.floor(Math.random(1) * 100);
    console.log(rdmNumber);

    // 2 - Console.log all even numebrs from 0 to the random number

    for(let i = 0; i < rdmNumber; i++) {

        console.log(i);

    }
}

randomNumber();





/* ********************* Exercice 2 : Capitalized Letters ***************** */

// 1 - create a function that takes a string as an argument

function capitalize(character) {

   
    let capitalizedTable = [];
    let newWord = "";
    let newWord1 = "";

    if(character.split(" ").length > 1) {

        console.log("character should'nt have space");
        return;

    }

    for(let i = 0; i < character.length; i++) {

        if(i % 2 == 0) {
            newWord += character.charAt(i).toUpperCase();
            newWord1 += character.charAt(i)
        }
        else {
            newWord += character.charAt(i)
            newWord1 += character.charAt(i).toUpperCase();
        }
    }

    capitalizedTable.push(newWord);
    capitalizedTable.push(newWord1);

    return capitalizedTable;

}

capitalize("abcdef");



/* ****************** Exercice 3 : Is Palindrome *********************** */

// 1 - Write a javascript function that checks whether a string is a palindrome or not

function isPalindrome(character) {

    let middleOfCharacter = character.length / 2;
    let firstPartString = character.toLowerCase().slice(0, middleOfCharacter);
    let lastPartString = character.toLowerCase().slice((character.length % 2 == 0) ? middleOfCharacter : middleOfCharacter + 1);
    let lastPartStringReverse = lastPartString.split("").reverse().join("");

    if(firstPartString == lastPartStringReverse) {

        console.log("The entry is a palindrome");
        return true;

    }
    return false;
}

isPalindrome("madam");





/* ******************* Exercice 4 : Biggest Number ************** */

// 1 - create function called biggestNumberInArray(arrayNumber) that takes an array as a parameter and returns the biggest number

function biggestNumberInArray(arrayNumber) {

    /**
     * @description : cette fonction permet trouver la plus grande valeur dans un tableau
     * et la retourne
     * @param arrayNumber -> le tableau à trier
     * @param biggestNumber -> 
     */

    if(arrayNumber.length > 0) {

        let biggestNumber = 0;

        for(let i of arrayNumber) {

            if(i > biggestNumber) {

                biggestNumber = i;

            }
        }
        return biggestNumber;
    }
    return 0;

}

biggestNumberInArray(['a', 3, 4, 2]);








/* ***************** Exercice 5 ************** */

// Write a JS function that takes an array and returns a new array with only unique elements

function uniqueElements(array) {

    /**
     * @description cette fonction permet de supprimer les doublons dans une liste
     */

    let uniqueElementsList = array.filter((x, i) => array.indexOf(x) === i);
    return uniqueElementsList;

}

uniqueElements([1,2,3,3,3,3,4,5]);

