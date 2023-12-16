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
        document.getElementById("msg").innerHTML = "x = " + image.style.left + "y = " +image.style.top; // to help us use it do not use in project!!!

        
        change += 5; // change = change + 5

    },500); // change # to change how fast this moves

}