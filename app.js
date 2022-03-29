const form = document.querySelector('.form');
const button = document.querySelector('button');
const bill = document.querySelector('.bill')
const custom = document.querySelector('#custom')
const people = document.querySelector('#people')






// const percent = null;
// console.log(billvalue)

// const buttons = Array.from(button);

// buttons.forEach(button =>{
//     button.addEventListener('click', e =>{
//         e.preventDefault();
//         const percent = e.target.value
//         console.log(percent)
//     })
// })


const billvalue = form.bill.value


// console.log(buttons)

form.addEventListener(('keyup'),e =>{
    e.preventDefault();
    const billvalue = form.bill.value
    // console.log(billvalue)
    const customvalue = form.custom.value
    console.log(customvalue)
    const peoplevalue = form.people.value
    console.log(peoplevalue)
    form.addEventListener('click', e =>{
        console.log(billvalue* e.target.value *customvalue)
    })
    // const vaalue = e.target.value
    // // const five = form.five.value
    // // console.log(five)
    // // const ten = form.ten.value
    // // console.log(ten)
    // // const fifteen = form.fifteen.value
    // // console.log(fifteen)
    // // const tweentyFive = form.tweentyFive.value
    // // console.log(tweentyFive)
    // // const fifty = form.fifty.
    // console.log(vaalue)
   
    console.log(peoplevalue*billvalue*customvalue)
    



})
   
console.log(billvalue)