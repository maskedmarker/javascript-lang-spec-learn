/**
 * js中对象属性的声明
  */

let name = "xiaoming";
let age = 18;

function goFn() {
    console.log("go go go!!");
}
// literal声明对象，直接引用变量，属性名与变量同名
let obj = {
    name,
    age,
    goFn
}
console.log(obj);



