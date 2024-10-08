interface Shape{
    area(): number
; }

class Rectangle implements Shape {
    
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height

    }
    area(){
        return this.width * this.height
    }
}

const rectangle = new Rectangle(4, 5);

rectangle.area();
