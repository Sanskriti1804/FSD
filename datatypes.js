//onject - key-val pair
let obj = {
    name : "Amit",
    age : 25
};

console.log(obj);
console.log(obj.name);
console.log(obj.age);

let people = {
    Amit : "Mumbai",
    Rahul : "Delhi",
    Priya : "Pune"
}

console.log(people["Priya"])
// console.log(people[Priya])       //wrong way

//array 
let arr = ["red", "green", "blue"];

console.log(arr);
console.log(arr[1]);

let users = [
    {name : "Amit", city : "Delhi"},
    {name : "Rahul", city : "Mumbai"},
    {name : "Prioya", city : "Delhi"},
]

console.log(users[0].city)

users.forEach(
    user => {
        console.log(user.name, user.city)
    }
)

//function 
function fun(){
    console.log("pagal max");
}

fun();