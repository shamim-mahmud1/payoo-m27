document.getElementById('btn-cash-out').addEventListener('click', function (event) {
    event.preventDefault()
    // console.log('shamiiiiim')
    const pinInput = document.getElementById('pin-input-cash-out').value
    // console.log(pinInput)
    const convertPin = parseInt(pinInput)
    // console.log(convertPin)
    const amountinput = document.getElementById('amount-input-out').value
    const convertAmountInput = parseInt(amountinput)
    // console.log(convertAmountInput)

    const mainBalence = document.getElementById('main-balence').innerText
    //  console.log(mainBalence)
    const convertMainBalence = parseFloat(mainBalence)
    //  console.log(typeof convertMainBalence)
    const sum = convertMainBalence - convertAmountInput
    // console.log(sum)
    if (convertPin === 1234) {
        const remainBalance = convertMainBalence - convertAmountInput
        // console.log(remainBalance)
        document.getElementById('main-balence').innerText=remainBalance
    }
    else {
        alert('invalid pin')
    }
})