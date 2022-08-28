

// function calculator(value){    
//     const operands = '+-*/'    
//     const operand = []  // [+, *, +]
//     const arrNumbers = []
    
//     // цикл который пушит в массив операнды и со строки удаляет их
//     for(let i=0; i<value.length; i++){  // цикл который проходится по параметру функции
//         for(let n=0; n<operands.length; n++){    // цикл который проходится операндам проверяя есть ли + или - и т.п
//             if(value[i] === operands[n]){   // если есть операнд, пушится в массив
//                 operand.push(value[i])  
//                 value = value.replace(value[i], ' ')              
//             }
//         }
//     }       
//     // делаем массив из чисел, которые разделены ' '
//     const arr = value.split(' ')    // ['50', '50', '50', '50']
//     const arrNumber = arr.map((item) => item = Number(item))

//     for(let i=0; i<operand.length; i++){

//     }    
//     for(let i=0; i<arrNumber.length -1; i++){

//     }
//     console.log(arrNumber.length);
        
// }

// calculator('50+50*50+50')
// console.log(50+50*50+50);

function cacl(){
    const val1 = prompt('Введите ваше число')
    const operand = prompt('Введите +,-,* или /')
    const val2 = prompt('Введите ваше число')
    let result = 0
    if(operand === '+'){
        result = Number(val1) + Number(val2)
    }
    if(operand === '-'){
        result = Number(val1) - Number(val2)
    }
    if(operand === '*'){
        result = Number(val1) * Number(val2)
    }
    if(operand === '/'){
        result = Number(val1) / Number(val2)
    }

    console.log(result);
}

// cacl()
