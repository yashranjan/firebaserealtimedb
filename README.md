# firebaserealtimedb
A real time database build on firebase.<br/>
The access to firebase project is sent to feedback@onmyfingertips.com . After completing the signup process for firebase, you wil be given read access to the project. The link to the firebase database is https://fir-5e8bd.firebaseio.com/<br/>
The website is also hosted on the firebase. The url to the same is https://fir-5e8bd.firebaseapp.com/join. You can verify the app through this link also.<br/>
<b>Although, the app is capable of sending emails to the users account, it needs a gmail account to send them  from. As for security purposes, I can't share my gmail's account password, you have to use your own. Change the account and password on line 29 and 30. And also turn access on for less secure apps on the given link:- https://myaccount.google.com/lesssecureapps </b><br/> 
If you want run the app in your local machine, run the following commands while in the same directory as of the app.js if you dont have the required packages installed which is, ejs, body-parser, express, firebase, firebase-tools, nodemailer, run the command:<br/>
<b><h5>npm install express ejs body-parser firebase firebase-tools nodemailer</h5></b><br/>
After installing all the packages, run:<br/><b><h5> node app.js </h5></b><br/>
It will start the app on port 4000 on localhost.
In your web broswer, go to <strong>localhost:4000/</strong><br/>
Fill up the name and email-id details and click on submit. It will then send the email to the registered email-id.<br/>
The user's data will be written into "users" and "userInformation" nodes in the firebase realtime database.
