const submit = document.querySelector('#submit');
const buttons = document.querySelectorAll('.buttons button');
const box1 = document.querySelector('#box-1');
const box2 = document.querySelector('#box-2');
const selectionMsg = document.querySelector('#selection-msg');
const errorMsg = document.querySelector('#error-msg');

let selected = '';

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (e)=> {
       removeSelect()
        selected = e.target.textContent
        e.target.classList.add("selected")
        
    })
}


function removeSelect() {
    buttons.forEach(btn => {
        btn.classList.remove('selected')
    })
}

submit.addEventListener('click', ()=> {
    if (selected === '') {
        addButtonErrors()
        setTimeout(()=> {
            removeButtonErrors()
        },2000)
        return
    }
    
    selectionMsg.textContent = `You selected ${selected} out of 5`
   box1.classList.add('d-none');
   box2.classList.remove('d-none');
})

function addButtonErrors() {
    errorMsg.classList.remove('d-none')
    buttons.forEach(btn => {
        btn.classList.add('error')
    })
    
}

function removeButtonErrors() {
    errorMsg.classList.add('d-none')
    buttons.forEach(btn => {
        btn.classList.remove('error')
    })
}
