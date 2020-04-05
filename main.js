var AreaOfTriangle = /** @class */ (function () {
    function AreaOfTriangle(base, height) {
        this.base = base;
        this.height = height;
    }
    AreaOfTriangle.prototype.areaTriangle = function () {
        this.area = (this.base * this.height) / 2;
        console.log("The area of the triangle :" + this.area);
        window.document.body.textContent += "" + this.area;
    };
    return AreaOfTriangle;
}());
var areaOfTriangle = new AreaOfTriangle(5, 6);
areaOfTriangle.areaTriangle();
