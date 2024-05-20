// 1.display in the console the numbers from 1 to 20
for (let numbers = 1; numbers <= 20; numbers++) {
  console.log(numbers);
}

//display in the console the odd numbers from 1 to 20
for (let numbers = 1; numbers <= 10; numbers++) {
  console.log("The odd number is", numbers - 1 + numbers);
}

for (let numbers = 1; numbers <= 20; numbers += 2) {
  console.log("The odd number solution: ", numbers);
}

//3. compute the sum of the elements of an array
//display it in the console

let array = [5, 6, 8, 10];
let sum = 0;
for (i = 0; i < array.length; i++) {
  sum += array[i];
}
console.log("The sum of the array is:", sum);

// 4. compute the maximum of the elements of an array and
//display it in the console

const element = [5, 623, 83, 50, 15, 852];
let max = 0;
for (const elems of element) {
  if (elems > max) {
    max = elems;
  }
}
console.log(max);

// varianta 2 la tema 4.
const lement = [5, 623, 83, 50, 15, 852];
let maxi = lement[0];
for (let i = 1; i < lement.length; i++) {
  if (lement[i] < maxi) continue;
  maxi = lement[i];
}
console.log(maxi);

// 5. compute how many times a certain element appears in an array
const elementz = [
  "Carla",
  "David",
  "Dana",
  "Dana",
  "Fernando",
  "Carla",
  "Dana",
];
let times = {};
for (let i of elementz) {
  if (times[i]) {
    times[i] += 1;
  } else {
    times[i] = 1;
  }
}
console.log(times);

//using 'nested for' generate the following pattern 0101;1010;0101;1010;

// the one I did without any help (for practice only) - the very bad one

for (let i = 0; i < 2; i++) {
  for (let j = 0; j < i; j++) {
    console.log(j, i, j, i);
    console.log(i, j, i, j);
    console.log(j, i, j, i);
    console.log(i, j, i, j);
  }
}

// the one from internet
for (let i = 0; i < 4; i++) {
  let row = "";
  for (let j = 0; j < 4; j++) {
    if ((i + j) % 2 === 0) {
      row += "0";
    } else {
      row += "1";
    }
  }
  console.log(row);
}
