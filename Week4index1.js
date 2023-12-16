// globle var go here
var interValid = 0;
var change = 100;

function  startMove()
{
    var image = document.getElementById("imggecko");
    interValid = setInterval(function()
    {
        image.style.left = change + "px";
        image.style.top = change + "px";
        document.getElementById("msg").innerHTML = "x = " + image.style.left + "y = " +image.style.top; // to help us use it 

        
        change += 5; // change = change + 5

    },500); // change # to change how fast this moves

}

function stopMove()
{
    window.location.reload();  // resets the whole page
}

function startSound() 
{
    mySound = new sound("crickets.mp3"); // starts the sound funtion and playes the mp3
    mySound.play();

    document.getElementById("stopButton").disabled = false; // to turn on/toggle the stop button
    document.getElementById("startButton").disabled = true; // to turn off/toggle the start button
}
function sound(src) // same code for all sounds VERY IMPORTANT
{
    this.sound = document.createElement("audio");
    this.sound.src = src; // make it play whatever sound is in that function
    this.play = function()
    {
        this.sound.play()
    }
}

function stopSound()
{    
    document.getElementById("stopButton").disabled = true; // to turn off/toggle the stop button
    document.getElementById("startButton").disabled = false; // to turn on/toggle the start button
    window.location.reload();  // resets the whole page
}