
// use clear object to fill required data
weatherData = []
const express = require('express');
const app = express();
const cors = require('cors');

app.use(express());
const port = 4040;

app.listen(port, (req,res)=>{
console.log(`server is up and runing on http://localhost:${port}`);
});
//Adding EndPoint 
app.get('/weather', weatherData)

// Prepeare call back function to continue Get weather data

function newData(re, res){
    res.send(weatherData);
    weatherData=[];
}

// Post routing 
app.post('/append', addData)

function addData(req, res){
    console.log(req.body);

    weatherNews={
        data: req.body.data,
        temp: req.body.temp,
        contect: req.body.contect,


    };
    weatherData.push(weatherNews);
    res.send(newData);
}