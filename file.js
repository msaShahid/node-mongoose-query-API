const http = require('http');
const colors = require('colors');

// Encode and Decode HTML Base64 using JavaScript – JS Encoding
/* let name = 'Mohammad Shahid\'s';
let bName = btoa(name);
let  Cname = atob(bName);
console.log(Cname); */

//console.log("Mohammad Shaihd".red);


// 1->  Create file 
// file.writeFileSync('live.txt','Whatsoever in the Heavens', (err) => {
//     if(err) throw err ;
//     console.log('File Created successfully!');
// })

/* 2-> The fs.appendFile() method appends specified content to a file. 
 If the file does not exist, the file will be created: */

/* file.appendFile('live.txt','Say hello to my new friend', (err) => {
    if(err) throw err;
    console.log('Boom!');
})
 */

// 3-> fs.open , unlink = is delete the file, rename
/* file.rename('text.txt','live.txt', (err) => {
    if(err) throw err;
    console.log('Okay!');
}) */



// http.createServer( (req,res) =>{

//     file.readFile('web.html', (err,data) => {
//         res.writeHead(200,{'Content-Type': 'text/html'});
//         res.write(data);
//         return res.end();
//     }) 


// }).listen(4000);

const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'crud');
const filePath = `${dirPath}/go.txt`;
//const filePath = `${dirPath}/note1.txt`;

/* for(i=1; i<=5; i++){
    fs.writeFileSync( `${dirPath}/note${i}.txt`,'What so ever in the heavens and what so ever in the earth', (err) => {
       // if(err) throw err;
        if(!err);
        console.log('File Created Successfully!');
    });
} */

/* fs.readFile(filePath,'utf8', (err,file) =>{
    console.log(file);
}) */
// create read update delete
//fs.writeFileSync(`${dirPath}/go.txt`,'whatsoeve');
 /* fs.readFile(`${filePath}`,'utf8', (err,file) => {
    if(!err);
    console.log(file);
 }) */
 //console.log(filePath);
 fs.appendFile(`${filePath}`,'In the heavens', (err) => {
    if(!err);
    
 } )