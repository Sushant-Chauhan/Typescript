// Compile TypeScript to JavaScript: Run the TypeScript compiler (tsc) to transpile the TypeScript code to JavaScript:
// tsc index.ts

// Execute JavaScript: You can then execute the JavaScript file using Node.js:
// node index.js

// tsc index.ts 
// node index.js

let a:number = 5;


console.log("a = ",a);

let b:number = 10; // Example of a different variable name
console.log("b = ",b)

let fullName:string = "jacky";
console.log(fullName);

let lastName:string = "Singh"
console.log(lastName);

const names: string[] = [] ;
names.push("hi")

function Product(a:number,b:number):number {
    return a*b
}

let ans = Product(4,6.5)
console.log("Product=",ans)

let address : [number,string,number];
address=[111,'Mumbai',554455]
console.log("address = ",address)

// let person : {name:string};

//---------- Type alias/shortcut ----------   
type Count = string | number 
let c: Count
c=1;
c="one";
// c=false;

type X = string & number; // never Type variable

const n : [] = [];  // never Type array
// n.push('hi');    // becoz Never Type


// Class 
class Car{
    brand;
    constructor(brand){
        this.brand = brand;
    }
    getBrand(){
        console.log(this.brand)
    }
}
let c1 = new Car('Audi')
c1.getBrand();


// Class - Typescript
class CarX{    // In Typescript
    constructor(public brand){
    }
    getBrand(){
        console.log(this.brand)
    }
}
let c2 = new CarX('BMW')
c2.getBrand();


// Class - TS   
class CarY{
    constructor(private brand){
    }
    getBrand(){
        console.log(this.brand)
    }
}
let c3 = new CarY('Vovlo')
c3.getBrand();


class CarZ{
    constructor(protected brand){
    }
    getBrand(){
        console.log(this.brand)
    }
}
let c4 = new CarZ('Hundai')
c4.getBrand();


// ---------- implements ---------- 
interface ICar {
    brand: string;
    model: string;
}

interface ICar2 {
    release: number;
}

class CarC implements ICar, ICar2{
    constructor(public brand, public model, public release){
    }
}



// ---------- Generics ---------- 
function gen<T>(a: T,b: T) : T[]{
    return [a,b]
}
console.log(gen<string>('1','2'));
console.log(gen<number>(3,4));
console.log(gen<Array<number>>([1,4,8],[24,8,98]));

// tsc index.ts 
// node index.js


