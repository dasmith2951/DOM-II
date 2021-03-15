// Your code goes here

//1st & 2nd listeners. body - keyup/keydown styling

let body = document.querySelector('body');

body.addEventListener('keydown', (e) => {
    e.target.style.backgroundColor = '#ff3333';
});

body.addEventListener('keyup', (e) => {
    e.target.style.backgroundColor = '#ff5c33';
});

//3rd listener - double-click buttons styling

let buttons = document.querySelectorAll('.btn');

buttons.forEach(element => {
    element.addEventListener('dblclick', () => {
        element.style.color = '#ffcc00';
        element.style.border = '2px dashed purple';
        element.style.width = '85px';
        element.style.height = '25px';
    })
});

//4th listener - right-click images styling

let img = document.querySelectorAll('img');

img.forEach(element => {
    element.addEventListener('auxclick', () => {
        element.style.border = '4mm ridge rgba(170, 50, 220, .6)';
    })
});