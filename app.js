
const express = require('express');
const path = require('path');
const reqFilter = require('./middleware/middleware');
const route = express.Router();

const publicPath = path.join(__dirname,'public');
//console.log(publicPath)

const app = express();


route.use(reqFilter);



// using for static page
//app.use(express.static(publicPath));

// using for ejs
//app.set('view engine','ejs');

// 25 nodeno

// Start Middleware for all Route (Application Base Middleware Route)
/* const reqFilter = (req,res,next) => {

    if(!req.query.age){
        res.send('Please provide age')

    }else if(req.query.age < 18){
        res.send(`You can not access this website because under Age and your age is ${req.query.age}`)

    }else{
        next();
    }

} */

// app.use(reqFilter)
// End Middleware for all Route (Application Base Middleware Route)

app.get('/',(req,res) => {
    res.send('Welcome to home page');
})

// Start Singal Middleware Route
app.get('/users',reqFilter,(req,res) => {
    res.send('Welcome to user Page');
})
// End Singal Middleware Route

// Start Group Middleware Route
route.get('/about',(req,res) => {
    res.send('Welcome to about Page');
})
route.get('/contact',(req,res) => {
    res.send('Welcome to conact Page');
})

app.use('/',route);
// End Group Middleware Route

// Dynamic page usinf ejs
/* app.get('/profile',(req,res) => {
    const user ={
        name: 'Shahid',
        email: 'msa.ansari28@gmail.com',
        city: 'Kolkata',
        skills: ['JavaScript','Php','Node','Ruby']
    }
    res.render('profile',{user});
}) */

// static Page
/* app.get('/',(req,res) => {
    res.sendFile(`${publicPath}/home.html`);
})

app.get('/about',(req,res) => {
    res.sendFile(`${publicPath}/about.html`);
})

app.get('/contact',(req,res) => {
    res.sendFile(`${publicPath}/contact.html`);
})

app.get('*',(req,res) => {
    res.sendFile(`${publicPath}/error.html`);
}) */




/* app.get("",(req,res) => {
   // console.log("get Data from request",req.query.name);
    res.send(`
    <h1>Welcome To Home Page </h1>
    <a href="/about">Go To About PAge</a>
    `);
   // res.sendFile(`${publicPath}/home.html`);
}) */

/* app.get("/about", (req,res) => {
    res.send(`
   <p> It all about of about page, What wan tto say brother,</p>
    <a href="/">Go To Home PAge</a>
    `);
})
 */
/* app.get("/help", (req,res) => {
    res.send(
    [
        {
            name: "Shahid",
            city: "Kolkata"
        },
        {
            name: "Sakshi",
            city: "Raipur"
        }
    ]
    
    );
}) */

//app.listen(4000);