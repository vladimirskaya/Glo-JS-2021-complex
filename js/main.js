let num = 266219;
let multi = 1;

arr = (String(num)).split('');
for (let i=0; i<arr.length; i++) {
    multi *= arr[i];
}
console.log(multi);