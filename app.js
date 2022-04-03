const form = document.querySelector('.form');
const button = document.querySelector('.buttons');
const bill = document.querySelector('.bill')
const custom = document.querySelector('#custom')
const people = document.querySelector('#people')
const btn = document.querySelectorAll('.btn')
const reset = document.querySelector('.reset-button')



let billvalue = 0;
let percentage = 0;
let customValue = 0;
let numberPeople = 1;
let tipPersonValue = 0;
let tipAmount = 0
let total ;

const btnn = Array.from(btn)



// button.addEventListener('click', e =>{

//     // btnn.forEach(btn =>{
//     //     if(btn.classList.contains('selected-percent')){
//     //         btn.classList.add('btn')
//     //         btn.classList.remove('selected-percent')
//     //     }else{
//     //         e.target.classList.remove('btn')
//     //         e.target.classList.add('selected-percent')
//     //     }
//     // })
    
   
    
// })

       
       




bill.addEventListener('keyup',e =>{
    billvalue = e.target.value
    reset.classList.add('selected-percent')
    console.log(billvalue)

    if(!billvalue){
        reset.classList.add('reset-button')
    }else{
        reset.classList.add('reset')
    }

})

 
button.addEventListener('click', e=>{
    percentage = e.target.value
    tipAmount = billvalue * percentage
    console.log(tipAmount)
    
    btnn.forEach(btn =>{
        if(btn.classList.contains('selected-percent')){
            btn.classList.add('btn')
            btn.classList.remove('selected-percent')
        }else{
            e.target.classList.remove('btn')
            e.target.classList.add('selected-percent')
        }

    })
})

custom.addEventListener('keyup', e =>{
    customValue = e.target.value / 100
    tipAmount = billvalue * customValue
    
})

people.addEventListener('keyup', e =>{
    numberPeople = 1
    numberPeople = e.target.value
    const tipDisplay = document.querySelector('.tip-amount span')
    const totalDisplay = document.querySelector('.total span')
    tipPersonValue = (tipAmount / numberPeople)
    
    total = (parseFloat(billvalue) + parseFloat(tipAmount))
    const totalPerson = total/ numberPeople
    if(totalPerson && numberPeople){
        totalDisplay.innerText = `$ ${totalPerson.toFixed(2)}`
        tipDisplay.innerText =`$ ${tipPersonValue.toFixed(2)}`
    }

    if(numberPeople === 0){
        totalDisplay.innerText = '$ 0.00'
        tipDisplay.innerText = '$ 0.00'
        
    }
    console.log(total)
})
console.log(tipAmount)
