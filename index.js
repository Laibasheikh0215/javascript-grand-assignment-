// Question 1
function isEven(number){
    return number % 2 === 0;
}
console.log("1:", isEven(4));

// Question 2
function countVowels(string){
    let count = 0;
    let vowels ="aeiouAEIOU";
    for (let i = 0; i <string.length; i++){
        if (vowels.indexOf(string[i]) !== -1) count++;
    }
    return count;
}
console.log("2:", countVowels("Hello Pakistan"));

// Question 3
function reverseString(string){
    return string.split("").reverse().join("");
}
console.log("3:", reverseString("Javascript"));

// Question 4
function findMax(array){
    let max =array[0];
    for (let i = 1; i < array.length; i++) 
        if (array[i] > max) max = array[i];
    return max;
}
console.log("4:", findMax([5,6,7,8,3,2]));

// Question 5
function isPalindrome(string){
    let reversed = reverseString(string);
    return string === reversed;
}
console.log ("5:", isPalindrome("hello"));

// Question 6
function fibonacci(n){
    let a = 0, b = 1, temp;
    for (let i = 1; i < n; i++){
        temp = a + b;
        a = b;
        b = temp;
    }
    return a;
}
console.log("6:",fibonacci(2));

// Question 7
function factorial(j){
    let result = 1;
    for (let i = 1; i<= j; i++) result *= i;
    return result;
}
console.log ("7:", factorial(7));

// Question 8
function removeDuplicate(array){
    let unique = [];
    for (let i = 0; i <array.length; i++){
        if (unique.indexOf(array[i]) === -1) unique.push(array[i]);
    }
    return unique;
}
console.log("8:", removeDuplicate([5,7,4,7,2,1,3,8,3,8,5]));

// Question 9
function sumArray(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) sum += arr[i];
    return sum;
}
console.log("9:", sumArray([1,2,4,6]));

// Question 10
function sortArray(arr){
    return arr.sort(function(a,b){ 
        return a - b;});
    }
console.log("10:", sortArray([3,6,4,9,2,0]));

// Question 11
function stringLength(string){
    return string.length;
}
console.log("11:", stringLength("LaibaArifSheikh"));

// Question 12
function toUpperCase(string){
    return string.toUpperCase();
}
console.log("12:", toUpperCase("turkey"));

// Question 13
function capitalizeFirstLetter(string){
    let words = string.split(" ");
    for (let i = 0; i < words.length; i++){
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
}
console.log("13:", capitalizeFirstLetter("monkey"));

// Question 14
function mergeArrays(arr1, arr2){
    return arr1.concat(arr2);
}
console.log("14:", mergeArrays([1,6],[4,7]));

// Question 15
function isPrime(num){
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) if (num % i === 0) return false;
    return true;
}
console.log("15:", isPrime(11));

// Question 16
function countWords(string){
    return string.trim().split(/\s+/).length;
}
console.log("16:", countWords("Hello Pakistan"));

// Question 17
function arrayContains(arrays, value){
    return arrays.indexOf(value) !== -1;
}
console.log("17:", arrayContains([1,2,3],2));

// Question 18
function uniqueElements(array){
    return removeDuplicate(array);
}
console.log("18:", uniqueElements([1,2,3,4,4,5,3,2]));

// Question 19
function flattenArray(array){
    return array.flat ? array.flat(Infinity) : [].concat.apply([], array);
}
console.log("19:", flattenArray([1,[2,[3,4]]]));

// Question 20
function repeatString(string, times){
    let result = "";
    for (let i = 0; i < times; i++) result += string;
    return result;
}
console.log("20:", repeatString("hi", 9));

// Question 21
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log("21:", getRandomInt(1, 10));

// Question 22
function average(array){
    return sumArray(array) / array.length;
}
console.log("22:", average([2,5,8]));

// Question 23
function removeSpace(string){
    return string.replace(/\s+/g,"");
}
console.log("23:", removeSpace("l a i b a a r i f s h e i k h"));

// Question 24
function findMin(array){
    let min = array[0];
    for (let i = 1; i < array.length; i++) if (array[i] < min) min = array[i];
    return min;
}
function difference(array){
    let max = findMax(array)
    let min = findMin(array);
    return max - min;
}
console.log("24:", difference([3,7,2,9]));

// Question 25
function shuffledArray(array){
    return array.sort(() => Math.random() - 0.5);
}
console.log("25:", shuffledArray([1,2,3,5,7,8]));

// Question 26
function longestWord(string){
    let words = string.split(" ");
    let longest = "";
    for(let i = 0; i < words.length; i++) if (words[i].length > longest.length) longest = words[i];
    return longest;
}
console.log("26:", longestWord("I love to do programming"));

// Question 27
function countDown(d){
    for (let i = d; i >= 0; i--) console.log(i);
}
console.log("27:");
countDown(6);

// Question 28
function firstNonRepeatingChar(string){
    for (let i = 0; i < string.length; i++) if (string.indexOf(string[i]) === string.lastIndexOf(string[i])) return string[i];
    return null;
}
console.log("28:", firstNonRepeatingChar("swiss"));