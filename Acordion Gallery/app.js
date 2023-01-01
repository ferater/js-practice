const acordions = document.querySelectorAll('.acordion');
// console.log(acordions);

acordions.forEach(acordion => {
    acordion.addEventListener('click', e => {
        removeActive(acordion);
        acordion.classList.add('active');
        // acordion.classList.toggle('active');
    })
})

const removeActive = function (acordion) {
    acordions.forEach(item => {
        if (item !== acordion) {
            item.classList.remove('active');
        }
    })
}
