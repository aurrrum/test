"use strict";

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