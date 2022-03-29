const form = document.querySelector('.form');
const button = document.querySelectorAll('button');
const bill = document.querySelector('.bill')
const custom = document.querySelector('#custom')
const people = document.querySelector('#people')






// const percent = null;
// console.log(billvalue)

const buttons = Array.from(button);

buttons.forEach(button =>{
    button.addEventListener('click', e =>{
        e.preventDefault();
        const percent = e.target.value
        console.log(percent)
    })
})





// console.log(buttons)

form.addEventListener('keyup',e =>{
    e.preventDefault();
    const billvalue = form.bill.value
    console.log(billvalue)
    const customvalue = form.custom.value
    console.log(customvalue)
    const peoplevalue = form.people.value
    console.log(peoplevalue)
   
    console.log(peoplevalue*billvalue*customvalue)
    
    // button.addEventListener('click', e=>{
    //     e.preventDefault()
    //     console.log(e.target)
    // })
})
   
