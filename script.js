let firstNumber = document.getElementById('firstNumber')
let operator = document.getElementById('operator')
let secondNumber = document.getElementById('secondNumber')
let result = document.getElementById('result')

//ОПЕРАТОРЫ
let plus = document.getElementById('topMenu-plus')
let minus = document.getElementById('topMenu-minus')
let delet = document.getElementById('topMenu-delete')
let multi = document.getElementById('topMenu-multi')
let percent = document.getElementById('number-percent')
let percentText = document.getElementById('percentText')

let reset = document.getElementById('topMenu-reset')
let operatorRavno = document.getElementById('operatorRavno')


// ЧИСЛА
let numberOne = document.getElementById('number-one')
let numberTwo = document.getElementById('number-two')
let numberThree = document.getElementById('number-three')
let numberFour = document.getElementById('number-four')
let numberFive = document.getElementById('number-five')
let numberSix = document.getElementById('number-six')
let numberSeven = document.getElementById('number-seven')
let numberEight = document.getElementById('number-eight')
let numberNine = document.getElementById('number-nine')
let numberZero = document.getElementById('number-zero')
let numberDot = document.getElementById('number-dot')
let numberPercent = document.getElementById('number-percent')


let ravno = document.getElementById('topMenu-ravno')

let first
let second

// let numberOne = 1
// let numberTwo = 2
// let numberThree = 3
// let numberFour = 4
// let numberFive = 5

numberOne.onclick = function () {
    firstNumber.innerHTML += 1
}
numberTwo.onclick = function () {
    firstNumber.innerHTML += 2
}
numberThree.onclick = function () {
    firstNumber.innerHTML += 3
}
numberFour.onclick = function () {
    firstNumber.innerHTML += 4
}
numberFive.onclick = function () {
    firstNumber.innerHTML += 5
}
numberSix.onclick = function () {
    firstNumber.innerHTML += 6
}
numberSeven.onclick = function () {
    firstNumber.innerHTML += 7
}
numberEight.onclick = function () {
    firstNumber.innerHTML += 8
}
numberNine.onclick = function () {
    firstNumber.innerHTML += 9
}
numberZero.onclick = function () {
    firstNumber.innerHTML += 0
}
numberDot.onclick = function () {
    firstNumber.innerHTML += '.'
}





ravno.onclick = function () {
    second = answer.innerHTML
    return answer.innerHTML = Number(first) + Number(second)
}

//ОПЕРАТОРЫ
plus.onclick = function () {
    first = firstNumber.innerHTML
    operator.innerHTML = plus.innerHTML
    secondChoice()
}
minus.onclick = function () {
    first = firstNumber.innerHTML
    operator.innerHTML = minus.innerHTML
    secondChoice()
}
delet.onclick = function () {
    first = firstNumber.innerHTML
    operator.innerHTML = delet.innerHTML
    secondChoice()
}
multi.onclick = function () {
    first = firstNumber.innerHTML
    operator.innerHTML = multi.innerHTML
    secondChoice()
}




reset.onclick = function () {
    location.reload()
    return false
}



function secondChoice() {
    numberOne.onclick = function () {
        secondNumber.innerHTML += 1
    }
    numberTwo.onclick = function () {
        secondNumber.innerHTML += 2
    }
    numberThree.onclick = function () {
        secondNumber.innerHTML += 3
    }
    numberFour.onclick = function () {
        secondNumber.innerHTML += 4
    }
    numberFive.onclick = function () {
        secondNumber.innerHTML += 5
    }
    numberSix.onclick = function () {
        secondNumber.innerHTML += 6
    }
    numberSeven.onclick = function () {
        secondNumber.innerHTML += 7
    }
    numberEight.onclick = function () {
        secondNumber.innerHTML += 8
    }
    numberNine.onclick = function () {
        secondNumber.innerHTML += 9
    }
    numberZero.onclick = function () {
        secondNumber.innerHTML += 0
    }
    numberDot.onclick = function () {
        secondNumber.innerHTML += '.'
    }
    percent.onclick = function () {
        percentText.innerHTML = '%'
        ravno_percent()
    }
    function ravno_percent() {
        ravno.onclick = function () {
            operatorRavno.innerHTML = '='
            second = secondNumber.innerHTML
            if (operator.innerHTML == '+') {
                second = '0.' + second

                result.innerHTML =Number(first) + (Number(first) * Number(second))
            } else if (operator.innerHTML == '-') {
                second = '0.' + second
                result.innerHTML = Number(first) - (Number(first) * Number(second))

            } else if (operator.innerHTML == '/') {
                result.innerHTML = Number(first) / Number(second)
            } else if (operator.innerHTML == '*') {
                result.innerHTML = Number(first) * Number(second)
            }
        }
    }

    ravno.onclick = function () {
        operatorRavno.innerHTML = '='
        second = secondNumber.innerHTML
        if (operator.innerHTML == '+') {
            result.innerHTML = Number(first) + Number(second)
        } else if (operator.innerHTML == '-') {
            result.innerHTML = Number(first) - Number(second)
        } else if (operator.innerHTML == '/') {
            result.innerHTML = Number(first) / Number(second)
        } else if (operator.innerHTML == '*') {
            result.innerHTML = Number(first) * Number(second)
        }

    }
}

