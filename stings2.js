function palChecker() // my functon
{
    // to link checker1 to the Checker id in html
    var checker1 = document.getElementById("Checker").value; 

    document.getElementById("yourInput").innerHTML = "Your Input " + checker1;

   // for it to erase all spaces
   checker1 = checker1.replace(/ /g, "");

   // for it to make all lowercase
   checker1 = checker1.toLowerCase();
   
   
    // REVERSE USING FOR LOOP
    var reversed = ""; //reversing the letters
    for (var i= checker1.length -1; i >= 0; i--)
    {
        reversed += checker1[i]; // REVERSE = REVERSE + STRING3[i]
    }

    //to print results to screen
    document.getElementById("palCheckerDisplay").innerHTML = "Palidrome Checker Results:  " + reversed; 

    // the ui for if it is a palidrome
    if (checker1 == reversed)
        {
            document.getElementById("palCheckerResults").innerHTML = "This is a Palidrome!";
        }
        else 
        {
            document.getElementById("palCheckerResults").innerHTML = "This is NOT a  Palidrome! Please try again.";
        }
}

function checkInfo()
{
    // Declare my var
    var firstName = document.getElementById("firstNamestring").value;
    var lastName = document.getElementById("lastNamestring").value;
    var zipCode = document.getElementById("zipCodestring").value;

    
    // concatenate - adds 2 strings together
    var namecombo = firstName +lastName;
    
    //to see if the names are over 20 letters
    if (namecombo.length > 20)
    {
        document.getElementById("Warning").innerHTML = "This Name is too long!";
    } 
    else
    {
        if (zipCode.length > 5) // make sure we have 5 # for zip
        {
            document.getElementById("Warning").innerHTML = "Invalid Zip Code! Please try again!";
        }
        else if (zipCode.length <5) // make sure we have 5 # for zip
        {
            document.getElementById("Warning").innerHTML = "Invalid Zip Code! Please try again!";
        }
        else // if they input everything correctly 
        {
            document.getElementById("Warning").innerHTML = "You did it great job!";
        }
    }   
    

}