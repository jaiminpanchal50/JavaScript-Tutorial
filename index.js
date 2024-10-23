// 👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍 variables 👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍
/* let var const  :::::There are theee type of scope in js for variable Block , Local , Global */

// Block Scope

{
  let Fname = "Jaimin";
  console.log(Fname); // we can access the Fname inside the scope
}
// console.log(Fname); // we can't access the Fname Outside the scope

// Local Scope

// code here can NOT use carName

function myFunction() {
  let carName = "Volvo";
  // code here CAN use carName
}

// code here can NOT use carName

// Global Scope
const name = "45";
console.log(name);

/* There are seven data types in js👍👍👍👍👍👍
        string , number, boolean, object, null, undefiend, bigInit,array */

// 👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍 Conversion👍👍👍👍👍👍👍👍👍👍

// implicit conversions
console.log("10" / 20);
console.log("10" - 20);
console.log("10" * 20);

// explicit conversions
let name2 = Number(name);
console.log(typeof name2, name2);

let name3 = String(name2);
console.log(typeof name3, name3);

let num = 1;
let bool = Boolean(num);
console.log(bool, typeof num, typeof bool);

/// 👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍 Operations👍👍👍👍👍👍👍👍👍
// +  ,  -,  *,  /,  **,  %

console.log("1" + 2 + 5);
console.log(1 + 2 + "5");
console.log(1 + "2" + 5);

let z = 2 ** 4;
console.log(z);

/// 👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍 comparison 👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍

// == , <= , < , >= , > ,!=

let x = 10;
x = 5;
console.log(x);

console.log("2" === 2);
console.log("2" == 2);

let num5 = 1;
console.log(num5++);
console.log(num5);
console.log(++num5);

/// 👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍 Memory allocation 👍👍👍👍👍👍👍👍👍👍👍👍

// heap(array,object) , Stack( string , number, boolean,.... )

/// 👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍 Strings 👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍

let myName = "Jaimin Kumar";
let myName2 = "Panchal 🇮🇳";
console.log(myName + " " + myName2);
console.log(myName.concat(myName2));
console.log(myName.toLowerCase());
console.log(myName.toUpperCase());
console.log(myName.length);
console.log(myName.charAt(5));
console.log(myName.indexOf("i"));
console.log(myName2.slice(0, 3));
console.log(myName2.substring(0, 3));
console.log(myName.replace("jaimin", "jaimiin"));
console.log(myName.split(" "));
console.log(myName.includes("min"));
console.log(myName.repeat(2));
console.log(myName.endsWith("r"));
console.log(myName.search("n"));
console.log(myName.split("").reverse().join());
console.log(myName.trim());
console.log(myName.trimStart());
console.log(myName.trimEnd());
console.log(myName.startsWith("J"));
console.log(myName.endsWith("r"));

/* 👍👍👍👍👍👍👍👍👍👍👍👍👍👍 Numbers & Maths  👍👍👍👍👍👍👍👍👍👍👍  */

let runs = 57;
let over = 122.5;

let R = 10000000;
console.log(runs.toFixed(2));
console.log(runs.toFixed(8));
console.log(over.toExponential(5));
console.log(R.toLocaleString("en-In"));

console.log(Math.floor(Math.random() * 100));
console.log(Math.floor(Math.random() * 10));
console.log(Math.round(over));
console.log(Math.max(12, 45, 65, 45, 778, 45, 45, 45131, 54, 1));
console.log(Math.min(12, 45, 65, 45, 778, 45, 45, 45131, 54, 1));

/* 👍👍👍👍👍👍👍👍👍👍👍👍👍👍  Date & Time  👍👍👍👍👍👍👍👍👍👍👍  */

let myDate = new Date();
console.log(Date());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.getHours());
console.log(myDate.getMinutes());
console.log(myDate.getSeconds());

/* 👍👍👍👍👍👍👍👍👍👍👍👍👍👍  Arrays  👍👍👍👍👍👍👍👍👍👍👍  */

let arr = [1, 5, 2, 3, 1, 2, 22];
console.log(arr); 
console.log(arr.length);
console.log(arr.splice(1, 2));
console.log(arr.length);
console.log(arr);
console.log(arr.push(52));
console.log(arr);
console.log(arr.pop());
console.log(arr);
console.log(arr.unshift(2));
console.log(arr);
console.log(arr.shift());
console.log(arr);
console.log(arr.slice(0,-1));
console.log(arr.join());
arr.map((i) => {
  return console.log(i);
});

let newArr = [797, 456, 456, 455, 123];

console.log(arr.concat(newArr));
console.log(arr.includes(22));
let arrNew = [...newArr, ...arr];
console.log(arrNew);

let name5 = Array.isArray("jaimin");
name5 = Array.from("jaimin");
console.log(name5);

console.log(name5.sort());
console.log(arr.sort());
/* 👍👍👍👍👍👍👍👍👍👍👍👍👍👍 Objects  👍👍👍👍👍👍👍👍👍👍👍  */

let obj = {
  name: "Jaimin",
  age: 20,
  email: "jaimin@gmail.com",
};
let obj2 = {
  name: "Panchal",
  age: 20,
  email: "panchal@gmail.com",
};

console.log(obj.name);
console.log(obj["name"]);

obj.greeting = function() {
  console.log("inside from obj");
};

console.log({ ...obj, ...obj2 });

console.log(Object.keys(obj));
console.log(Object.values(obj));

let { email, age } = obj;

let person = {
  name2: "John",
  age2: 30,
  greet: function() {
    console.log(`Hello, my name is ${this.name2}!`);
  },
};

person.greet();
console.log(person.name2);
console.log(person.greet());
console.log(Object.values(person));
console.log(Object.keys(person));
console.log(Object.entries(person));
Object.freeze(person);
console.log(Object.isFrozen(person));
console.log(Object.seal(person));
// delete person.name2
console.log(Object.isSealed(person));

person.name2 = "jack";
console.log(person.name2);

const otherObj = JSON.stringify(person);
console.log(otherObj);

// Constructor Function Methods

function Person(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.fullName = function() {
    return this.firstName + " " + this.lastName;
  };
}

const otherPersonObject = new Person("Jaimin", "Panchal", 20);
console.log(otherPersonObject.age);

/* 👍👍👍👍👍👍👍👍👍👍👍👍👍👍  Functions  👍👍👍👍👍👍👍👍👍👍👍  */

/* a function is a reusable block of code designed to perform a specific task */
// 1. Function Declaration
function greet_One(name) {
  console.log("Hello, " + name + "!");
}

greet_One("Alice");

// 2. Function Expression
const greet = function(name) {
  console.log("Hello, " + name + "!");
};

greet("Bob"); // Output: Hello, Bob!

// Arrow Functions

const greet_t = (name) => {
  console.log("Hello! " + name);
};

greet_t("Alice"); // Output: Hello! Alice

const cart = (pr1, pr2, ...pr3) => {
  console.log(pr1, pr2);
  return pr3;
};

console.log(cart(200, 450, 560, 789, 456, 756));

/* 👍👍👍👍👍👍👍👍👍👍👍👍👍👍 Conditions  👍👍👍👍👍👍👍👍👍👍👍  */

if (true == 1) {
  console.log("condition is true");
}

// if/else if/elseif/else / switch

let month = 1;
switch (month) {
  case 1:
    console.log("jan");
    break;
  case 2:
    console.log("feb");
    break;
  case 3:
    console.log("mar");
    break;

  default:
    console.log("enter valid num");
    break;
}

/* 👍👍👍👍👍👍👍👍👍👍👍👍👍👍 Iterations  👍👍👍👍👍👍👍👍👍👍👍  */

let array = [1, 2, 3, 4, 5];
for (let index = 0; index < array.length; index++) {
  if (index == 2) {
    // break;
    continue;
  }
  console.log(index);
}

for (let index = 1; index <= 10; index++) {
  console.log("Outer loop", index);
  for (let j = 1; j <= 10; j++) {
    console.log("Inner loop", index * j);
  }
}

// while do while loop
let i = 1;

while (i < 10) {
  console.log(`${i} is less then 10`);
  i++;
}

do {
  console.log(`${i} is less then 10`);
  i++;
} while (i < 10);

// for of Loop
for (const element of array) {
  console.log(element);
}

// for in loop
for (const element in obj) {
  console.log(element, obj[element]);
}

array.map((i) => {
  // return new Array , Does not modify the original array
  console.log(i);
});

array.forEach((i) => {
  /// return undefined  , Can modify the original array
  console.log(i);
});

function printMe(item) {
  console.log(item);
}

array.forEach(printMe); /// we pass function as parameter

/// filter reduce

// num= [1,2,4,5,6,2,3]
const newNumb = array.filter((num) => {
  return num > 2;
});
console.log(newNumb);

const newnumber = array.reduce((acc, initVal) => acc + initVal, 0);
console.log(newnumber);

/* 👍👍👍👍👍👍👍👍👍👍👍👍👍👍  Color Generator   👍👍👍👍👍👍👍👍👍👍👍  */

let hex = [];

for (let i = 0; i <= 6; i++) {
  hex = "#" + Math.floor(Math.random() * 1235456).toString(16);
  console.log(hex);
}

/* 👍👍👍👍👍👍👍👍👍👍👍👍👍👍  Fetch  👍👍👍👍👍👍👍👍👍👍👍  */

//https://api.escuelajs.co/api/v1/users?limit=5

fetch("https://api.escuelajs.co/api/v1/users?limit=5")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

/* 👍👍👍👍👍👍👍👍👍👍👍👍👍👍  IIFE  👍👍👍👍👍👍👍👍👍👍👍  */

(function myFunc() {
  for (let i = 0; i < 5; i++) {
    console.log("hey");
  }
})();

(newfunc = () => {
  console.log("new function");
})();

let xyx = 60;

let res = xyx >= 50 ? "More then 40" : "less then 50";

console.log(res);



let start = Date.now();
console.log(start);

let current = Date.now();
console.log(current);

console.log(start - current);
