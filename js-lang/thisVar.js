// do not use strict
// 'use strict';

// this 是一个特殊的变量,当function被当作method调用时,this就归属于该对象
// 否则this指向全局变量

let name = "this variable is named by name, do not have owner object";
let obj = {
    name: "this is the name of obj",
    method: function () {
        console.log(this.name);
        let self = this;

        function fn() {
            console.log("started invocation of fn");
            console.log(this);
            console.log(self.name);
            console.log("ended invocation of fn");
        }

        fn();
    }
}

obj.method();
