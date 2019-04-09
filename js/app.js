'use strict';

//Task 2
const matrix = [
    [3,67,8],
    [1,4,5],
    [2,3]
];
var sum = 0;
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            sum += matrix[row][col];
        }
    }

console.log(sum);

//Task 3
const matrix = [
    [
        [1,15],
        [31,4],
    ],
    [
        [5,6],
        [7,8],
    ],
];
var sum = 0;
for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
        for (let col1 = 0; col1 < matrix[row][col].length; col1++) {
            sum += matrix[row][col][col1];
        }
    }
}

console.log(sum);

//Task 4
 const arr = [1,3,4,5,7,8,9,10,23,45,56,78,34,56,7,8,12,456];

 function isNumberInRange(num){
     if (num > 0 && num < 10){
         return true;
     } else {
         return false;
     }
 }

 const newArr = [];
     for(var i = 0; i<=arr.length; i++){
         if(isNumberInRange(arr[i])){
             newArr.push(arr[i]);
         }
     }

 console.log(newArr);

//Task 5
function isEven(num){
    if (num % 2 === 0){
        return true;
    } else {
        return false;
    }
}


//Task 6
const arr = [1,333,78,45,34,789,234,3456,2,4,7,6,9,11,34,890,65,43,876,56,55,98,99,345];

function isEven(num){
    if (num % 2 === 0){
        return true;
    } else {
        return false;
    }
}

const newArr = [];
for(var i = 0; i<=arr.length; i++){
    if(isEven(arr[i])){
        newArr.push(arr[i]);
    }
}

console.log(newArr);

//Task 7

function getDivisors(num){

    const number = 346;
    if (number % i === 0){
        return true;
    } else {
        return false;
    }
}

const divisors = [];
for(var i = 1; i<=346; i++){
    if(getDivisors(divisors[i])){
        divisors.push(divisors[i]);
    }
}

console.log(divisors);

//Task 8 matrix 1
const matrix = [];

for(let row=0; row < 10; row++){
    matrix[row] = [];
    for(let col = 0; col < 10; col++) {
        matrix[row][col] = (row + 1) * (col + 1);
    }
}

console.log(matrix);

//Task 9
function result(x = 4, y = 3){
    if (x>0 && y>0){
       return (Math.pow(x, y));
    }
}

alert(result());

//Task 10
const age = prompt('Введите возраст пользователя.');
function userAge(num){
    if (age > 16){
        return true;
    } else {
        return false;
    }
}

if(userAge(true)){
    (alert('Добро пожаловать!'));
} else{
    (alert('Вы еще молоды'));
}

//Task 11
// const age = prompt('Введите возраст пользователя.');
// function userAge(num){
//     age = age || 16;
//
// }
//
// if(userAge(true)){
//     (alert('Добро пожаловать!'));
// } else{
//     (alert('Вы еще молоды'));
// }

//Task 13
// const number = prompt('Введите ваше число.');
//
// function yourNumber(num){
//      const result = 0;
//      if (number > 10){
//         return (result=result * y2);
//     } else if (number < 7){
//          return (result=7);
//      }
// }
//
//  if(userAge(true)){
//      (alert('Добро пожаловать!'));
// } else{
//      (alert('Вы еще молоды'));
// }

