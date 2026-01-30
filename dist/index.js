"use strict";
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.courseCount = 1;
        this.city = "Kigali";
    }
    //Getter
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCounts() {
        return this.courseCount;
    }
    //Private method
    deleteToken() {
        console.log('Token Deleted');
    }
    //Setter
    set CourseCount(newCount) {
        this.courseCount = newCount;
    }
}
//Inhertance
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCount() {
        this.courseCount = 4;
    }
}
let patty = new User("Patrick", "p@p.com");
//patty.deleteToken()
patty.getAppleEmail;
patty.courseCounts;
patty.CourseCount = 50;
console.log(patty);
//# sourceMappingURL=index.js.map