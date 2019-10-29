"use strict";

// alert("hello world");

// let answer = confirm("Are you here?");
// console.log("answer");

// let answer = +prompt("Вопрос", "Да"); // унарный плюс 
// превратит строку в число
// console.log(answer);
// console.log(typeof(answer));

// console.log("arr" + " – object");
// console.log(4 + " – number");
// console.log(4 + +" – number");

let incr = 10, decr = 10;

incr++;
decr--;

console.log(incr);
console.log(decr);

console.log(++incr);
console.log(--decr);

console.log(incr++);
console.log(decr--);

console.log(incr);
console.log(decr);

console.log(5%2); //mod

console.log("2" == 2);
console.log("2" === 2);

let isChecked = true,
    isClose= true;

    console.log(isChecked && isClose); //and
    console.log(isChecked || isClose); //or



/* 

console.log(second); //null - let доступна после объявления
console.log(leftBorderWidth); //undefined - неинициализированная var 
доступна до объявления
var leftBorderWidth = 1;
let second = 2;
const pi = 3.14;
console.log(leftBorderWidth);
console.log(second); 
*/

/*

var number = 5;
var string = "Hello";
var sym = Symbol();
var boolean = true;
null; //несуществует
undefined; //неопределена-неинициализирована
var obj ={};

*/

/*
console.log(4/0); //infinity
console.log("string"*9); //NaN
*/

/*

// console.log(something); //null
let something;
console.log(something); //undefined

*/

let person = {
    name: "John",
    age: 25,
    isMarried: false
}; //object variable

console.log(person.name);
console.log(person["name"]);

let arr = ["plan.png", "orange.jpg", "apple.bmp"]; //массив

console.log(arr[2]);