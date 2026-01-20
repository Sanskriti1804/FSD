function greet(name = "babe"){
    console.log("hii" + name);
}

greet();
greet("babyy");

function add(a,b){
    return a+b;
}
let res = add(5,10);
console.log(res);

const square = n => n*n;
console.log(square(6));

const sum = (a,b) => {
    let c = a+b;
    return c;
}

let ress = sum(1,0)
console.log(ress)