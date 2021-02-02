let num = 266219;
let multi = 1;
let lang, arr;

arr = (String(num)).split('');
for (let i=0; i<arr.length; i++) {
    multi *= arr[i];
}

console.log(`Произведение цифр числа "${num}" равно ${multi}`);
console.log("Полученное число в третьей степени равно", String(multi ** 3));
console.log("Первые две цифры - ", String(multi ** 3).slice(0,2));


// Lesson 03. Date 2021-02-02

lang = prompt("Введите ru или en"); // переменная принимает только два значения: en / ru

// by if
if (lang == "ru") {
    console.log("1Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье");
    } else if (lang == "en"){
    console.log("1Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday");
    } else {
        console.log("Введено недопустимое значение")
    }
// by switch
switch(lang) {
    case "ru":
        console.log("2Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье");
        break;
    case "en":
        console.log("2Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday");
        break;
    default:
        console.log("Введено недопустимое значение");
    }
// by array
// для  куратора: какой глубины массив - не уточняется, поэтому пошла по меньшему сопротивлению
arr = [ ['ru', '3Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье'],
        ['en', '3Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday']];
lang == arr[0][0] ? console.log(arr[0][1]) : 
    lang == arr[1][0] ? console.log(arr[1][1]) : console.log("Введено недопустимое значение");