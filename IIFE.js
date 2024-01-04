//1 Print odd numbers in an array
(function(array){
    for(var i = 0 ; i< array.length ; i++){
        if(array[i]%2!=0){
            console.log(array[i])
        } 
     }
})([1,2,3,4]);

//2 Convert all the strings to title caps in a string array
(function (str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++){
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    console.log(str.join(' '));
})("hello there how are you")

//3 Sum of all numbers in an array
(function () {
    let sum = [1, 2, 3, 4].reduce(add, 5);
    function add(accumulator, a) {
      return accumulator + a;
    }
    console.log(sum);
})()

//4 Return all the prime numbers in an array
(function (){
    var primeNum = [7, 16, 9, 3]
    
    primeNum = primeNum.filter(function(number) {
      for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
      }
      return true;
    });
    
    console.log(primeNum);
})()

//5 Return all the palindromes in an array
(function(){
    var myArray = ['viicc', 'racecar', 'honda', 'malayalam'];
    var arr = myArray.filter(function (c, d) {
      var palindrome = c.split('').reverse().join('');
      if (c == palindrome) {
        console.log(myArray[d]);
      }
    });
})()

//6 Return median of two sorted arrays of same size
(function(){
    let arr1 = [1, 12, 15, 26, 38,24];
    let arr2 = [2, 13, 17, 30, 45, 47];
    
      let c = [...arr1, ...arr2].sort((arr1, arr2) => arr1 - arr2);
    
      const half = c.length / 2 | 0;
      
    if (c.length % 2) {
    console.log(c[half]);
    } else {
      
    console.log((c[half] + c[half - 1]) / 2);
    }
    
})()
    
//7 Remove duplicates from an Array
(function(){
  
    let numbers = [1, 2, 3, 2, 4, 5, 5, 6];
    
    let duplicates = numbers.filter((item, index) => index !== numbers.indexOf(item));
    
    console.log(duplicates);
})()

//8 Rotate an array by K times
(function(A, K){
    if (A.length === K || K === 0) {
        return A;
    }
    K = K % A.length;
    for (let i = 0; i < K; i++) {
        A.unshift(A.pop());
    }
  console.log(A)
})([1,2,3,4,5],2)
