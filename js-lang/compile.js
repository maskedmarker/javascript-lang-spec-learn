/*
 * 测试严格模式下，LHS/RHS的异常
*/

// 引用undefined的变量，会报ReferenceError
function hello(a) {
    'use strict';
    console.log(a + b); // ReferenceError: b is not defined
}

let a = "world";
hello(a);

// 如下代码在浏览器非严格模式下执行
function hello2(a) {
    console.log(a + b); // ReferenceError: b is not defined
}
let a = "world";
hello(a);

console.log('---------------------------------------------------------------');