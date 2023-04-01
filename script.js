var words = ["..............","Helloo world","please dont exit yet", "Dont worry it's not prank you", "..............",


"Hey friend, I know things may seem tough,",
"But please remember, life can be rough.",
"Ups and downs are part of the ride,",
"But with you by my side, I'll be alright.",

"It's okay to stumble, to make mistakes,",
"To feel lost, and to need a break.",
"We're only human, we're not perfect,",
"But together, we can still make it.",

"So let's hold on tight, and enjoy the ride,",
"With all its twists and turns, side by side.",
"It's okay, we'll make it through,",
"With a little help from me, and you.","3","2","1","........","Weeee Can doooo ITTT"]
var index = 0; // Initialize the index

function typeWriter() {
  var text = ""; // Initialize the text variable
  var currentWord = words[index]; // Get the current word from the list
  
  // Loop through each character of the current word
  for (var i = 0; i < currentWord.length; i++) {
    // Use a closure to capture the value of i at each iteration of the loop
    (function(i) {
      // Set a timeout to add each character to the text variable with a delay
      setTimeout(function() {
        text += currentWord.charAt(i);
        // Set the text of the HTML element to the current text variable
        document.getElementById("text").innerHTML = text;
        document.title = text;
      }, i * 100); // Delay each character by 100 milliseconds
    })(i);
  }
  
  // Increment the index or reset it if it reaches the end of the list
  index = (index === words.length - 1) ? 0 : index + 1;
  
  // Set a timeout to call the function again after a delay
  setTimeout(typeWriter, currentWord.length * 100 + 1000); // Delay for the length of the word plus 1 second
}

// Call the function to start the typing effect

const music = document.querySelector('.musicplay')
const run =()=>{
    typeWriter()
    music.play()
    
}





document.addEventListener('DOMContentLoaded',run)
