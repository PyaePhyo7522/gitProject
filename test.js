const fs = require("fs");

fs.promises.readFile("./data.txt")
            .then(data => console.log("Promise Data: ", data.toString().length));

console.log("END");