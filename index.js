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
