//empty object
const projectData = {};
const data = []
// Require Express to run server and routes
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const port = 3000

const app = express();



//Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

//Get routes
app.get('/', function(req, res){
  res.send('starter page')
})
//get project data
app.get('/all', function(req, res){
  res.send(projectData)
})



//Post routes
app.post('/addWeather', addWeaterData)
function addWeaterData(req, res){
  //create object for client
  newDataEntry = {
    temperature: req.body.temperature,
    date: req.body.date,
    userContent: req.body.userContent,
  }


  projectData.push(newDataEntry);
  res.send(newDataEntry)
  console.log(projectData);
}


//start server
app.listen(port, () => {
  console.log(`server listening on port: ${port}`)
});
