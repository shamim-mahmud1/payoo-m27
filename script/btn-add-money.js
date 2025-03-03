const btnAddMoney=document.getElementById('btn-add-money')
btnAddMoney.addEventListener('click',function(event){
    event.preventDefault()
    // console.log('my name is shamim')
    const amountInput=document.getElementById('amount-input').value
    // console.log( amountInput)
    const convertAmountInput=parseFloat(amountInput)
    // console.log(typeof convertAmountInput)
    // console.log( convertAmountInput)
    const pinInput=document.getElementById('pin-input').value
    // console.log(typeof pinInput)
    const convertPinInput=parseFloat(pinInput)
    // console.log(typeof convertPinInput)
// ----------->
const mainBalence=document.getElementById('main-balence').innerText
// console.log(typeof mainBalence)
const convertMainBalence=parseInt(mainBalence)
// console.log(typeof convertMainBalence)



if (convertPinInput===1234) {
const sum=convertAmountInput+convertMainBalence
document.getElementById('main-balence').innerText=sum
// console.log(sum) 


    // console.log('pin thik asee add hobe')
}
else{
    console.log('invalid pin')
}


})