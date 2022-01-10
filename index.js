// document.getElementById("count").innerText = 5

// let count = 0
// console.log(count)

// let myage = 21
// console.log(myage)
 //let myage = 21
 //let humandogratio = 7
 //let mydogage = myage * humandogratio
 //console.log(mydogage)

// let bonuspoints = 50
 //bonuspoints += 50
 //bonuspoints -= 75
// bonuspoints +=45
 //console.log(bonuspoints)
 //let message ="You have Three notifications"
// console.log(message)
//let myname = "Mounisha"
//let Greeting ="Hello, my name is "
//let myGreeting = Greeting + myname
//console.log(myGreeting)
let saveEl = document.getElementById("save-el")
 let countEl = document.getElementById("count-el")

 let count = 0

 function increment(){
     count += 1
     countEl.textContent = count
 }

 function save(){
     let display = "  "+count +" - "
     saveEl.textContent += display
     countEl.textContent = 0
     count = 0
 }
 