function age1(userAge){
    if(userAge>18)
    {
        console.log("you are adult")
    }
    else
    {
        console.log("you are younger")
    }
}

var userAge=parseInt(prompt("Enter your age"))
age1(userAge)
