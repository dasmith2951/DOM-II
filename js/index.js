// Your code goes here

window.onload = function() {

    let body = document.querySelector('body')

    //1st listener - key up
    
    body.addEventListener('keyup', e => {
        body.style.backgroundColor = '#ff3333'
    })
    
    //2nd listener - key down
    
    body.addEventListener('keydown', e => {
        body.style.backgroundColor = '#ff5c33'
    })
    
    //3rd listener - mousedown
    
    let funBusHeader = document.querySelector('h1')
    
    funBusHeader.addEventListener('mousedown', e => {
        funBusHeader.textContent = "DOM Fun Bus Change"
    })
    
    //4th listener - mouseup
    
    funBusHeader.addEventListener('mouseup', e => {
        funBusHeader.textContent = "Fun Bus"
    })
    
    
    //5th listener - mouseover
    
    funBusHeader.addEventListener('mouseover', e => {
        funBusHeader.style.border = "5px dashed red"
    })
    
    //6th listener - mouseout
    
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
    
    nav.addEventListener('click', e => {
        e.preventDefault()
    })
    
    //img section
    
    let img = document.querySelector('img')
    
    //7th listener - double click
    
    img.addEventListener('dblclick', e => {
        img.style.border = "5px dashed yellow"
    })
    
    let h2 = document.querySelector('h2')
    
    //8th listener - mouse enter
    
    h2.addEventListener('mouseenter', e => {
        h2.style.border = "5px solid green";
    })
    
    //9th listener - mouse leave
    
    h2.addEventListener('mouseleave', e => {
        h2.style.border ="none"
    })
    
    let btn = document.querySelector('.btn')
    
    btn.addEventListener('auxclick', e => {
        e.style.border = " 3px solid green"
    })
    
    let propagation = document.querySelector('#text')
    
    propagation[0].addEventListener('mousedown', e => {
        propagation[0].style.border = "3px dashed white"
        e.stopPropagation()
    })

}