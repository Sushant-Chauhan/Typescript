// Compile TypeScript to JavaScript: Run the TypeScript compiler (tsc) to transpile the TypeScript code to JavaScript:
// tsc index.ts
// Execute JavaScript: You can then execute the JavaScript file using Node.js:
// node index.js
// tsc index.ts 
// node index.js
var a = 5;
console.log("a = ", a);
var b = 10; // Example of a different variable name
console.log("b = ", b);
var fullName = "jacky";
console.log(fullName);
var lastName = "Singh";
console.log(lastName);
var names = [];
names.push("hi");
function Product(a, b) {
    return a * b;
}
var ans = Product(4, 6.5);
console.log("Product=", ans);
var address;
address = [111, 'Mumbai', 554455];
console.log("address = ", address);
var c;
c = 1;
c = "one";
var n = []; // never Type array
// n.push('hi');    // becoz Never Type
// Class 
var Car = /** @class */ (function () {
    function Car(brand) {
        this.brand = brand;
    }
    Car.prototype.getBrand = function () {
        console.log(this.brand);
    };
    return Car;
}());
var c1 = new Car('Audi');
c1.getBrand();
// Class - Typescript
var CarX = /** @class */ (function () {
    function CarX(brand) {
        this.brand = brand;
    }
    CarX.prototype.getBrand = function () {
        console.log(this.brand);
    };
    return CarX;
}());
var c2 = new CarX('BMW');
c2.getBrand();
// Class - TS   
var CarY = /** @class */ (function () {
    function CarY(brand) {
        this.brand = brand;
    }
    CarY.prototype.getBrand = function () {
        console.log(this.brand);
    };
    return CarY;
}());
var c3 = new CarY('Vovlo');
c3.getBrand();
var CarZ = /** @class */ (function () {
    function CarZ(brand) {
        this.brand = brand;
    }
    CarZ.prototype.getBrand = function () {
        console.log(this.brand);
    };
    return CarZ;
}());
var c4 = new CarZ('Hundai');
c4.getBrand();
var CarC = /** @class */ (function () {
    function CarC(brand, model, release) {
        this.brand = brand;
        this.model = model;
        this.release = release;
    }
    return CarC;
}());
// Generics
function gen(a, b) {
    return [a, b];
}
console.log(gen('1', '2'));
console.log(gen(3, 4));
console.log(gen([1, 4, 8], [24, 8, 98]));
// tsc index.ts 
// node index.js
