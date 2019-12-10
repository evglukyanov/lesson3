'use strict';


let money = prompt('Ваш бюджет на месяц?'),
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appDate = {
    budget: money,
    expenses : {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
};

for (let i = 0; i < 2; i++) {
    let a = +prompt('Введите обязательную статью расходов в этом  месяце', ''),
        b = prompt('Во сколько это обойдется?', '');

    if (typeof(a) ==='string' && (typeof(a)) != null && (typeof(b)) != null 
        && a != '' && b != '' && a.length < 50) {
            console.log('done');
            appDate.expenses [a] = b;
        } else {
            console.log ("bad result");
            i--;
            break;
    }
};

appDate.moneyPerDay = appDate.budget/30;
alert('Ежедневный бюджет: ' + appDate.moneyPerDay);

    if (appDate.moneyPerDay < 1000) {
        console.log('Минимальный уровень достатка');
    } else if (appDate.moneyPerDay > 1000 && appDate.moneyPerDay < 2000) {
        console.log('Средний уровень достатка');
    } else if (appDate.moneyPerDay > 2000) {
        console.log('Высокий уровень достатка');
    } else {
        console.log('Произошла какая-то ошибка');
    };

