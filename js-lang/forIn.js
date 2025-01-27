// for in statement key is always String
let arr = [
    {name: "zhangsan", age: 12},
    {name: "lisi", age: 13},
    {name: "wangwu", age: 14}
]

for (let arrKey in arr) {
    console.log(arrKey);
    console.log(typeof arrKey);
}

console.log("------------------------")
console.log(typeof null);
console.log(typeof false);
console.log(typeof !!0);
console.log(typeof !!'');