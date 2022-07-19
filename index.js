let counter = document.getElementById('counter');
let btnCount = document.getElementById('btnCounter');
let count = 0;
let reset;

btnCount.addEventListener('mouseout', () => {
    reset = setTimeout(() => {
        count = 0;
        counter.innerText = count;
    }, 5000);
});

btnCount.addEventListener('click', () => {
    clearTimeout(reset);
    count += 1;
    counter.innerText = count;
});

