

/**
 * Part I: use any of the looping methods discussed in class
 *
 * 1. for loop,
 * 2. Array.forEach,
 * 3. custom forEach
 *
 * to complete the following problems
 */

// 0. write your own forEach() that takes two arguments: an array, and a callback

function forEach(array, callback){
    // YOUR CODE HERE

    for (var i - o ; i <100; i++){}

}

// testing your code with console.assert
var total = 1;
forEach([1, 2, 3, 4], function(a){ total *= a; });
// and finally assert; if this fails, the program stops
console.assert(total === 24);


// 1. calculate the sum of numbers (returns the sum (A NUMBER))

function sum(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

 



    // .. do something with each element of args
    // YOUR CODE HERE
}

console.assert( sum(1, 2, 3, 4, 5) === 15 )

// 2. calculate the average of numbers (returns the average (A NUMBER))

function average(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    // YOUR CODE HERE
}

console.assert( average(2, 4, 6, 8) === 5 )

// 3. find the largest number of the inputs (returns the largest input (A NUMBER))

function largest(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    // YOUR CODE HERE
}

console.assert( largest(2, 4, 6, 8) === 8 )

// 4. find the longest string of the inputs (returns the longest input (A STRING))

function longest(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    // YOUR CODE HERE
}

 console.assert( longest("this", "is", "a", "awesome", "function") === "function" );

/**
 * PART II
 *
 * For each of the following Array methods,
 *
 * 1. use them in an example
 * 2. write a console.assert to test them
 */

// .sort()

var cars = ["nissan", "toyota", "ford", "jeep"];
cars.sort();
console.assert(cars[0] === "nissan");

// .concat()

var greeting = ["Hello"];

var name = ["juan"];

var fullGreeting = greeting.concat(name);

console.assert(fullGreeting[1] === "juan");

// .indexOf()

var sentence = "please come again";
  var letter = sentence.indexOf("m");

  console.assert( sentence.indexOf("m") === 9);

// .split()

var sentence = "hi how are you?";

var arr = sentence.split(" ");

console.assert(arr[2] === "are");

// .join()

var arr = ["shoes", "socks", "laces", "slippers"];

var together = arr.join();

console.assert(together === "shoes, socks, laces, slippers" );

// .pop()

 var arr = ["who", "how". "when",];

 arr.pop()


// .push()

var cars = ["nissan", "toyota", "ford", "jeep"];

cars.push("mazda");

console.assert(cars[4] === "mazda");


// .slice()



// .splice()

var arrange = [1,2,3,4,5,6,7];

var now = arrange.splice(4);
console.assert=(arrange = 1,2,3,4);


// .shift()
    
var arr = ["shoes", "socks", "laces", "slippers"];

arr.shift()
console.assert(arr[0] === "socks");


// .unshift()

var arr = ["shoes", "socks", "laces", "slippers"];

arr.unshift("boots")
console.assert(arr[0] === "boots");

// .filter()

// .map()
