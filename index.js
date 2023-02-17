// document.getElementById("people count").innerText = 4
//javaScript model
//let count= 5
//count= count + 1
//console.log(count)
//initialize the count 0
//increment the count variable when the button is clicked
//change the count-el in the HTML to reflect the new count.
let saveEl = document.getElementById("save-el")
let peoplecount = document.getElementById("people count")//passing arguments

// console.log(peoplecount)

let count = 0
                                                               
function increment(){                                           //increment function
    count += 1
    peoplecount.textContent = count
}
                                                                //save function
function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    peoplecount.textContent = 0
    count = 0
}       

//textContent creates spaces after ever digit 

//save(
/*// Grab the welcome-el paragraph and store it in a variable called welcomeEl
let welcomeEl = document.getElementById("welcome-el")

// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page

let name = "Per Harald Borgen"
let greeting = "Welcome back "

// Render the welcome message using welcomeEl.innerText
welcomeEl.innerText = greeting + name
*/ 

//let name = "rick"
//let greeting = "Hi, my name is "
//let myGreeting = greeting + name
//console.log(myGreeting)

