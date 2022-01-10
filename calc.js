let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let spanEl = document.getElementById("sum-el")
function add(){
let addnums = num1+num2
spanEl.textContent = "Result: "+addnums
}
function sub(){
    let subnums = num1-num2
    spanEl.textContent ="Result: "+subnums
    }
function mul(){
    let mulnums = num1*num2
    spanEl.textContent ="Result: "+mulnums
    }
    function div(){
        let divnums = num1/num2
        spanEl.textContent ="Result: "+divnums
        }


