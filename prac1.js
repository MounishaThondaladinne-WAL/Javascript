let firstname = "Mounisha"
let Lastname = "Thondaladinne"
let fullname = firstname + Lastname
console.log(fullname)

function greet(){
    let name ="Linda"
    let Greeting = "Hi there, "
    let greets = Greeting + name + "!"
    console.log(greets)
} 
greet()

let mypoints = 3

function add3points(){
    mypoints += 3
}
function remove1point(){
    mypoints -= 1
}

add3points()
remove1point()
add3points()
remove1point()
add3points()

console.log(mypoints)


console.log("2" + 2) // "22" 
console.log(11 + 7) // 18
console.log(6 + "5") // "65"
console.log("My points: " + 5 + 9) // "My points :59"
console.log(2 + 2) // 4
console.log("11" + "14") //"1114"

errorEl = document.getElementById("error")
function purchase(){
errorEl.textContent ="Something went wrong ,please try again"
}