const btn = document.getElementById('button');

const rainbow = ['red','orange','yellow','green','blue','rebeccapurple','violet','gold'];

function change() {
document.body.style.background = rainbow[Math.floor(8*Math.random())];
}
btn.addEventListener('click', change);