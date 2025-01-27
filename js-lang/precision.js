let a = 0.1;
let b = 0.2;
let c = 0.3;
console.log((a + b) == c);

console.log((a + b) * 10000000000);
console.log("--------------------------------------");
// 整数的精度问题
console.log(Number.MAX_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(19571992547450991); //=> 19571992547450990
console.log(19571992547450991===19571992547450992); //=> true


console.log("--------------------------------------");
/*

let e = 123456789.22
let f = 0.1
let g = 123456789.32
console.log(Math.abs((e + f - g)) < 0.000001 );

let e = 0.1
let f = 0.2
let g = 0.3
console.log(Math.abs((e + f - g)) < 0.000001 );

let e = 0.7
let f = 0.1
let g = 0.8
console.log(Math.abs((e + f - g)) < 0.000001 );

let e = 0.2
let f = 0.4
let g = 0.6
console.log(Math.abs((e + f - g)));
console.log(Math.abs((e + f - g)) < 0.000001 );

let e = 1.5
let f = 1.2
let g = 0.3
console.log(Math.abs((e - f - g)));
console.log(Math.abs((e - f - g)) <= 0.000001);
console.log(Math.abs((e - f - g)) <= 0.0000000000000001);

let e = 0.3
let f = 0.2
let g = 0.1
console.log(Math.abs((e - f - g)));
console.log(Math.abs((e - f - g)) <= 0.000001);
console.log(Math.abs((e - f - g)) <= 0.0000000000000001);

let e = 0.3
let f = 0.2
let g = 0.1
console.log(Math.abs((e - f - g)));
console.log(Math.abs((e - f - g)) <= 0.000001);
console.log(Math.abs((e - f - g)) <= 0.0000000000000001);
*/

let e = 0.2
let f = 0.4
let g = 0.6
console.log(Math.abs((e + f - g)));
console.log(Math.abs((e + f - g)) < 0.000001 );

console.log(0.1);
console.log(0.1*1000);
console.log(2.22);
console.log(2.22*1000);
console.log(2.32*1000);



