const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
require("dotenv").config();
const sgMail=require("@sendgrid/mail");

sgMail.setApiKey("API_KEY");


const app = express();


app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, 'htmlandcss')));
let sendMail=async(msg)=>{
    try{
        await sgMail.send(msg);
        console.log("Welcome");
    }catch(error){
        console.error(error);
        if(error.response){
            console.error(error.response.body);
        }
    }
}
app.post('/signup', (req, res) => {
    console.log(req.body);
    const { firstName, lastName, email } = req.body;
    
    sendMail({
        to:email,
        from:"quochuyphamnguyen@gmail.com",
        subject:"duoc di ma ",
        text:"kjaida"
    })
    res.redirect('/success.html') 
    
    
})




app.listen(7749, console.log(`Server started on 2805`));
