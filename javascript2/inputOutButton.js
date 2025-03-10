function showName()
{
    let userName=prompt("Enter your Name: ");
    if(userName!=null)
    {
        let show="Welcome, "+userName+" to our store.";
        document.getElementById("show").innerHTML=show.toUpperCase()+"<br>Your Name Length: "+userName.length+"<br>How can I help you?";
    }
    else
    {
        alert("You escaped the input!");
    }
}
