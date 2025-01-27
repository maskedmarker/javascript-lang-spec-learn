let id = 'cat|mode|prd001';
let prdCode = id.split("|")[2];
console.log(prdCode);


let index = id.lastIndexOf("|");
console.log(index);
console.log(id.substr(0, index));