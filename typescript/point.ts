
export class PointDistance{ //export module
    //private x: number;
    //private y:number;
    /**
     *
     */
    constructor(public _x?:number,private y?:number) { //add private to declare parameter
        this._x = _x;
        this.y = y;
    }
    draw(){
        console.log("x:" + this._x + ",y:" + this.y);
    }

    getDistance(another:PointDistance){
        //...
    }
    get X(){
        return this._x;
    }
    set X(Value){
        if(Value<0)
            throw new Error("value can not be less than 0");            
        this._x = Value;
    }
}