const express = require('express');
const app = express();
app.use(express.static(__dirname + '/www'));
app.use (express.json());
let http = require('http').Server(app);
let server = http.listen(3000,function(){

    console.log('our server has started');
})

//Route to respond to a request at the root of the website.
app.get('/',function(req,res){

    let filepath = __dirname + '/www/index.html';
    res.sendFile(filepath);

});

//Route to respond to a post request at "/api/dataform". This could have been anything. Its a personal preference on what you call your routes. 
app.post('/api/dataform',function(req,res){
        
  
      let response = {}; //I have created an empty object that will hold a response that will be sent back to the client. The client will inspect the value when it comes back and make changes to the DOM based on the result. 
     
        //req.body holds the body of the request.This will include the form data that was sent in the post request from the client. If it does not exist then someone may be trying to access this api call directly and not from a web form ( that is not good)
        if (!req.body) {
            console.log('error');
            //400 is a response code that denotes a bad request.
          return res.sendStatus(400);
        }
            //we should always validate data sent from the client. (They are not to be trusted). For simplicity of the exercise I have not done this.
            response.data = req.body.data;
            response.valid = true;
            res.send(response);  
          
        });