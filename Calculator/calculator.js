const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.get("/bmicalculator",function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});
app.post("/bmicalculator",function(req, res){
  var height = Number(req.body.n2)*0.01;
  var weight = Number(req.body.n1);
  console.log(height);
  var result = (weight/(height*height));
  res.send("Your BMI is "+ result);
});
app.get("/",(req, res)=> res.sendFile(__dirname + "/index.html"));
app.post("/",function(req, res){
    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);
    var result = num1 + num2;
   res.send("The result of the calculation is " + result);
});
app.listen(port, ()=> console.log('Server is running on port'+port));
