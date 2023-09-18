
const {add,sub,mul,div} = require("./utilts")

console.log(add(10,10));
console.log(mul(12,90));
console.log(sub(100,70));
console.log(div(10,4));

const fs = require("fs")

fs.writeFile("file1.txt","this is the first file",(err)=> {
    if (err) throw err;
    console.log("file created");
})

 fs.access("file1.txt",(err)=>{
    if(err) throw err
    console.log("file exist");
})

fs.readFile("file1.txt","utf8",(err , data)=>{
    if (err) throw err
    console.log(data);
})

fs.appendFile("file1.txt","\nfirst append",(err)=>{
    if (err) throw err


    fs.readFile("file1.txt","utf8",(err , data)=>{
        if (err) throw err
        console.log(data);
    })

})
