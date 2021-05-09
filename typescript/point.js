"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PointDistance = void 0;
var PointDistance = /** @class */ (function () {
    //private x: number;
    //private y:number;
    /**
     *
     */
    function PointDistance(_x, y) {
        this._x = _x;
        this.y = y;
        this._x = _x;
        this.y = y;
    }
    PointDistance.prototype.draw = function () {
        console.log("x:" + this._x + ",y:" + this.y);
    };
    PointDistance.prototype.getDistance = function (another) {
        //...
    };
    Object.defineProperty(PointDistance.prototype, "X", {
        get: function () {
            return this._x;
        },
        set: function (Value) {
            if (Value < 0)
                throw new Error("value can not be less than 0");
            this._x = Value;
        },
        enumerable: false,
        configurable: true
    });
    return PointDistance;
}());
exports.PointDistance = PointDistance;
