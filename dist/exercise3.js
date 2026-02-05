"use strict";
/*

2. **Task:** Define an abstract class `Shape2D`:
    - Abstract method `area(): number`;
    
    Then implement:
    
    - `Circle` subclass (property: `radius`);
    - `Rectangle` subclass (properties: `width`, `height`);
    
    Constructors should initialize properties, and `area()` should return correct values.

*/
class Shape2D {
}
class Circle extends Shape2D {
    constructor(r) {
        super();
        this.r = r;
    }
    get Radius() {
        return this.r;
    }
    area() {
        return Math.PI * this.r ** 2;
    }
}
class Rectangle extends Shape2D {
    constructor(width, length) {
        super();
        this.width = width;
        this.length = length;
    }
    area() {
        return this.width * this.length;
    }
}
let list = [
    new Circle(2),
    new Rectangle(2, 5)
];
list.forEach(function (shape) {
    console.log(shape.area());
});
//# sourceMappingURL=exercise3.js.map