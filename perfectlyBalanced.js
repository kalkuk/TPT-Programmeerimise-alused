

function perfectlyBalanced(word) {
    
    let xCount = 0; 
    let yCount = 0;

    for (let i = 0; i < word.length;  i++) {
        let letter = word[i];

        if (letter == "x") {
            xCount++;
        } else if (letter == "y") {
            yCount++;
        }
    }

    if (xCount == yCount) {
        return true;
    }
    
    return false;
}

let answer = perfectlyBalanced("kyxyxyyxyxyxxxyy");

if (answer) {
    console.log("tähti x ja y on võrdne arv");
} else {
    console.log("tähti x ja y on ebavõrdne arv");
}




