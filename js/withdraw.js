// 1. add withdraw button event handler
document.getElementById('btn-withdraw').addEventListener('click', function(){
//  2. get withdraw amount by using getinputFieldValueById function
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');

    // 3. get previous withdraw amount by using getTextElementValue function
    const previousWithdrawTotal = getTextElementValueById('withdraw-total');
    // 4. calculate new wthdraw total and set the valu
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    // 4.5 set new withdraw total by using setTextElementValueById function
    setTextElementValueById('withdraw-total', newWithdrawTotal);
    // 5. get previous balance total by using getTextElementValueById function
    const previousBalanceTotal = getTextElementValueById('balance-total');
    
    if(newWithdrawAmount > previousBalanceTotal){
        alert('you have not enough balance for withdraw');
         return;
    }

    // 6. calculate new balance total
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
     // 6.5 set new balance total by using setTextElementValueById function
     setTextElementValueById('balance-total', newBalanceTotal);
})