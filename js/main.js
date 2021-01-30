let num = 266219;
let multi = 1;

arr = (String(num)).split('');
for (let i=0; i<arr.length; i++) {
    multi *= arr[i];
}

console.log(`Произведение цифр числа "${num}" равно ${multi}`);
console.log("Полученное число в третьей степени равно", String(multi ** 3));
console.log("Первая цифра - ", String(multi ** 3)[0]);
console.log("Вторая цифра - ", String(multi ** 3)[1]);