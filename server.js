//empty object
const projectData = {};
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
app.get('/all', sendProdData);

function sendProdData(req, res){
  console.log('grab data')
  console.log(projectData)

  res.send(projectData);
}

//Post routes
app.post('/addWeather', addWeather);
function addWeather(req, res){
  const newInsert = {
    temperature: req.body.temperature,
    date: req.body.date,
    userRes: req.body.userRes,
  }
  projectData = newInsert;
  console.log(projectData)
}

//start server
app.listen(port, () => {
  console.log(`server listening on port: ${port}`)
});
