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
var drawPoint = function (point) {
    console.log('x:' + point.x);
    console.log('y:' + point.y);
};
drawPoint({
    x: 1,
    y: 2
});
var text = 'abc';
// let endWithC = (<string>text).endsWith('c'); // return boolean and conver it to string
// let endWithC = String(text.endsWith('c')) // return boolean and conver it to string
// let endWithCOtherWay = String(text.endsWith('c')) // return boolean and conver it to string
