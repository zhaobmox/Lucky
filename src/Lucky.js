/**
 * Created by zhaobm on 2016/4/19.
 */

var Lucky = {}

//定义命名空间
var lucky = {};

lucky.Hello = new function () {
    var self = this;
    var name = 'world';
    self.sayHello = function (_name) {
        return 'Hello ' + (_name || name);
    };
};

lucky.Hello2 = (function () {
    var name = 'world';
    var sayHello = function (_name) {
        return 'Hello ' + (_name || name);
    };
    return {
        sayHello: sayHello
    };
}());

