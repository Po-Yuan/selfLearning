import {PointDistance} from './point'; // in angular use library name , such like @angular/core
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
//use interface to keep clean code
let drawPoint = (point : Point)=>{
    console.log('x:' + point.x);
    console.log('y:' + point.y);
}
drawPoint({
    x:1,
    y:2
});

// the parameter and method are highly related, so we need to use class to make it together
//use class attain cohesion between property and method

let pointDistance : PointDistance = new PointDistance();  //init
let pointDistanceWithValue : PointDistance = new PointDistance(1,2);  //init
let x = pointDistance.X;
pointDistance.X = 10;
pointDistance.draw();

