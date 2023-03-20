const express = require("express");
const mongoose = require('mongoose');
const path = require('path')
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/quiz');
}
const app = express();
const port = 80;




// FUNCTIONS 
const teamschema = new mongoose.Schema({
    team_id: String
});
const team= mongoose.model('teams', teamschema)
const userschema = new mongoose.Schema({
    email: String,
    psw: String
}); 
const user = mongoose.model('users',userschema);
function signup(){
    let em=document.getElementById("email1").value.toString();
    let password=document.getElementById("pass").value.toString();
    let rpassword=document.getElementById("rpass").value.toString();
    if(rpassword!=password){
        alert("The two passwords don't match")
    }
    else{
        const newuser = new user({ email:em, psw:password});
        newuser.save(function (err, newuser) {
            if (err) return console.error(err);
        });
    }
}
function login(){
    let em=document.getElementById("email").value.toString();
    let password=document.getElementById("psw").value.toString();
    users.find({email:em,psw:password},function(err,users){
        if(err) return console.error(err);
        console.log("found");
    })
}
function join() {
    let abcd = document.getElementById("join").value.toString();
    if (!abcd) {
        alert("Enter a Valid Team-Code")
    }
    else {
        teams.find({ team_id:abcd }, function (err, teams) {
            if (err) return console.error(err);
            alert("Found");
        })
    }
}
function register(){
    let abcd;
    let name=document.getElementById("teams").value.toString();
    if(!name){
        alert("Enter Valid Team-Name");
    }
    else{
        abcd=new Date().getTime().toString();
        alert("Your Team ID will be displayed after you press OK");
        alert(abcd);
        const newteam = new team({ team_id: abcd });
        newteam.save();
        window.location
    }
}








// BACKEND
app.get("/", (req, res)=>{ 
    res.sendFile(path.join(__dirname,"./rules.html"));
});
app.get("/login", (req, res)=>{ 
    res.sendFile(path.join(__dirname,"./login.html"));
});
app.get("/signup", (req, res)=>{ 
    res.sendFile(path.join(__dirname,"./signup.html"));
});
app.get("/rules", (req, res)=>{ 
    res.sendFile(path.join(__dirname,"./rules.html"));
});
app.get("/join", (req, res)=>{ 
    res.sendFile(path.join(__dirname,"./join.html"));
});
app.get("/quiz", (req, res)=>{ 
    res.sendFile(path.join(__dirname,"./quiz.html"));
});
app.get("/create", (req, res)=>{ 
    res.sendFile(path.join(__dirname,"./create.html"));
});
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
