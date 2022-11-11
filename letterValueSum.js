
function letterValueSum(word) {
    let sum = 0;
    
    for (let i = 0; i < word.length; i++) {
        let letterValue = word.charCodeAt(i) - 96;
        if (letterValue >= 1 && letterValue <= 26) {
            sum = sum + letterValue;
        }
        

    }

    return sum;
}

let answer = letterValueSum("microspectrophotometries");
console.log(answer);
