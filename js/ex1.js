"use strict"

let money, time;

money = +prompt("Ваш бюджет на месяц?: ", "0");
time = prompt("Введите дату в формате YYYY-MM-DD:");

var appData = {
    appDataMoney: money,
    timeData: time,
    expenses: {
        prompt("Введите обязательную статью расходов в этом месяце: ", "Коммунальные услуги: ") : +prompt("Во сколько обойдется?: ", "0")
    }
};

var optionalExpenses = {};
var income = [];
var savings = false;

alert("Ваш бюджет на день: " + money/30);
