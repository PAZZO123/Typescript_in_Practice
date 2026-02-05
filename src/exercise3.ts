/*

2. **Task:** Define an abstract class `Shape2D`:
    - Abstract method `area(): number`;
    
    Then implement:
    
    - `Circle` subclass (property: `radius`);
    - `Rectangle` subclass (properties: `width`, `height`);
    
    Constructors should initialize properties, and `area()` should return correct values.

*/


abstract class Shape2D {
    abstract  area():number
}

class Circle extends Shape2D{
    constructor(public radius:number){
        super()
    }
    area(): number {
        return Math.PI*this.radius**2
    }
}

class Rectangle extends Shape2D{
    constructor(
        private width:number,
        private length:number
    ){
        super()
    }
    area(): number {
        return this.width*this.length
    }

}