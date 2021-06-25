const back = document.getElementById('id1');
back.addEventListener('click',()=>{
    window.history.back();
})
const forward = document.getElementById('id2');
forward.addEventListener('click',()=>{
    window.history.forward();
})