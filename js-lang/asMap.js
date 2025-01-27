let arr = [
    {
        name: "zhangsan",
        age: 18,
    },
    {
        name: "lisi",
        age: 19,
    },
    {
        name: "wangwu",
        age: 20,
    },
];

let mapping = [];
for (let i = 0; i < arr.length; i++) {
    let tmp = {};
    tmp[arr[i].name] = arr[i];
    mapping.push(tmp);
}
console.log(mapping);