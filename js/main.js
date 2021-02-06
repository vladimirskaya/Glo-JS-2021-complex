'use strict';

/*let num = 266219;
let multi = 1;
let lang, arr, namePerson;

arr = (String(num)).split('');
for (let i=0; i<arr.length; i++) {
    multi *= arr[i];
}

console.log(`Произведение цифр числа "${num}" равно ${multi}`);
console.log("Полученное число в третьей степени равно", String(multi ** 3));
console.log("Первые две цифры - ", String(multi ** 3).slice(0,2));


// Lesson 03. Date 2021-02-02
//Part 1
lang = prompt("Введите ru или en"); // переменная принимает только два значения: en / ru

// by if
if (lang == "ru") {
    console.log("Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье");
    } else if (lang == "en"){
    console.log("Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday");
    } else {
        console.log("Введено недопустимое значение")
    }

// by switch
switch(lang) {
    case "ru":
        console.log("Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье");
        break;
    case "en":
        console.log("Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday");
        break;
    default:
        console.log("Введено недопустимое значение");
    }

// by array
/* для  куратора: какой глубины массив - не уточняется, поэтому пошла по меньшему сопротивлению, но
если по условию каждый день недели является отдельным элементом, то, думаю, что вместо console.log
можно вызвать функцию вывода элементов массива. */
/*arr = [ ['ru', 'Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье'],
        ['en', 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday']];
lang == arr[0][0] ? console.log(arr[0][1]) : 
    lang == arr[1][0] ? console.log(arr[1][1]) : console.log("Введено недопустимое значение");

// Part 2
namePerson = prompt("Введите имя: ");
(namePerson=='Артем') ? console.log('директор') : 
    (namePerson=='Максим') ? console.log('преподаватель') : console.log('студент');

*/

    //  Lesson 04
/*let shortyFunction = function(str) {
    if (typeof(str) !== 'string') {
        return("В качестве аргумента передана не строка.")
    } else {
        if (str.length < 30){
            return(str.trim());
        } else {
            return(str.trim().slice(0,30) + '...');
        }
    }
}*/

/*let example = ["It is a long established fact that a reader will be дayout. ",
                "                        ook like readable English. Many",
                "default model text,               'lorem ipsum' will uncove",
                "       many web sites      "]
for (let i = 0; i <example.length; i++) {
    console.log(shortyFunction(example[i]));
}
//console.log(example, example.length, typeof (example));*/


//          Lesson 05
let arr = ['1234', '23345', '456732', '343443', '2222', '87878', '676767'];
for (let value of arr) {
    if (value[0] == 2 || value[0] == 4) {
        console.log(value);
    }
}

//Вывести простые числа
//первый способ
for (let i = 0; i < 101; i++) {
    if (((i === 1) || (i === 2) || (i === 3) || (i === 5) || (i === 7)) || 
            ((i % 2 !== 0) && (i % 3 !== 0) && (i % 5 !== 0) && (i % 7 !==0))) {
        console.log(`Простое число ${i}. Делители этого числа: 1 и ${i}.`);
    }
}

//Второй способ
let amount;
for (let i = 2; i < 101; i++){
    amount = 0;
    //console.log(i);
    for (let j = 1; j < i; j++) {
        //console.log("j = ", j); }
        if (i % j === 0) {
            amount += 1;
            //console.log(`${i} % ${j}  --- amount = ${amount}`);
        }
    } 
    if (amount === 1) {
        console.log(`Простое число ${i}. Делители этого числа: 1 и ${i}.`);
    }
}