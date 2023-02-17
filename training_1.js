/*
It's pretty straightforward.
Your goal is to create a function that removes the first and last characters of a string.
You're given one parameter, the original string.
You don't have to worry with strings with less than two characters.
*/

function removeChar(str){
    let answer = '';
    for (let i=1; i<str.length-1; i++) {
        answer = answer + str[i];
    }
    return answer
};

// ПРОВЕРКА ПРОЙДЕНА


/*
Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct.
However, since someone could look over your shoulder, you don't want that shown on your screen.
Instead, we mask it.
Your task is to write a function maskify, which changes all but the last four characters into '#'.
*/

function maskify(str) {
    let answer = '';
    let i = 0;
    while (i < str.length-4) {
        answer = answer + '#'
        i++
    }
    for (let i = str.length-4; i <= str.length; i++) {
        answer = answer + str[i];
    }
    return answer
}

// работает корректно только при строке > 4 символов. ДОРАБОТКА



/*
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/

//ВАРИАНТ 1. Классическое задание условий
function evenOrOdd(number) {
    if (number % 2) {
        console.log('Odd');
    } else {
        console.log('Even')
    }
    return
}

//ВАРИАНТ 2. Тернарный оператор
function evenOrOdd(number) {
    return (number % 2) ? 'Odd' : 'Even';
}

// ПРОВЕРКА ПРОЙДЕНА



