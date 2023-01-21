const numbers = document.querySelectorAll('.numbers');
const result = document.querySelector('.result span');
const  signs = document.querySelectorAll('.sing');
const  equals= document.querySelector('.equals');
const clear = document.querySelector('.clear');
const negative = document.querySelector('.negative');
const percent = document.querySelector('.percent');

let firstValue = "";
let isFirstValue = false;
let secondValue = "";
let isSecondValue = false;
let sign = "";
let resultValue = 0;

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', (e) => {
        let atr = e.target.getAttribute('value');
        if (isFirstValue == false) {
            getFirstValue(atr)
        }
    })
}

function getFirstValue(el) {
    result.innerHTML = "";
    firstValue += el;
    result.innerHTML = firstValue;
    firstValue = +firstValue;
}

function getSecondValue(el) {
    if  (isFirstValue != "" && sign != "") {
        secondValue += el;
        result.innerHTML = secondValue;
        isSecondValue = +isSecondValue;
    }
}

function getSign() {
    for(let i = 0; i < sign.length; i++) {
        sign[i].addEventListener('click', (e)=>{
            sing = e.target.getAttribute('value');
            isFirstValue = true;
        })
    }
}
getSign();

equals.addEventListener('click', (e)=>{
    result.innerHTML = "";
    if(sign == "+"){
        resultValue =firstValue+secondValue;
    }else if(sing == "-"){
        resultValue =firstValue-secondValue;
    }else if(sing == "x"){
        resultValue =firstValue*secondValue;
    }else if(sing == "/"){
        resultValue =firstValue/secondValue;
    }
    result.innerHTML = resultValue;
    firstValue = resultValue;
    secondValue ="";
}) 

function checkResultlength(){
    resultValue= JSON.stringify.stringify(resultValue);

    if(resultValue.length >= 8 ){
        resultValue = JSON.parse(resultValue);
        result.innerHTML = resultValue.toFixed(5);
    }
}


negative.addEventListener('click',()=>{
    result.innerHTML = "";
    if(firstValue != ""){
        resultValue = -firstValue;
        firstValue=resultValue;
    }
    if(firstValue!=""&& secondValue!=""&& sing!=""){
        resultValue = -resultValue;
    }
    result.innerHTML = resultValue;
    
})

percent.addEventListener('click',()=>{
    result.innerHTML = "";
    if(firstValue != ""){
        resultValue = firstValue/100;
        firstValue=resultValue;
    }
    if(firstValue!=""&& secondValue!=""&& sing!=""){
        resultValue = -resultValue/100;
    }
    result.innerHTML = resultValue;
    
})