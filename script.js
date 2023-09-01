let modal = document.querySelector('#modal');
let more = document.querySelector('#more');
let less = document.querySelector('#modalBtn');
let empty = document.querySelector('#heartEmpty');
let full = document.querySelector('#heartFull');

more.onclick = open;
less.onclick = close;
full.onclick = heart;

function open() {
    modal.classList.add('h-full', 'top-10');
    modal.classList.remove('h-0', 'top-full');

}

function close() {
    modal.classList.add('h-0', 'top-full');
    modal.classList.remove('h-full', 'top-10');

}

function heart() {
    full.classList.toggle('opacity-0');
}