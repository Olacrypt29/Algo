// console.log(2+2);
// alert('Learning Javascript')
// prompt('What is your favorite programming?')
// confirm('Do you want to learn')


// variables
// var
// let: allows us to redefine the value of a variable after declaration
// const: does not allow variable redclaration after initial declaration
// let name = 'John'
// name = 'Mary'
// console.log(name);

// name = 'Mary';
// console.log(name);

// const number = 30
// number = 15
// console.log(number)

// Data types
// Primitive Data type
// Number Data type
// let age = 30
// console.log(age)

// String Data type
// let ame = 'Jesse'
// console.log(ame);

// Boolean Data type
//  let isMarried = false
//  console.log(isMarried);

 // Number Data type
//  let room = null
//  console.log(room);

// Undefined Data type
//  let time;
//  console.log(time);

// Non primitive Data type
// functions

// function addMe(a, b, c){
//    console.log(a+b-c);
// }
// addMe(10, 5, 7)

// Date data type
// let time = new Date().getDay()
// console.log(time);


// Array Data type
    // length 1    2    3        4     5      6
// let array1 = [30, 40, 'Jesse', null, true, false,]
    // index  0    1     2       3      4     5
// console.log(array1.length); // looking for the length
// console.log(array1 [4]); // looking for the index

// let colours = ['white', 'black', 'red', 'green', 'yellow',]
// colors.pop(); // removes the last element in the array
// colours.push('purple')  // adds elements to the ending of the array
// colours.shift(); // removes the first element in the array
// colours.unshift('Pink'); // adds elements to the beginning of the array
// console.log(colours.indexOf('yellow'));


// Objects
// let person = {
//     name: 'John',
//     age: 30,
//     isMarried: false,
//     netWorth: null,
//     married: false,
// }
// console.log(person.age ,person['married']);

// Nested Arrays
// const properties =[
    // 'shoe',
    // cars = ['toyota', 'Porsche', benz = ['GLE', 'AMG', 'GLK', ], 'lamborghini'],
    // houses = ['bungalow', 'duplex', 'penthouse', 'mini-flat'],
    // companies = ['saloon', 'tech-hub', factories= ['sugar', 'cement', 'spaghetti', cereals= ['fruits and fibre', 'golden morn', 'quaker oats' ]]], 
    // 'yatch'
// ]
// console.log(properties[3][2][3][1]);
// console.log(cereals[2]);

// Nested Objects
// let person = {
    // firstName: 'John',
    // lastName: 'Doe',
    // age: 27,
    // address: '123 Main St',
    // married: true,
    // siblings: null,
    // jobDesc: {
    //     title: 'Software Developer',
    //     company: 'Google Inc',
    //     starDate: '2015-04-23',
    //     endDate: 'currently works here',
    //     level: {
    //         status: 'senior engineer',
    //         qualification: [ 'IBM', 'ISBQT', 'Google'],
    //         credentials: 'tier1',
    //         role: 'Team lead',
    //     }
    // }
// }
// console.log(person. jobDesc. level.qualification[1]);


// let employee = {
//     firstName: 'Alice',
//     lastName: 'Smith',
//     age: 32,
//     address: '78 Elm Street, Boston',
//     married: true,
//     children: [
//         {
//             name: 'Oliver',
//             age: 5
//         },
//         {
//             name: 'Sophia',
//             age: 2
//         }
//     ],
//     jobDesc: {
//         title: 'Product Manager',
//         company: 'Apple',
//         startDate: '2020-03-15',
//         endDate: 'currently works here',
//         level: {
//             status: 'mid-level manager',
//             qualification: ['PMP', 'CSPO', 'Harvard MBA'],
//             credentials: 'tier 2',
//             role: 'Project coordinator'
//         }
//     }
// }
// // console.log(employee.children[1].name)
// // console.log(employee.children[1].age)

// // console.log(employee.children[0].name)
// // console.log(employee.children[0].age)

// let players = [
//     {
//         name: 'John Doe',
//         age: 25,
//         position: 'forward',
//         club: 'Real Madrid'
//     },

//     {
//         name: 'Jane Doe',
//         age: 30,
//         position: 'defender',
//         club: 'Manchester United'
//     },

//     {
//         name: 'Michael Johnson',
//         age: 32,
//         position: 'goalkeeper',
//         club: 'Chelsea'
//     },

//     {
//         name: 'Michael Johnson',
//         age: 32,
//         position: 'goalkeeper',
//         club: 'Chelsea'
//     }
// ]
// console.log(players[0].name, players[1].club, players[2].age, players[3].position) ;



// Arithmetic operators
// console.log(+7);
// console.log(15-7);
// console.log(25/4);
// console.log(5*7);
// console.log(5**7); // exponential operator
// console.log(25%4); // modulus operator

// shorthand operators +-  -=  /=  *=
// let shoe = 12000
// let bag = 7000
// let total = 0
// total += shoe + bag
// console.log(total);

// increment operators
// let num = 5
// num++
// console.log(num); 

// decrement operators
// let number = 15
// number--
// console.log(num);

// assignment operators
// let name = 'janet


// comparison operators
// let x = 'james@gmail.com'
// let y = 3

// console.log(x == y) // equal to operator
// console.log(x === y) // strictly equal to operator
// console.log(x != y) // not equal to 
// console.log(x !== y)// not strictly equal to 
// console.log(x > y) // greater than
// console.log(x < y) // less than
// console.log(x >= y) // greater than or equal to
// console.log(x <= y) // less than or equal to

// let x = 'james@gmail.com'
// let y = 3


// // logical operators
// // && operator
// let email = 'james@gmail.com'
// let password = 3
// console.log(x === email && y === password)

// // || operator
// console.log(x === email || y > password)

// // ! operator
// console.log(!(x == y))

// String operators
// String concatenation
// let name = 'Gomycode'
// let address =  ' is situated at ' +  '230 Herbert Macaulay Way, Yaba'
// // console.log(address)

// // Template literal
// let sentence = ` I study SE at GMC. ${name} ${address}`
// console.log(sentence)  

// conditional statements
// if else statement
// let score = prompt('Enter your jamb score')

// if(score <= 10){
//     alert('You failed this exam')
// }else if(score > 40 && score <= 75){
//     alert('You passed this exam')
// }else if(score > 75 && score <= 100){
//     alert('You did very well in this exam')
// }else{
//     alert('You did not write this exam')
// }


// switch statement
// function decodeColours(color){
//     let color = prompt('Please choose a value between 1, 2, 3, 4')
//     switch(color){
//         case 1: alert('you chose red')
//         break;
//         case 2: alert('you chose blue')
//         break;
//         case 3: alert('you chose white')
//         break;
//         case 4: alert('you chose black')
//         break;

//         default: alert("you've not chosen a color")
//     }
// }
// decodeColours()


// ternary operator
// let marks = 40
// let result = (marks >= 50) ? 'You passed' : 'You failed';
// console.log(result);

// Nested Ternary operator
// let score = 40
// let myResult = (score <= 40) ? 'You fail' : (score > 40 && score <= 75) ? 'You passed' : (score > 75 && score <= 100) ? 'You did very well in the exam' : 'You did not write this exam' 

// Loops
// while loop
// let num = [3, 5, 2, 4, 9]
// let sum = 0
// let i = 0
// while(i < num.length){
//     sum += num[i];
//     i++
// }
// console.log(sum);


// Do while loop
// let num = [3, 5, 2, 4, 9]
// let sum = 0
// let i = 0

// do{
//     sum += num[i];
//     i++
// }while(i < num.length)

// console.log(sum);

// for loop
// let num = [3, 5, 2, 4, 9]
// let sum = 0

// for(let i = 0; i < num.length; i++){
//     sum += num[i];
// }
// console.log(sum);

































