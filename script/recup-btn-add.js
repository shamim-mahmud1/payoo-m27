document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault()
    // console.log('shamim')
 const amountInput= document.getElementById('amount-input').value
    // console.log(typeof amountInput)--------
    const convertAmountInput=parseFloat(amountInput)
    // console.log(typeof convertAmountInput)

    const pinInput=document.getElementById('pin-input').value
    // console.log(pinInput)
const convertPinInput=parseFloat(pinInput)
// console.log(convertPinInput)
// console.log(typeof convertPinInput)
const mainBalence=document.getElementById('main-balence').innerText
// console.log(mainBalence)
const convertMainBalence=parseFloat(mainBalence)
// console.log(convertMainBalence)


if (amountInput && pinInput) {
   if (convertPinInput===1234) {
    // console.log('thik ase')
    const sum =convertAmountInput+convertMainBalence
    // console.log(sum)
    // document.getElementById('amount-input').value=sum
   document.getElementById('main-balence').innerText=sum
   }
   else{
    alert('vul pin')
   }
}
else{
    alert('set amount & pin')
}
})