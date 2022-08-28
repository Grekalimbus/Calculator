
const calculator = document.querySelector('.calculator')
const allNum = document.querySelectorAll('.num')
const input = document.querySelector('.input')
const operand = document.querySelectorAll('.operand')
const result = document.querySelector('.result_sum')
setTimeout(() =>{
    calculator.style.opacity = '1'
},100)
let str = ''
let arrSum = []
allNum.forEach((item) =>{
    item.addEventListener('click', (event)=>{
        const {target} = event        
        str = str + target.innerText
        input.innerText = str 
             
    })
})
let strOperandTarget = ''
let sum = 0
operand.forEach((item) =>{
    item.addEventListener('click', (event) =>{ 
        sum +=1              
        arrSum.push(Number(str))
        str = ''
        input.innerText = str   
        if(sum > 1){
            if(strOperandTarget === '+'){
                arrSum = [arrSum[0] + arrSum[1]]                    
            }
            if(strOperandTarget === '-'){
                arrSum = [arrSum[0] - arrSum[1]]
            }
            if(strOperandTarget === '*'){
                arrSum = [arrSum[0] * arrSum[1]]
            }
            if(strOperandTarget === '/'){
                arrSum = [arrSum[0] / arrSum[1]]
            }
        }  
        strOperandTarget = event.target.innerText
        // console.log(arrSum);
    })
})

result.addEventListener('click', (event) =>{
    arrSum.push(Number(str))    
    if(strOperandTarget === '+'){
        arrSum = [arrSum[0] + arrSum[1]]
    }
    if(strOperandTarget === '-'){
        arrSum = [arrSum[0] - arrSum[1]]
    }
    if(strOperandTarget === '*'){
        arrSum = [arrSum[0] * arrSum[1]]
    }
    if(strOperandTarget === '/'){
        arrSum = [arrSum[0] / arrSum[1]]
    }    
    input.innerText = arrSum
    str = Number(arrSum)
    arrSum = []
    console.log(input.innerText);
    sum = 0
})

