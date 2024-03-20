function Loginvalidation()
{
    var enteremail=document.getElementById('email').value;
    var enterpassword=document.getElementById('pwd').value;

    var getEmail=localStorage.getItem('email');
    var getPwd=localStorage.getItem('password');
    if(enteremail==getEmail)
    {
        if(enterpassword==getPwd)
        {
            alert("Login Success");
            window.location="Welcome.html";
            return false;
        }
        else{
            alert("wrong Password")
        }
    }
        else{
            alert("Invalid Credential");
    }
       

}