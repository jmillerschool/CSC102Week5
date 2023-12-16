function bet()
{
    //Random # for follower
    var random1 = Math.ceil(Math.random() * 10);
    var random2 = Math.ceil(Math.random() * 10); 
    var random3 = Math.ceil(Math.random() * 10); 
    var random4 = Math.ceil(Math.random() * 10); 

    // Random # for SpiderAI
    var random5 = Math.ceil(Math.random() * 10); 
    var random6 = Math.ceil(Math.random() * 10); 
    var random7 = Math.ceil(Math.random() * 10); 
    var random8 = Math.ceil(Math.random() * 10); 
    
    // Random for follower
    document.getElementById("1#follower").innerHTML =  random1;
    document.getElementById("2#follower").innerHTML =  random2;
    document.getElementById("3#follower").innerHTML =  random3;
    document.getElementById("4#follower").innerHTML =  random4;
    
    // Random for SpiderAI
    document.getElementById("1#SpiderAI").innerHTML =  random5;
    document.getElementById("2#SpiderAI").innerHTML =  random6;
    document.getElementById("3#SpiderAI").innerHTML =  random7;
    document.getElementById("4#SpiderAI").innerHTML =  random8;

    // Variables for random # totals
    var sum1 = random1+random2+random3+random4;
    var sum2 = random5+random6+random7+random8;
    
    // What the rusults do
    if (sum1>sum2) // if you win
    {
        document.getElementById("results").innerHTML = "Congragulations you live to see another day!";
    }
    else if (sum1==sum2)// if you tie
    {
        document.getElementById("results").innerHTML = "You got lucky and Tied! You only loose your leg!";
    }
    else if (sum1<sum2) // if you lose
    {
        document.getElementById("results").innerHTML = "You Lose! Sorry time to feed the spider.";
    }


}