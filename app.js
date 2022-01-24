// const addFunc = (num1,num2) => {
//     return num1 + num2
// };

// let myArray = ["Dan","Stuart","Ben"];

//? Challenge: Create a function that creates an object with 2 properties, test to makes sure that the objects properties are equal to your test function

// function makeObject(one,two) {
//     this.propertyOne = one;
//     this.propertyTwo = two;
// };

// let objectMaker = (one,two) => {
//     testObject = new makeObject(one,two)
// };

// objectMaker('one','two');
// console.log(testObject);

//? Challenge: A function that will return items in an array with 6 or more characters

// let wordArray = ["six","senary","hexad","sextuple","sestet","hexagon","half-dozen"]

// let arraySixers = (array) => {
//     for (i = 0; i < array.length; i ++) {
//         if (array[i].length > 5) console.log(array[i]) 
//     }
// }

// arraySixers(wordArray)

//? Challenge: Convert a number into a string

// const stringConverter = (num1) => {
//     return num1.toString();
// }

// console.log(stringConverter(6));

//? Challenge: Display the correct planet with the number order it is away from the sun | planet(3) // will return 'Earth'

// const planets = [
//     'Mercury',
//     'Venus',
//     'Earth',
//     'Mars',
//     'Jupiter',
//     'Saturn',
//     'Uranus',
//     'Neptune'
// ];

// const thirdRock = (planetNum) => {
//     return(planets[planetNum - 1]) // 1 here means we always start where the user expects
// };

// console.log(thirdRock(3));

//? Challenge: Count the number of students present in the class. With an array of boolean values, count how many students are present (true = Present)

// let theRegister = [true,false,true,false,false,false,true,true,true,true,true,true,true,false,false,true]

// const registerChecker = () => {
//     let attendance = theRegister.filter(Boolean).length;
//     console.log(attendance)
// }

// registerChecker()

//? Challenge: Square every digit and concatenate them (must return an integer) e.g. (squareDigi(34) // will return 916)

// rootNums = []

// const rooter = (num1) => {
//     let numArray = Array.from(String(num1), Number);
//     for (i = 0; i < numArray.length; i++) {
//         root = Math.round(Math.pow((numArray[i]),(numArray[i])));
//         rootNums.push(root)    
//     }
//     return rootNums.join("");
// };

// console.log(rooter(2144));

//? Challenge: Given a year, return the century it is in

// const epoch = (year) => {
//     console.log (Math.ceil(year/100))
// }

// epoch(2002)

//? Challenge: With an array of ones and zeroes, convert the equivalent binary value to an integer

// const binaryBlaster = (arr) => {
//     return parseInt(arr.join(''),2)}

// 2 here refers to the 'radix' - or base 2, so we receive a number using base 2 (i.e., binary)

// let binaryArray1 = [0,0,0,1]
// let binaryArray2 = [1,0,0,0,0,0,0,1]

// console.log(binaryBlaster(binaryArray1))
// console.log(binaryBlaster(binaryArray2))

exports.addFunc = addFunc;
exports.myArray = myArray;
exports.objectMaker = objectMaker;
exports.makeObject = makeObject;