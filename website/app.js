
//skycon icon for displaying conditions for location
//const icon = new Skycons({"color": "#222"});
//icon.set('icon', 'clear-day');
//icon.play();
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

//Open weather api
const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?units=metric&zip=';
const myKey = ",us&appid=03e15524a809381a5969db25b6a5579f"

//eventlistener
document.getElementById('generate').addEventListener('click', tapGenerate)

function tapGenerate(e){
  let zipcode = document.getElementById('zip').value;
  let userfeelings = document.getElementById('feelings').value;

  getWeatherInfo(baseUrl, zipcode, myKey).then(function (openData) {
        postData('http://localhost:3000/addWeather', { temperature: openData.main.temp, date: openData.dt, userResponse: userResponse })
    }).then( function () {       updateUI('http://localhost:3000/all') }
  ).then(function (e) {
        console.log('should be good');
    }, function (error) {
        console.log('rejected');
    }

    )

}
// weather function
const getWeatherInfo = async(baseUrl, zipcode, myKey) => {
  console.log()
  const res = await fetch(baseUrl + zipcode + myKey)
  try {
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log('error', error)
  }
}
//Post function
const postData = async(url = 'http://localhost:3000/addWeather', data = {}) => {
  console.log(data);
  const res = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type':'application/json',
    },
    body: JSON.stringify(data),
  });
  try{
    const newData = await res.json();
    console.log(newData);
    return newData;
  }catch(error){
    console.log('error', error);
  }
}

//Update UI
const updateUI = async() => {
  const request = await fetch('/all');
  try {
    const allData = await request.json()
    console.log(allData);

    document.getElementById('temp').innerHtml = allData[0].temperature;
    document.getElementById('date').innerHtml = allData[0].date;
    document.getElementById('content').innerHtml = allData[0].userContent;
  } catch (e) {
    console.log('error', error)
  }
}
