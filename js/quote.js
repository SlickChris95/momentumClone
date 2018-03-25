
/* Quote Display */
var quote = document.getElementById('quote');
var author = document.getElementById('author');
var tweet = document.getElementById('tweet');
var quoteText;
var authorText;
var authors =[];
var quotes =[];



/* quotes */
function quoteGenerator(){
   quotes =[
    '"With the new day comes new strength and new thoughts."',
    '"Failure will never overtake me if my determination to succeed is strong enough."',
    '"Always do your best. What you plant now, you will harvest later."',
    '"If you can dream it, you can do it."',
    '"Our greates weakness lies in giving up. The most certain way to succeed is always to try just one more time."',
    '"A creative man is motivated by the desire to achieve, not by the desire to beat others."',
    '"Quality is not an act, it is a habit."',
    '"If you fell down yesterday, stand up today."',
    '"Well done is better than well said."',
    "'Be miserable. Or motivate yourself. Whatever has to be done, it's always your choice.'",
    '"It does not matter how slowly you go as long as you do not stop."',
    '"This too shall pass."',
    '"No one can make you feel inferior without your consent."',
    '"The woman who follows the crowd will usually go no further than the crowd. The woman who walks alone is likely to find herself in places no one has been before."',
    '"May I never be complete. May I never be content. May I never be perfect."',
    "'Ask yourself if what you're doing today will get you closer to where you want to be tomorrow.'",
    "'What would you do if you weren't afraid?'"
  ];
   authors =[
    "Eleanor Roosevelt",
    "Og Mandino",
    "Og Mandino",
    "Walt Disney",
    "Thomas Edison",
    "Ayn Rand",
    "Aristotle",
    "H.G. Wells",
    "Benjamin Franklin",
    "Wayne Dyer",
    "Confucius",
    "Anonymous",
    "Eleanor Roosevelt",
    "Albert Einstein",
    "Chuck Palanhnuik",
    "Anonymous",
    "Sheryl Sandberg"
  ];
  var randomNum = Math.floor(Math.random() * quotes.length);
    quote.textContent = quotes[randomNum];
   author.textContent = authors[randomNum];
   quoteText= quote.innerText;
   authorText = author.innerText;
}
quoteGenerator();
/* twitter */
// quoteText= quote.innerText;

function tweetOut(){
  window.open("https://twitter.com/intent/tweet?text=" + quoteText+ " " + authorText);
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
  var pm = true;
  //add a zero in front of numbers < 10
  mins= checkTime(mins);
  secs= checkTime(secs);

  // there is a bug if hour is 24 aka 12am
 if(hours > 11 && hours < 24){
    pm = true;
  }else if(hours == 12){
    pm = true;
  }else if(hours == 24){
    pm = !pm;
  }else{
    pm = !pm;
  }

  if(hours > 12){
    hours -=12;
  }

  if(hours < 12 && !pm){
      document.getElementById('time').innerHTML = hours + ":" + mins;
      document.getElementById('greeting').innerHTML = "Good Morning.";
  }else if((hours < 5 && pm) || (hours ==12 && pm)){
      document.getElementById('time').innerHTML = hours + ":" + mins;
      document.getElementById('greeting').innerHTML = "Good Afternoon.";
  }else if(hours == 12 && !pm){
    document.getElementById('time').innerHTML = hours + ":" + mins;
    document.getElementById('greeting').innerHTML = "Good evening.";
  }else {
    document.getElementById('time').innerHTML = hours + ":" + mins;
    document.getElementById('greeting').innerHTML = "Good Evening.";
  }
var  time = setTimeout(function(){
    startTime()
  },500);
}
startTime();

/* Greeting Display */
