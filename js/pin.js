function getPin(){
    const pin = pinGenerate();
    const pinString = pin + '';
    if(pinString.length === 4){

       return pin;
 
    }else{
        
        return getPin()
    }
}

function pinGenerate(){
    const random = Math.round(Math.random() * 10000);
    return random;
}


document.getElementById('btn-generate').addEventListener('click', function(){
  const pin = getPin();
    const pinInputField = document.getElementById('pin-field');
    pinInputField.value = pin;
    
})

document.getElementById('calculator').addEventListener('click', function(event){
    const number = event.target.innerText;
   const inputField = document.getElementById('input-field');
   const previousTypeNumber = inputField.value;
   if(isNaN(number)){
    if(number === 'C'){
        inputField.value = '';
    }else if(number === '<'){
        const digits = previousTypeNumber.split('');
        digits.pop();
        const remaningdigits = digits.join('');
        inputField.value = remaningdigits;
    }
   }else {

       const newTypeNumber = previousTypeNumber + number;
       inputField.value = newTypeNumber;
   }
})

document.getElementById('btn-submit').addEventListener('click', function(e){
    const generatePin = document.getElementById('pin-field');
    const previousGeneratePin = generatePin.value;
    if(previousGeneratePin ==''){
        alert('please pin generate');
        pinFailureMassage.style.display="none";
    }
    generatePin.value='';

    const inputFieldSubmit = document.getElementById('input-field');
    const previousInputFieldValue = inputFieldSubmit.value;
    if(previousInputFieldValue == ''){
        alert('please input a valid number!');
        pinFailureMassage.style.display = 'none';
    }
    inputFieldSubmit.value='';

    const pinFailureMassage = document.getElementById('pin-failure');
    const pinMatchedMassage = document.getElementById('pin-matched');
    const leftText = document.getElementById('left');
    const LeftInnerText = leftText.innerText;
    // let left=3;

    if(previousInputFieldValue === previousGeneratePin){
       pinMatchedMassage.style.display = 'block';
       pinFailureMassage.style.display = 'none';
    }else{
       pinFailureMassage.style.display = 'block';
       pinMatchedMassage.style.display = 'none';
       const left = LeftInnerText - 1;
       leftText.innerText = left;
       if(left <= 0){
        alert('you have no chance please come back after 30 minitues');
       const btnSubmit = document.getElementById('btn-submit');
       btnSubmit.setAttribute('disabled', true);
       btnSubmit.style.backgroundColor = "gray";
        return;
       }

    }
})