/*  1. Write a JavaScript program to display the current day and time in the following format.  
    Sample Output : Today is : Tuesday.
    Current time is : 10 PM : 30 : 38
*/

const date = new Date();

let weekDay = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const day = date.getDay();
// console.log(day);

console.log("Today is :", weekDay[day]);

console.log(
  date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
);

/*
Write a JavaScript program to get the current date.  
Expected Output : dd/mm/yyyy
*/

console.log(date.toLocaleDateString());

/// Random Password Generator

let pass;

let passlenght = 44566;
pass = Math.round(Math.random() * passlenght);

console.log("Your Password id : ", pass);

let name = "jaimin";

function newfunc(params) {
  console.log(this.name);
}

newfunc();

const newObj = {
  name: "jk",
  email: "jaimin@gmail.com",
  greeting: function() {
    console.log(this.name);
  },
};

newObj.greeting();

const name2 = "JavaScript CSS HTML";
spliteName = name2.split(" ");

console.log(spliteName[spliteName.length - 1]);

/*
Write a JavaScript program to find the longest word in a given sentence.
Example:
Input: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." 
*/
// let str = "lorem ipsum dolor sit amet, consectetur adipiscing";
function FindLongWord(str) {
  let newstr = str.split(" ");

  let longestWord = newstr.reduce((longWord, currentWord) => {
    console.log(currentWord);
    console.log(longWord);
    return currentWord.length > longWord.length ? currentWord : longWord;
  }, "");
  console.log(longestWord);
  return longestWord;
}

console.log(FindLongWord("lorem ipsum dolor sit amet, consectetur adipiscing"));

// Age Calculator function

function calculateAge(birthDate) {
  let today = new Date();

  let birth = new Date(birthDate);

  let age = today.getFullYear() - birth.getFullYear();
  console.log(age);

  let monthDifference = today.getMonth() - birth.getMonth();
  console.log(monthDifference);

  let dayDifference = today.getDate() - birth.getDate();
  console.log(dayDifference);

  // Adjust if the birthday hasn't occurred yet this year
  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    age--;
  }

  return age;
}

let birthDate = "2022-12-09"; //// YYYY-MM-DD format
console.log("Age is: " + calculateAge(birthDate)); // Output: Age is: [calculated age]

let str = "lorem ipsum dolor sit amet, consectetur adipiscing";

console.log(
  str
    .split(" ")
    .reverse()
    .join(" ")
);

console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("End");

// 1. Find the Maximum * of Two Elements

const maxProduct = (arr) => {
  let max1 = Math.max(arr[0], arr[1]);
  console.log(max1);
  let max2 = Math.min(arr[0], arr[1]);
  console.log(max2);

  for (let i = 2; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i] > max1) {
      max2 = max1;
      max1 = arr[i];
    } else if (arr[i] > max2 && arr[i] < max1) {
      max2 = arr[i];
    }
  }
  console.log(max2);

  return max1 * max2;
};

console.log(maxProduct([3, 4, 50, 2]));

// find the Duplicates in an Array

function findDuplicates(arr) {
  let duplicates = [];
  for (let i = 0; i < arr.length; i++) {
    console.log("arr i ", arr[i]);
    for (let j = i + 1; j < arr.length; j++) {
      console.log("arr j ", arr[j]);
      if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
        duplicates.push(arr[i]);
      }
    }
  }
  return duplicates;
}

console.log(findDuplicates([1, 1, 2, 5, 4, 4, 1, 2]));

// Move All Zeros to the End

function moveZerosToEnd(arr) {
  let j = 0; //index of first element or array element

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      let temp = arr[i];
      arr[i] = arr[j];
      console.log(arr[j]);
      arr[j] = temp;
      console.log(arr[j]);

      j++;
    }
    console.log(arr);
  }
  return arr;
}
console.log(moveZerosToEnd([0, 1, 0, 3, 12]));

// Find the Missing Number in an Array

function findMissingNumber(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  console.log(max, min);
  let sum = (max * (max + 1)) / 2;
  console.log(sum);

  for (let i = 0; i < arr.length; i++) {
    sum -= arr[i];
    console.log(sum);
  }
  return sum;
}

console.log(findMissingNumber([1, 2, 3, 4, 6, 7, 8, 9]));

//  Find the Largest Number in an Array

function findLargestNumber(arr) {
  let max = arr[0];
  console.log(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    console.log(max);
  }
  return max;
}

console.log(findLargestNumber([1, 2, 3, 2, 6, 7, 8, 9, 1]));

// let arr1 = [1, 2, 3, 1, 2, 4, 5, 7, 8, 9, 6, 8, 9];

// let uniqueArr = [];
// let count = {};
// arr1.forEach((item) => {
//   if (!uniqueArr.includes(item)) {
//     uniqueArr.push(item);
//     count[item] = 1;
//   } else {
//     count[item]++;
//   }

//   //  console.log(`Count : ${item} : ${ }`);
//   return uniqueArr && count[item];
// });

// console.log(uniqueArr);

// function bubbleSort(arr) {
//   let len = arr.length;
//   for (let i = 0; i < len; i++) {
//     console.log(len);
//     for (let j = 0; j < len - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }

// console.log(bubbleSort(uniqueArr));

let arr = ["Zoya", "foram", "Sarthak", "jaimin", "joy", "Aman"];
// arr = [78,45,65,98,32,4,5];

function bubbleSortStrings(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      // console.log(arr[j].localeCompare(arr[j + 1]) > 0);
      // console.log(arr[j]);
      // console.log(arr[j + 1]);
      if (arr[j].localeCompare(arr[j + 1]) > 0) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// Example usage
const sortedArray = bubbleSortStrings(arr);
console.log(sortedArray);

/////////////////////////////////////////////////////////         /////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////  DSA   /////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////        /////////////////////////////////////////////////////////

// insert element into particular position in array

let data = [1, 4, 8, 9, 4];
let insertElement = 300;
let position = 2;

for (let i = data.length - 1; i >= 0; i--) {
  if (i >= position) {
    data[i + 1] = data[i];
    if (i == position) {
      data[i] = insertElement;
    }
  }
}

console.log(data);

// =================================================================

// delete the element

for (let i = position; i < data.length - 1; i++) {
  data[i] = data[i + 1];
}

data.length = data.length - 1;

console.log(data);

// search for the element

for (let i = 0; i < data.length - 1; i++) {
  if (data[i] == 1) {
    console.log("Search Found", data[i]);
    break;
  } else {
    console.log("Enter valid element");
    break;
  }
}

console.log(data);

// merge two arrays

let data2 = [10000,14545,5852,122];
let data3=[]


for (let i = 0; i < data.length; i++) {
  // data3.push(data[i]);
  data3[i] = data[i];
}
for (let i = 0; i < data2.length; i++) {
  data3[data.length + i] = data2[i];
}

console.log(data3);