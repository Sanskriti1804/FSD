var n = 5;
console.log(n);

var n = 20;     //reassigning is allowed
console.log(n);

let n = 10;
n = 20;         //val can be updated
//let n = 20    //cant be redeclared
console.log(n);

let x = "10";
let y = 5;
let z = "hiii";
console.log(x+y);       //"105"
//15
console.log(Number(x)+y);
console.log(+x+y);

console.log(z + y);
console.log(z + x);



const n = 100;
//n = 200   //cant be redeclared or updated
console.log(n);

console.log(null === undefined)
//Result: false     

console.log(5>3>2)
//Result: false     //JS eval L to R (5>3 = T; T>2 = false  )

console.log("5" === 5)
//Result: false     //=== - checks both value and type

console.log([1, 2] == [1, 2]) 
//Result: false     //different reference

