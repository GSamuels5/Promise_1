let myPromise = new Promise(args)

function args(resolve, reject) {
    let number1 = +prompt('enter your numbers')
    let number2 = +prompt('enter your numbers')
    if (!isNaN(number1) && !isNaN(number2)) {
        let calculate = number1 + number2
        resolve(calculate)
    } else {
        reject(` ${+number2 || +number1} is not a number`  )
    }
}

myPromise.then(
    (correct)=> {
        console.log(correct);
    },
    (denied)=> {
        console.log(denied);
    }
)