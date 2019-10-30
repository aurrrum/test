let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?: ", "");
    time = prompt("Введите дату в формате YYYY-MM-DD:", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?: ", "");
    }
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {

            let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
                b = +prompt("Во сколько обойдется?", "");
    
            if (typeof(a) === "string" && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
                console.log("correct input");
                appData.expenses[a] = b;
            } else {
                i = i-1;
            }
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget/30).toFixed(1);
    alert("Ваш бюджет на день: " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log("min");
        } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
            console.log("avg");
        } else if (appData.moneyPerDay >= 2000) {
            console.log("max");
        } else {
            console.log("err");
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход с вашего депозита составляет " + appData.monthIncome + " руб. в месяц");
        }
    },
    chooseOptExpenses: function() {
        for (let i = 1; i < 3; i++) {
            let opt = prompt("Статья необязательных расходов?", "");
            appData.optionalExpenses[i] = opt;
        }
    },
    chooseIncome: function() {
        let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)");
        appData.income = items.split(", ");
        appData.income.push(prompt("Может что-то еще?", ""));
        appData.income.sort();
    }
};

appData.chooseExpenses();
appData.detectDayBudget(); 
appData.detectLevel();
appData.checkSavings();
appData.chooseOptExpenses();
appData.chooseIncome();

console.log(appData);