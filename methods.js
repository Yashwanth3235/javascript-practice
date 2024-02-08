// 2.   Write a program to demonstrate different array and string methods in JavaScript?

// example on joined string
const number = [1, 2, 3, 4, 5];
const joinedString = number.join();

console.log("joined String:" + ' ' + joinedString); 


// example on push string method
const numbers = [1, 2, 3, 4, 5];
const pushstring1 = numbers.push(6);
const pushstring2 = numbers.push(7);


console.log("After push:" + ' ' + pushstring1);
console.log("After push:" + ' ' + pushstring2);


console.log(numbers);

// example on pop
const nums = [1, 2, 3, 4, 5, 6, 7];

const remove_element = nums.pop()
console.log("After pop: " + ' ' + remove_element);
console.log(nums);

// example on shift
const num = [1, 2, 3, 4, 5, 6] ;

const shift_element = num.shift();
console.log("After shift: " + ' ' + shift_element);
console.log(num);

// example on unshift
const n = [2, 3, 4, 5, 6] ;

const unshift_element = n.unshift(0);
console.log("After unshift: " + ' ' + unshift_element);
console.log(n);

// example on sliced array
const i = [1, 2, 3, 4, 5];

const slice_method = i.slice(1, 4);

console.log("sliced array" + ' ' + slice_method);


// example on splice
const j = [0, 4, 5, 6];

const splice_method = j.splice(1, 0, 8, 9);
console.log("After splice" + ' ' + j);

// identifying the index numbers
const k = [1, 2, 3, 4, 5, 6, 7];

const index_numbers = k.indexOf(5);
console.log("index of 5 is:" + ' ' + index_numbers );

// example on include method
const a = [1, 2, 4, 5];

const include_method = 3

if (a.includes(include_method)) {
  console.log(`${include_method}  exists in array : true.`);
} else {
  console.log(`${include_method} exist in array : false`);
}


// example on reverse method
const d = [0, 8, 9, 4, 5, 6];

const reverse_method = d.reverse();
console.log("After reverse:" + ' ' + reverse_method);

// example on sort
const g = [0, 8, 9, 4, 5, 6];

const sort_method = g.sort();
console.log("After sort:" + ' ' + sort_method);

// example on uppercase
let String = "javascript is awesome!";
let uppercase = String.toUpperCase();

console.log(uppercase); 


// example on lowecase
let S = "JAVASCRIPT IS AWESOME!";
let lowercase = S.toLowerCase();

console.log(lowercase); 

 // example on length string method
let finding_length = "My Name is Prabhas";
let total_length = finding_length.length;

console.log("Length:" + ' ' + total_length);

// example on indexOf
let index = "this is Yashwanth";
let finding_index_number = index.indexOf('is');

console.log("Indexof 'is' is" + ' ' + finding_index_number);

// example on substring
let sub_string = "welcome to javascript";
let example_for_Substring = sub_string.substring(15);

console.log("Substring:" + ' ' +example_for_Substring);

// example on replace string
let original_string = "javascript is awesome";
let replace_string = original_string.replace('awesome','amazing');

console.log("Replaced string:" + ' ' + replace_string);

// example on split array method
let sentence = "Javascript is awesome";
let Split_string = sentence.split(" ");

console.log(Split_string);
