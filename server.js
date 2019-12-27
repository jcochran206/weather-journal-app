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


//Post routes


//start server
app.listen(port, () => {
  console.log(`server listening on port: ${port}`)
});
