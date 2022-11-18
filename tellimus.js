
const fs = require("fs");
const readline = require("readline");

const stream = fs.createReadStream("orderRows.csv");
const rl = readline.createInterface({ input: stream });
let data = [];
 
rl.on("line", (row) => {
    
    if (row.includes(";")) { 
        data.push(row.split(";"));
    }

});
 
rl.on("close", () => {
       
    
    for (let i = 1; i < data.length; i++) {
        let hind = data[i][3];
        console.log(hind);
    }

    console.log("Lõpp");
});

