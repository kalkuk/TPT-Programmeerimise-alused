

function perfectlyBalancedBonus(word) {
    
    let counts = {};

    for (let i = 0; i < word.length;  i++) {
        let letter = word[i];

        if (counts[letter]) {
            counts[letter]++;
        } else {
            counts[letter] = 1;
        } 
        

    }

    let arvud = Object.values(counts);
    let eelmine = 0;

    for(let i = 0; i < arvud.length; i++) {
        let arv = arvud[i];
        
        if (eelmine > 0 && arv != eelmine) {
            return false;
        }

        eelmine = arv;
    
    }

    return true;
}

let answer = perfectlyBalancedBonus("aabb");
console.log(answer);




