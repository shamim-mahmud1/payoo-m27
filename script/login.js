const loginBtn =document.getElementById('login-btn')
loginBtn.addEventListener('click',function(event){
    // console.log('sdgerg')
event.preventDefault()
// console.log('my name is shamim')
 const mobileNumber=document.getElementById('mobile-number').value
//  console.log(mobileNumber)
 const pinNumber =document.getElementById('pin-number').value
// console.log(mobileNumber,pinNumber)
// console.log(mobileNumber.length)
if (mobileNumber.length===11) {
//   console.log('mobile number is okey') 
// console.log(typeof pinNumber)
const convertPin=parseInt(pinNumber)
// console.log(typeof convertPin)
  if (convertPin===1234) {
    // console.log('mobile and pin  is okey')
    window.location.href="main.html"
  } 
  else{
    alert('invalid pinn')
  }
}
else{
   alert('invalid mobile number')
}
})