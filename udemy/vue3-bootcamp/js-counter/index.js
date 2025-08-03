const countEl = document.getElementById('count');
const minusBtn = document.getElementById('subtract');
const addBtn = document.getElementById('add');
let count = 0;

countEl.innerText = count;

minusBtn.addEventListener('click', () => {
    count--;
    countEl.innerText = count;
});

addBtn.addEventListener('click', () => {
    count++;
    countEl.innerText = count;
});
