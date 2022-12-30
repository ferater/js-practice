const acordions = document.querySelectorAll('.acordion');
// console.log(acordions);

acordions.forEach(acordion => {
    acordion.addEventListener('click', e => {
        removeActive();
        acordion.classList.add('active');
    })
})

const removeActive = function(){
acordions.forEach(acordion => {
    acordion.classList.remove('active');
} )
}
