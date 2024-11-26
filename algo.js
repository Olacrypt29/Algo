// Write a function that calculates the factorial of a given number.
// A factorial is the product of an integer and all the integers below it; e.g. factorial four ( 4! ) is equal to 24.

// function factorial(num){
//     let answer = 1;
//     for(let i = 1; i <= num; i++){
//         answer *= i
//     }
//     return answer
// }
// console.log(factorial(5));


// Write a function that converts celcius to fahrenheit, given that the formula for conversion is celcius x (9/5) + 32. Return your as fahreneit.
//  function convert(celcius){
//     let fahrenheit = celcius * (9/5) + 32
//     console.log(fahrenheit)
// }
// convert(50)

// Write a function that takes a string as input and returns the reversed string.
//  function reverseString(str){
//     let reversed = ''
//     for(let i = str.length - 1; i >= 0; i--){
//         reversed += str[i]
//     }
//     return reversed
// }
// console.log(reverseString('dogs')) 

// Write a function that takes an array of numbers and returns largest number.

//  function findLargest(arr){
//      let largest = arr[0]
//      for(let i = 1; i < arr.length; i++){
//          if(arr[i] > largest){
//              largest = arr[i]
//          }
//      }
//      return largest
//  }
 
//  console.log(findLargest([5, 10, 3, 8, 2]))

// classwork
// 1 Write a function that prints numbers from 1 to 100. For multiples of 3, print "Fizz", for multiples of 5, print "Buzz", and for multiples of both, print "FizzBuzz".
// function findNumber(){
//   for(let i = 1; i <= 100; i++) {
//     if(i % 3 === 0 && i % 5 === 0) {
//       console.log('FizzBuzz');
//     } else if(i % 3 === 0) {
//       console.log('Fizz');
//     } else if(i % 5 === 0) {
//       console.log('Buzz');
//     } else {
//       console.log(i);
//     }
  
// }

  // 2 Write a function that calculates the sum of all numbers in the array.

  // let num = [5, 15, 22, 4, 8, 27]
  // let sum = 0
  // function addNumbers(){
  //   for(let i = 0; i < num.length; i++){
  //     sum += num[i]
  //   }
  //   console.log(sum)
  // }
  // addNumbers()

  // 3 Write a function that returns the index of a target element in array. If the element is not found, return -1.
//   function findIndex(arr, target){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === target){
//             return i
//         }
//     }
//     return -1
//   }
//   console.log(findIndex([1, 2, 3, 4, 5], 3))

// Write a function that checks if a number is a prime number.

//    function isPrime(num){
//      if(num <= 1){
//          return falseb
//      }
//      for(let i = 2; i < num; i++){
//          if(num % i === 0){
//              return false
//          }
//      }
//      return true
//    }
//    console.log(isPrime(7))

// Write a function that merges two arrays and sorts them in ascending order.

    // function mergeAndSort(arr1, arr2){
    //     let merged = arr1.concat(arr2)
    //     merged.sort((a, b) => a - b)
    //     return merged
    // }
    // console.log(mergeAndSort([1, 5, 3], [8, 2, 6]))