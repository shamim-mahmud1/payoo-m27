document.getElementById('add-money-card').addEventListener('click',function() {
    document.getElementById('cashout').style.display='none'
    document.getElementById('addmoney').style.display='block'
})
document.getElementById('cash-out-card').addEventListener('click',function(){
    document.getElementById('addmoney').style.display='none'
    document.getElementById('cashout').style.display='block'
})