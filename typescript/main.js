"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("./point");
function log(message) {
    console.log(message);
}
var message = 'Hello TypeScript!';
//one way to call method
log(message);
//another way to call method
var showLog = function (message) {
    console.log(message);
};
//another way to call
var doShowLog = function (message) {
    console.log(message);
};
//the other to call method
var shortDoShowLog = function (message) { return console.log(message); };
doShowLog('doShowLog');
// console.log(doShowLog);
log(message);
//use interface to keep clean code
var drawPoint = function (point) {
    console.log('x:' + point.x);
    console.log('y:' + point.y);
};
drawPoint({
    x: 1,
    y: 2
});
// the parameter and method are highly related, so we need to use class to make it together
//use class attain cohesion between property and method
var pointDistance = new point_1.PointDistance(); //init
var pointDistanceWithValue = new point_1.PointDistance(1, 2); //init
var x = pointDistance.X;
pointDistance.X = 10;
pointDistance.draw();
