// Your code goes here

//1st listener - mousedown

let funBusHeader = document.querySelector('h1')

funBusHeader.addEventListener('mousedown', e => {
    funBusHeader.textContent = "DOM Fun Bus Change"
})

//2nd listener - mouseup

funBusHeader.addEventListener('mouseup', e => {
    funBusHeader.textContent = "Fun Bus"
})


//3rd listener - mouseover

funBusHeader.addEventListener('mouseover', e => {
    funBusHeader.style.border = "5px dashed red"
})

//4th listener - mouseout

funBusHeader.addEventListener('mouseout', e => {
    funBusHeader.style.border = "none"
})

//nav section

let nav = document.querySelector('nav')
nav.addEventListener('mouseover', e => {
    nav.style.border = "5px solid orange"
})

nav.addEventListener('mouseout', e => {
    nav.style.border = "none"
})

//img section

let img = document.querySelector('img')

//5th listener - double click

img.addEventListener('dblclick', e => {
    img.style.border = "5px dashed yellow"
})

let h2 = document.querySelector('h2')

//6th listener - mouse enter

h2.addEventListener('mouseenter', e => {
    h2.style.border = "5px solid green";
})

//7th listener - mouse leave

h2.addEventListener('mouseleave', e => {
    e.style.border ="none"
})