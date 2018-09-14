# firebaserealtimedb
A real time database build on firebase.<br/>
The access to firebase project is sent to feedback@onmyfingertips.com . After completing the signup process for firebase, you wil be given read access to the project. The link to the firebase database is https://fir-5e8bd.firebaseio.com/<br/>
The website is also hosted on the firebase. The url to the same is https://fir-5e8bd.firebaseapp.com/join. You can verify the app through this link also.<br/>
If you want run the app in your local machine, run the following commands while in the same directory as of the app.js if you dont have the required packages installed which is, ejs, body-parser, express, firebase, firebase-tools, nodemailer, run the command:<br/>
<b><h3>npm install express ejs body-parser firebase firebase-tools nodemailer</h3></b><br/>
After installing all the packages, run:<br/><b><h3> node app.js </h3></b><br/>
It will start the app on port 4000 on localhost.
In your web broswer, go to <strong>localhost:4000/</strong><br/>
Fill up the name and email-id details. It will then send the email to the registered email-id.<br/>
The user's data will be written into "users" and "userInformation" nodes in the firebase realtime database.
