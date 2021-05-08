function log(message){
    console.log(message);
}
var message = 'Hello TypeScript!';

//one way to call method
log(message);
//another way to call method
let showLog = function(message){
    console.log(message);
}
//another way to call
let doShowLog = (message)=>{
    console.log(message);
}
//the other to call method
let shortDoShowLog = (message)=>console.log(message);

doShowLog('doShowLog');
// console.log(doShowLog);


log(message);

//use interface
interface Point{
    x: number,
    y: number
}

let drawPoint = (point : Point)=>{
    console.log('x:' + point.x);
    console.log('y:' + point.y);
}
drawPoint({
    x:1,
    y:2
});

let text = 'abc';
// let endWithC = (<string>text).endsWith('c'); // return boolean and conver it to string
// let endWithC = String(text.endsWith('c')) // return boolean and conver it to string
// let endWithCOtherWay = String(text.endsWith('c')) // return boolean and conver it to string

