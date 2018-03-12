
/* Quote Display */
var quote = document.getElementById('quote');
var author = document.getElementById('author');
var tweet = document.getElementById('tweet');
function quoteGenerator(){
  var quotes =[
    "With the new day comes new strength and new thoughts.",
    "Failure will never overtake me if my determination to succeed is strong enough.",
    "Always do your best. What you plant now, you will harvest later.",
    "If you can dream it, you can do it.",
    "Our greates weakness lies in giving up. The most certain way to succedd is always to try just one more time.",
    "A creative man is motivated by the desire to achieve, not by the desire to beat others.",
    "Quality is not an act, it is a habit.",
    "If you fell down yesterday, stand up today",
    "Well done is better than well said.",
    "Knowing is not enough; we must apply. Willing is not enough; we must do.",
    "Be miserable. Or motivate yourself. Whatever has to be done, it's always your choice.",
    "It does not matter how slowly you go as long as you do not stop."
  ];
  var authors =[
    "Eleanor Roosevelt",
    "Og Mandino",
    "Og Mandino",
    "Walt Disney",
    "Thomas Edison",
    "Ayn Rand",
    "Aristotle",
    "H.G. Wells",
    "Benjamin Franklin",
    "Johann Wolfgang von Goethe",
    "Wayne Dyer",
    "Confucius"
  ];
  var randomNum = Math.floor(Math.random() * quotes.length);
    quote.textContent = quotes[randomNum];
   author.textContent = authors[randomNum];
}

/* Clock Display */
function checkTime(i){
  if(i < 10){
    i = "0" + i;
  }
  return i;
}
function startTime(){
  var today = new Date();
  var hours = today.getHours();
  var mins = today.getMinutes();
  var secs = today.getMinutes();
  var am = true;
  //add a zero in front of numbers < 10
  mins= checkTime(mins);
  secs= checkTime(secs);

  // there is a bug if hour is 24 aka 12am
 if(hours > 12 && hours !=24){
    hours -= 12;
    am = !am;
  }
  if(am != true){
      document.getElementById('time').innerHTML = hours + ":" + mins;
      document.getElementById('greeting').innerHTML = "Good Evening.";
  }else{
      document.getElementById('time').innerHTML = hours + ":" + mins;
      document.getElementById('greeting').innerHTML = "Good Morning.";
  }
var  time = setTimeout(function(){
    startTime()
  },500);
}
startTime();
/* Greeting Display */
