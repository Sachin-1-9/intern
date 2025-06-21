let a=["apple","bannana","orange","guoa","pineapple"];
console.log(a[2]);
a.push("grapes");
a.shift();
console.log(a.length);
a.reverse();
a.forEach(num => console.log(num));
let numbers=[1,2,3,4,5];
let sum=0;
for(let i=0;i<numbers.length;i++){
    sum+=numbers[i];
}
console.log(sum);