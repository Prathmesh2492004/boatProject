let bars = document.getElementById('bars');
let cross = document.getElementById('cross');
let categories = document.getElementById('categories');

bars.addEventListener('click', ()=>{
    bars.style.display='none';
    cross.style.display='flex';
    categories.style.display='';
});

cross.addEventListener('click', ()=>{
    bars.style.display='flex';
    cross.style.display='none';
    categories.style.display='none';
});