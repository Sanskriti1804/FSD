let arr = [1,5,10]
let a = []
let b = new Array(10,20,30);

arr.toString()

arr.join("..")

arr.pop()   //removes last element - updates the original array and returns the popped value

arr.push(8)     //pushes el at the end

arr.shift()     //removes first el and returns it

arr.unshift()       //add el to the beginning 

delete arr[2]

//for loop
//forEach()
b.forEach((el) =>{
    console.log(el);
})

//map() - same as forEach() - but creates a new array by transforming each elements of the original array
const c = b.map((el) =>{
    return el * 5;
})
console.log(c);