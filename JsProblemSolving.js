var arr = [
  { name: "mukesh", gender: "male" },
  { name: "radhesyam", gender: "male" },
  { name: "anisha", gender: "female" },
];
var count = 0;
arr.forEach((element) => {
  if (element.gender !== "male") count++;
});
for (var j = 0; j <= count; j++) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].gender !== "male") {
      arr.splice(i, 1);
    }
  }
}
console.log(arr);
//sum of the all given array Number
var arr = [1, 2, 4, 4, 5, 55];
var sum = 0;
arr.forEach(function (val) {
  sum += val;
});
// console.log(sum);

//Find the occurence of each character of given string ...
function countOccurence(val) {
  var occurence = {};
  val.split("").forEach((res) => {
    if (occurence.hasOwnProperty(res) === false) {
      occurence[res] = 1;
    } else {
      occurence[res]++;
    }
  });
  return occurence;
}
// console.log(countOccurence("ram"));

// First letter of the given string .......
function firstLetterCapital(word) {
  return word
    .split(" ")
    .map(function (value) {
      return value.charAt(0).toUpperCase() + value.substring(1);
    })
    .join(" ");
}
// console.log(firstLetterCapital("mukesh is gentleman"));

//sort string vies character
function sortAlphabet(str) {
  return str.toLowerCase().split("").sort().join();
}
console.log(sortAlphabet("Mukesh"));
console.log(sortAlphabet("harsh"));

//reverse a number create a funtion ?
function reverseNumber(ans) {
  return Number(ans.toString().split("").reverse().join(""));
}
console.log(reverseNumber(1234));

//how to check given number is integer ?
const a = 10;
if (a % 1 === 0) {
  return 1;
} else {
  return 0;
}

//how to empty an array in js ?
//do not reset it and does not use an loop the given array.
var arr = [1, 2, 3, 4];
arr.length = 0;

//check if an object is an array or not
function checkGivenArrayIsArray(hann) {
  return Array.isArray(hann);
}
checkGivenArrayIsArray([]);

//reverse the given string
function reverseString(name) {
  return name.split("").reverse().join("");
}
var name = "Mukesh";
