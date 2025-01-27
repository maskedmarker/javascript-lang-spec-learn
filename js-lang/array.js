// array的各种操作
let newProductCodes = ['a', 'b'];
let oldProductCodes = ['a0', 'b0'];
oldProductCodes.push(...newProductCodes);
console.log(oldProductCodes);

console.log("-----------------------------------");
let productIds = ['a', 'b'];
let op = {
    prdIds: [productIds]
}
console.log(op);

let list = [
    {
        name: "zhangsan01",
        age: 18,
    },
    {
        name: "zhangsan02",
        age: 19,
    },
    {
        name: "zhangsan03",
        age: 20,
    },
]
let names = list.map(i => i.name);
console.log(names);

console.log("--------------------------------------");

let subjects = ['001', '002'];
let capitalModes = ['DT', 'DN'];
let productCodes = ['P001', 'P002', 'P003'];
let ids = [];
for (let i = 0; i < subjects.length; i++) {
    for (let j = 0; j < capitalModes.length; j++) {
        for (let k = 0; k < productCodes.length; k++) {
            let id = subjects[i] + '|' + capitalModes[j] + '|' + productCodes[k];
            ids.push(id);
        }
    }
}
console.log(ids);

// 快速实现将数组添加到另一个数组
let array1 = [1, 2, 3];
let array2 = ['a', 'b'];
array1 = array1.concat(array2)
console.log(array1); // [ 1, 2, 3, 'a', 'b' ]

let array3 = ['c', 'd'];
array3.push(...array2);
console.log(array3);
