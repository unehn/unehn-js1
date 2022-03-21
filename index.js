//task one. alert() is a function itself?
let admin, user;
user = "Anna";
admin = user;
alert(admin);

//task two
let user2 = "ivan";
console.log(user2[0].toUpperCase() + user2.substring(1));

//task three
let practice = 'The string for practice';

/*slice() extracts a part of a string and returns the extracted part in a new string.

The method takes 2 parameters: the start position, and the end position (end not included).*/

let cutFor = practice.slice(11,14); //cuts "for" from the string
let cutFromTheEnd = practice.slice(-12, -9);
console.log(cutFor);
console.log(cutFromTheEnd);

//The replace() method replaces a specified value with another value in a string

let fun = practice.replace("practice", "fun");
console.log(fun);


//task four
let a = '';

let b = 'bbb';

let c = false;

let test1 = !b.length === c; // ???? true

let test2 = a.length > b.length; // ???? false

let test3 = !a.length && !b.length; // ??? false

let test4 = a === c; // ??? false