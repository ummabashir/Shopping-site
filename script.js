let bar = document.getElementById('bar');
let close = document.getElementById('close');
let nav = document.getElementById('navbar');

//navbar
if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

//product img shop details
let MainImg = document.getElementById('MainImg');

let smallImg = document.getElementsByClassName('small-img');

smallImg[0].onclick = function(){
    MainImg.src = smallImg[0].src;
}
smallImg[1].onclick = function(){
    MainImg.src = smallImg[1].src;
}
smallImg[2].onclick = function(){
    MainImg.src = smallImg[2].src;
}
smallImg[3].onclick = function(){
    MainImg.src = smallImg[3].src;
}