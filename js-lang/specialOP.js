/**
 * js中对比较陌生的标识
  */

// 三个点（…）真名叫扩展运算符（spread operator），是在ES6中新增加的内容，它可以在函数调用/数组构造时，将数组表达式或者string在语法层面展开；
// 还可以在构造字面量对象时将对象表达式按照key-value的方式展开
(function () {
    function add (a, b){
        return a+b
    }

    let arg = [12, 45];
    add(...arg)
})();


// 作为函数参数调用
(function () {
    let a = [1, 2];
    let b = [3,4]
    Array.prototype.push.apply(a,b)
    console.log(a)   // 1,2,3,4
    //等价于
    a.push(...b)
})();



// 合并数组
(function () {
    let a = [1,2]
    let b = [3,4]
    let c = [...a, ...b] // c = [1,2,3,4]
    console.log(c);
})();


// 在构造字面量对象时将对象表达式按照key-value的方式展开
(function () {
    let xiaoMing = {
        name: 'xiaoming',
        age: 18
    };

    let laoWang = {...xiaoMing};
    console.log('laoWang >>>> ', laoWang);
    laoWang = {xiaoming: xiaoMing};
    console.log('laoWang >>>> ', laoWang);
})();
