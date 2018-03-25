var zip = 92407;
// var zip = prompt("What is your zip code?");

// maybe include an if statement if the user does
// not enter in a zipcode


// i would like to make the api call every 20 minutes
var i = 0;

    var api = 'http://api.openweathermap.org/data/2.5/weather?zip='+ zip +',us&appid=815d38de5e85a1a57a6bb43292ea5844';
    $.getJSON(api, function(data){
      var tempr = data.main.temp;
      var fahren = kelToF(tempr);
      var cloud = data.clouds.all;
      var wind = data.wind.speed;
      console.log(wind);
      console.log(cloud);
      var weather = document.getElementById("weather");
      $('#weather').append("<p>" + fahren + "&deg</p");
      $('#city').append("<p>" + data.name + "</p>");
    });

  setInterval(function(){
    $.getJSON(api, function(data){
      var tempr = data.main.temp;
      var fahren = kelToF(tempr);
      var weather = document.getElementById("weather");
      $('#weather').text("");
      console.log(++i)
      $('#weather').append("<p>" + fahren + "&deg</p");
    });
  },1200000)
function kelToF(temp){
  return Math.round((temp *9/5) - 459.67);
}
