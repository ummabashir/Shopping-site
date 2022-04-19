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

