//const app = require("./app");
//console.log(app.h());

const http = require('http');
const uc = require('upper-case');
const app = require('./app');
const url = require('url');
const file = require('fs');

http.createServer( (req,res) => {
    res.writeHead(200,{'Content-Type' : 'text/html'});
  /*  res.write(uc.upperCase('hello world!')+ '<br>');
    res.write('Say Hello to my new friend : boom ' + app.s + '<br>'); */
  //  res.write(req.url); 
    /*
    -> this for to know your current url path
    -> Is kind of $_GET method to get value from url in below code 
    */
  /*  const getD = url.parse(req.url, true).query;
    let stext = getD.year + ' ' + getD.month;
    res.write('Current Date and Time :  ' + getD.year + ' ' + getD.month); */
   
    res.end();
})
//.listen(3000);