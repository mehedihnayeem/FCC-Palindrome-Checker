const inputText = document.querySelector("#text-input")
const checkBtn = document.querySelector("#check-btn")
const result = document.querySelector("#result")

checkBtn.addEventListener("click", ()=>{
    if(inputText.value === ""){
        alert("Please input a value")
    }
    const inputTextValue = inputText.value.toLowerCase()

    const finalInputText = extractAlphanumeric(inputTextValue)

    if(finalInputText){
        if(palindrome(finalInputText)){
            result.innerHTML = `<p><span class="input-value">${inputText.value}</span> is a palindrome.</p>`
        }else{
            result.innerHTML = `<p><span class="input-value">${inputText.value}</span> is not a palindrome.</p>`
        }
    }

    inputText.value = ""
})

function extractAlphanumeric(str) {
    return str.replace(/[^a-z0-9]/g, '');
}

const palindrome = (str) => {
    const middleNumber = str.length / 2
    const oddOrEven = (str.length % 2) === 0 ? "Even" : "Odd"

    console.log(middleNumber, oddOrEven, str.length, 14 % 2)
    const firstPortionStr = str.slice(0,middleNumber)

    let secondPortion

    if(oddOrEven === "Even"){
        secondPortion = str.slice(middleNumber, str.length)
    }else if(oddOrEven === "Odd"){
        secondPortion = str.slice(middleNumber + 1, str.length)
    }
    
    const secondPortionStr = secondPortion.split('').reverse().join('')

    console.log(firstPortionStr, secondPortionStr)
    
    if(firstPortionStr === secondPortionStr){
        return true
    }else{
        return false
    }
}
