let myString = "1213"

function checkStrung(myString) {
    let ans = myString.split("").reverse().join("")
    return ans === myString
}

console.log(checkStrung(myString));