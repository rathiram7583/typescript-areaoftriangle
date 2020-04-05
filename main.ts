class AreaOfTriangle{
    base :number;
    height:number;
    area:number ;

    constructor(base:number,height:number)
    {
        this.base=base;
        this.height=height;
    }


     areaTriangle() {
          this.area =(this.base*this.height)/2;
          console.log("The area of the triangle :"+this.area);
          window.document.body.textContent +=`${this.area}`;
    }

}
var areaOfTriangle = new AreaOfTriangle(5,6);
areaOfTriangle.areaTriangle();
