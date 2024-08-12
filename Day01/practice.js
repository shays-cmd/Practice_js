// Activity 1: Variable Declaration


// Task 1: Declare a variable using "var", assign it a number, and log the value to the console.
var userId = 2309
console.log(userId)


// Task 2: Declare a variable using "let", assign it a string, and log the value to the console.
let userName = "Shay"
console.log(userName)



//---------------------------------------------------------------------------------------------------------

//Activity 2: Constant Declaration

//Task 3: Declare a variable using "const", assign it a boolean value, and log the value to the console.
const isUserLogged = true
console.log(isUserLogged)


//---------------------------------------------------------------------------------------------------------

//Activity 3: Data Types

//Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the "typeof" operator.

let animeNumber = 200
const watchedAnime = "Variable animeNumber is the number of anime I have watched, it might be more but definetly not less than that."
const isItTrue = true
const nameOne = {
    animeName: "Bleach",
    episodes: 366, 
    protagonist: "Kurosaki Ichigo",
    watchingRightNow: true 
}
let bdayrray = [16, 2, 31, 23, 9, 19, 8]
console.log(typeof animeNumber)
console.log(typeof isItTrue)
console.log(typeof watchedAnime)
console.log(typeof nameOne)
console.log(typeof bdayrray)// doubt: this is showing that bdayrray is an object.


//---------------------------------------------------------------------------------------------------------

//Activity 4: Reassigning Variables

//Task 5: Declare a variable using "let", assign it an initial value, reassign a new value, and log both values to the console.
let potterHead = true
console.log(potterHead)
potterHead = "Well I just have watched movies only." 
console.log(potterHead)



//---------------------------------------------------------------------------------------------------------

//Activity 5: Understanding "const"

//Task 6: Try reassigning a variable declared with "const" and observe the error.
const intoCS = "Just think about it, people before you who have created this tech, how much intelligent they must have been that they created this tech which you are using right now."
console.log(intoCS)
intoCS = 2309
console.log(intoCS)
// error: "TypeError: Assignment to constant variable.""
