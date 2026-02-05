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
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius ** 2;
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
//# sourceMappingURL=exercise3.js.map