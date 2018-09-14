const express   			  = require("express"),
	 bodyParser 			  = require("body-parser"),
    	app		  			  = express();

//FIREBASE CONFIGURATION
var firebase = require("firebase");
var config = {
    apiKey: "AIzaSyAjWug8ti2l3xB2mO8s3HbPXvN77mf6qtQ",
    authDomain: "fir-5e8bd.firebaseapp.com",
    databaseURL: "https://fir-5e8bd.firebaseio.com",
};
firebase.initializeApp(config);
const database=firebase.database();
var count=0;

app.use(bodyParser.urlencoded({extended:true}));

//Nodemailer configuration
'use strict';
const nodemailer = require('nodemailer');

// Generate test SMTP service account from ethereal.email
var sendingMail=function(data_arr){
  nodemailer.createTestAccount((err, account) => {
      // create reusable transporter object using the default SMTP transport
      var transporter = nodemailer.createTransport({
          service:"Gmail",
          auth: {
              user: 'yashranjan74@gmail.com',
              pass: 'yash.ranjan112'
          }
      });

      // setup email data 
      var mailOptions = {
          from: '"Yash Ranjan" <yashranjan74@gmail.com>', // sender's address
          to: data_arr.email, // list of receivers
          subject: 'Welcome', // Subject line
          text: 'Dear '+data_arr.name+", Welcome to our app" // plain text body
      };
      // send mail with defined transport object
      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              return console.log(error);
          }
          console.log('Message sent to '+data_arr.email);
      });
  });
};


//Home route
app.get("/",function(req,res){
	res.redirect("/join");
});

//Join route
app.get("/join",function(req,res){
	res.render('join.ejs');
});

app.post("/join",function(req,res){
  var name=req.body.Name;
  var email=req.body.Email;
  var data={'name':name,'email':email};
  count+=1;
  var user='user'+count;
  database.ref('/user/'+user).set(data);
  database.ref('/userInformation/'+user).set(data);
  console.log("New User added!")
	res.render("compl.ejs",{name:name});
  sendingMail(data);
})

// app.listen(process.env.PORT, process.env.IP, function(){
//    console.log("The firebase service has started!");
// });

//FOR LOCALHOST
app.listen(4000, function(){
   console.log("The firebase server has started on port 4000 localhost!");
 });