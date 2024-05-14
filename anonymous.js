//1 Print odd numbers in an array
let arr=[0,1,2,3,4,5,6,7,8,9];

let odd = function () {
  let odd= arr.filter(num => num %2 ==1)
  console.log(odd)
}
odd()

//OUTPUT : [1, 3, 5, 7, 9]

//2 Convert all the strings to title caps in a string array
let str = function () {
    let arr = "hello there how are you"
    let titlecase = arr.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase());
    console.log(titlecase)
  }
  str()

//OUTPUT : Hello There How Are You

//3 Sum of all numbers in an array 
  let func = function () {
    
    let ar = [1, 2, 3, 4, 5]
    let sum = ar.reduce(function(a, b){
        return a + b;
    });
    console.log(sum);
  }
  func()

//OUTPUT : 15

//4 Return all the prime numbers in an array
  let prime = function (arr) {
    return arr.filter(function(n){
      for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
      }
      return n > 1;
    });
  };
  console.log(prime([7, 16, 9, 3]));

//OUTPUT : [7, 3]

//5 Return all the palindromes in an array
  let isPalindrome = function () {
    var myArray = ['viicc', 'racecar', 'honda', 'malayalam'];
    var arr = myArray.filter(function (c, d) {
      var palindrome = c.split('').reverse().join('');
      if (c == palindrome) {
        console.log(myArray[d]);
      }
    });
  }
  isPalindrome()

//OUTPUT : racecar
           malayalam

//6 Return median of two sorted arrays of same size
  let median = function(a, b) {

    let c = [...a, ...b].sort((a, b) => a - b);
  
    const half = c.length / 2 | 0;
    
  if (c.length % 2) {
    return c[half];
  } else {
    
    return (c[half] + c[half - 1]) / 2;
  }
  }
  let arr1 = [1, 12, 15, 26, 38,24];
  let arr2 = [2, 13, 17, 30, 45, 47];
  console.log(median(arr1, arr2));

//OUTPUT : 16.5

//7 Remove duplicates from an Array
  let findDuplicates = function () {
  
    const yourArray = [1, 1, 2, 3, 4, 5, 5]
    let duplicates = []
    const tempArray = [...yourArray].sort() 
    for (let i = 0; i < tempArray.length; i++) {
      if (tempArray[i + 1] === tempArray[i]) {
        duplicates.push(tempArray[i])
      }
    }
    console.log(duplicates) 
}
findDuplicates()

//OUTPUT : [1, 5]

//8 Rotate an array by K times
let rotateArray =function(A, K) {
    if (A.length === K || K === 0) {
        return A;
    }
    K = K % A.length;
    for (let i = 0; i < K; i++) {
        A.unshift(A.pop());
    }
  console.log(A)
}
rotateArray([1,2,3,4,5],2)

//OUTPUT : [4, 5, 1, 2, 3]
