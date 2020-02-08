document.addEventListener("click", (e) => {
    if (e.target.closest('.dropdown') !== null) {
        const path = e.target.closest('.dropdown');
        if (e.target.className == "arrow_direction_bottom") {
            path.classList.toggle("show");
            let totalCounter = 0;
            dropdown(path, totalCounter);  
        } 
    }
})

function dropdown(path, totalCounter){
    path.querySelectorAll('.menu__option').forEach(el => {
        el.addEventListener('click', (e)=> {
            let counter = el.querySelector('.counter-item').value;
            if (e.target == el.querySelector('.counter__increment') && counter<4) {
                counter++;
                el.querySelector('.counter-item').value = counter;
                totalCounter++;
            }
            if (e.target == el.querySelector('.counter__decrement') && counter>0) {
                counter--;
                el.querySelector('.counter-item').value = counter;
                totalCounter--;
            }
            path.querySelector('.dropdown__selection p').textContent = titleCounter(totalCounter);
        })
    })
}

function titleCounter(total) {
    let word ="";
    let title = "Количество гостей";
    switch(total) {
        case 0:
            return title;
        case 1:
            word= "гость";
            title = `${total} ${word}`;
            break;
        case 2:
        case 3:
        case 4:
            word= "гостя";
            title = `${total} ${word}`;
            break;
        default:
            word= "гостей";
            title = `${total} ${word}`;
        
    }
    return title;
}
