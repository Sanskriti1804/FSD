const day = "Monday";
switch(day){
    case "Monday": console.log("1");
    break;
    case "Wednesday": console.log("2");
    break;
    default : console.log("regular day");
}

//conditional operator 
let a = 10;
console.log(a===5 ? "a equals to 5" : "a not equal to 5")

//for loop
for(let i = 1; i<=3; i++){
    console.log("count", i);
}

//for in - itertes over key 
const fruit = {a : "apple", b : "banana", c : "chiku"};
for(let key in fruit){
    console.log(key, ":", fruit[key]);
}

//for each looop
const num = [1,2,3,4,5];

num.forEach(function(n){
    console.log(n);
});


//while loop
let i = 0;
while( i <3){
    console.log("Number" , i);
    i++;
}