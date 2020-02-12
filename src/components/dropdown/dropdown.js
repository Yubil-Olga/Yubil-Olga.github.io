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
            if (totalCounter>0 && path.querySelectorAll('.clean').length>0) {
                path.querySelector('.clean').style.visibility="visible";
            }
            if (totalCounter == 0 && path.querySelectorAll('.clean').length>0) {
                path.querySelector('.clean').style.visibility="hidden";
            }
            //path.querySelector('.dropdown__title').textContent = titleCounter(totalCounter, path);
            path.querySelector('.input_default').textContent = titleCounter(totalCounter, path);
            
        })
    })
    if (path.querySelectorAll('.clean').length>0) {
        path.querySelector('.clean').addEventListener('click', () => {
            totalCounter = 0;
            path.querySelector('.dropdown__title').textContent = titleCounter(totalCounter, path);
            path.querySelector('.clean').style.visibility="hidden";
            path.querySelectorAll('.counter-item').forEach((item)=> {
                item.value = 0;
            })
        })
    } 
}

function titleCounter(total, path) {
    let word ="";
    let title="";
    if (path.querySelector('.dropdown__title').classList.contains('room')){
        path.querySelectorAll('.menu__option').forEach(el => {
            title += el.querySelector('.counter-item').value +" "+ el.querySelector('.option__title').textContent + ", ";
        })
        if (total ==0) {
            title= "Сколько комнат"
        }
    }
    else {
        title = "Сколько гостей";
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
    }
    return title;
}
