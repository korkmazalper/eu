/*function convertToLetterGrade(score) {
let grade;

    if (score >= 90 && score <= 100) {
        grade = 'A';
    } else if (score >= 80 && score < 90) {
        grade = 'B';
    } else if (score >= 70 && score < 80) {
        grade = 'C';
    } else if (score >= 60 && score < 70) {
        grade = 'D';
    } else if (score < 60 && score >= 0) {
        grade = 'F';
    } else {
        grade = 'ungültig';
    }

    return grade;

}

function convertToLetterGrade1(score) {
    let grade;

    switch (true) {
        case (score >= 90 && score <= 100):
            grade = 'A';
            break;
        case (score >= 80 && score < 90):
            grade = 'B';
            break;
        case (score >= 70 && score < 80):
            grade = 'C';
            break;
        case (score >= 60 && score < 70):
            grade = 'D';
            break;
        case (score < 60 && score >= 0):
            grade = 'F';
            break;
        default:
            grade = 'ungültig';
            break;
    }

    return grade;
}

console.log(convertToLetterGrade(95));  
console.log(convertToLetterGrade(82));  
console.log(convertToLetterGrade(75));  
console.log(convertToLetterGrade(63));  
console.log(convertToLetterGrade(58));  
console.log(convertToLetterGrade(-5));  


console.log(convertToLetterGrade1(95)); 
console.log(convertToLetterGrade1(82)); 
console.log(convertToLetterGrade1(75)); 
console.log(convertToLetterGrade1(63)); 
console.log(convertToLetterGrade1(58)); 
console.log(convertToLetterGrade1(-5)); 

*/
function fibonacci(n) {
    let f = [0, 1];
    for (let i = 2; i < n; i++) {
        f[i] = f[i - 1] + f[i - 2];
    }
    return f.slice(0, n);
}

console.log(fibonacci(10));
console.log(fibonacci(-4));
console.log(fibonacci(1));


function isPalindrome(num) {
    const str = num.toString();
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}


console.log(isPalindrome(121));  // true
console.log(isPalindrome(1221)); // true
console.log(isPalindrome(123));  // false
console.log(isPalindrome(-121)); // false (negative Zahlen sind ungültig)


function isPalindrome1(num) {
    
    if (num < 0) {
        return false;
    }

    let num1 = num;
    let pol = 0;

    while (num > 0) {
        let lastDigit = num % 10; 
        pol = pol * 10 + lastDigit; 
        num = Math.floor(num / 10); 
    }

    return num1 === pol;
}

console.log(isPalindrome1(121));  // true
console.log(isPalindrome1(1221)); // true
console.log(isPalindrome1(123));  // false
console.log(isPalindrome1(-121)); // false


/*
Zahl umkehren:

Wir verwenden eine Schleife, um die Zahl Ziffer für Ziffer umzukehren.
num % 10 extrahiert die letzte Ziffer der Zahl.
Diese Ziffer wird zu reversedNum hinzugefügt, 
indem wir sie an die Stelle des Zehners verschieben 
(reversedNum * 10 + lastDigit).
Math.floor(num / 10) entfernt die letzte Ziffer von num, 
indem es die Zahl durch 10 teilt und abrundet.
*/
