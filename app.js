

// Create a new date instance dynamically with JS
const myDate = new Date();
const newDate = myDate.getMonth()+ 1 + '.' +d.getDate()+'.'+d.getFullYear();

//Use provided API Key
const APIKey=a177f8481c31fa96c3f95ad4f4f84610;
//const Base_URL=`https://api.darksky.net/forecast/[API_KEY]/[latitude], [longitude]`
const Base_URL=`https://api.darksky.net/forecast/${APIKey}/[latitude], [longitude]`

//add Eventlistener
document.getElementById('button').addEventListener('click', getWeather);
function getWeather(){
    const addLocation=document.getElementById('location').value
    retrieveData(location)
    .then(function(data){
        if(addLocation!=null) {
            alert('Please Wait The data in progress')
        } else{
            alert('Please write your required location')
        };
        postlocation('/news', {temp:data.main.temp, content: addLocation, date: myDate})
    });
}