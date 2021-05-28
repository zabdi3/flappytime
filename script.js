var pipe = document.getElementById("pipe");
var gap = document.getElementById("gap");
var character = document.getElementById("character");
var jumping = 0;
var counter = 0;

gap.addEventListener('animationiteration', () => { // after every animation...will come back to here 
    var random = -((Math.random()*300)+200);
    gap.style.top = random + "px";
    counter++;
});
setInterval(function(){ // want to simulate gravity (char falling )
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top")); // returns object w/ the values of all CSS properties of an element
        // gives top position of char every 10 ms
    if(jumping==0){ // changes if we are not jumping 
        character.style.top = (characterTop+4)+"px"; // moving char down
    }
    var pipeLeft = parseInt(window.getComputedStyle(pipe).getPropertyValue("left"));
    var gapTop = parseInt(window.getComputedStyle(gap).getPropertyValue("top"));
    var cTop = -(600-characterTop); // hole can have negative number so this remedies that
    if((characterTop>575)||((pipeLeft<25)&&(pipeLeft>-50)&&((cTop<gapTop)||(cTop>gapTop+175)))){
        alert("Game over. Score: "+(counter-1));
        character.style.top = 100 + "px";
        counter=0; 
    }
},10); // runs every 10 ms 

function jump(){
    jumping = 1;
    let jumpCount = 0;
    var jumpInterval = setInterval(function(){
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if((characterTop>6)&&(jumpCount<15)){
            character.style.top = (characterTop-7)+"px";  //
        }
        if(jumpCount>20){
            clearInterval(jumpInterval);
            jumping=0;  // gravity back to 0
            jumpCount=0;
        }
        jumpCount++;
    },10); // runs every 10 ms
}
