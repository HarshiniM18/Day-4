// 1. Print odd numbers in an array
const oddNumbers = (array) => {
    array.forEach((num) => {
        if (num % 2 !== 0) {
            console.log(num);
        }
    });
};
oddNumbers([1, 2, 3, 4, 5]);

//OUTPUT : 1
           3
           5

// 2. Convert all the strings to title caps in a string array
const titleCase = (str) => {
    return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};
console.log(titleCase("hello there how are you"));

//OUTPUT : Hello There How Are You

// 3. Sum of all numbers in an array
const sum = (array) => array.reduce((acc, curr) => acc + curr, 0);
console.log(sum([1, 2, 3, 4]));

//OUTPUT : 10

// 4. Return all the prime numbers in an array
const primeNumber = (numArray) => {
    return numArray.filter((number) => {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) return false;
        }
        return number > 1;
    });
};
console.log(primeNumber([7, 16, 9, 3]));

//OUTPUT : [7, 3]

// 5. Return all the palindromes in an array
const isPalindrome = (str) => {
    return str === str.split('').reverse().join('');
};

const getPalindromes = (arr) => {
    return arr.filter(word => isPalindrome(word));
};

console.log(getPalindromes(['viicc', 'racecar', 'honda', 'malayalam']));

//OUTPUT : racecar
           malayalam
