
var emailsubmit = false;
var passsubmit = false;
var namesubmit = false;
var mobilesubmit = false;
function emailvalidate()
{
    let email = document.getElementById("email").value;
    let re = /\S+@+\S+\.\S+/;
    if(!re.test(email))
    {
        document.getElementById("emailerror").innerHTML = "Please enter the correct Email id";
        emailsubmit = false;
    }
    else{
        document.getElementById("emailerror").innerHTML = "<br/>";
        emailsubmit = true;
    }
    signupButton();
    signinbutton();
    
}

function passvalidate()
{
    var pass = document.getElementById("pass").value;
    let re = /(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).{8,}/;
    if(!re.test(pass))
    {
        document.getElementById("passerror").innerHTML = "Minimun length of password :- 8<br> 1 Uppercase letter <br> 1 smallcase letter";
        passsubmit = false;
    }
    else{
        document.getElementById("passerror").innerHTML = "<br/>";
        passsubmit = true;
    }
    signinbutton();
    signupButton();
}

function namevalidate(){

    var name = document.getElementById("name").value;
    if(name === "")
    {
        document.getElementById("nameerror").innerHTML = "Please enter your name";
        namesubmit = false;
    }
    else
    {
        document.getElementById("nameerror").innerHTML = "<br/>";
        namesubmit = true;
    }
    signupButton();
}

function mobilevalidate()
{
    let re = /\d{10}/;
    let num = document.getElementById("mobile").value;
    if(!(re.test(num) && num.length == 10))
    {
        document.getElementById("mobileerror").innerHTML = "Enter correct 10 digit number.";
        mobilesubmit = false;
    }
    else
    {
        document.getElementById("mobileerror").innerHTML = "<br/>";
        mobilesubmit = true;
    }
    signupButton();
}

function signupButton()
{
    try
    {
        if(emailsubmit && passsubmit && namesubmit && mobilesubmit)
        {
            document.getElementById("signup").disabled = false;
        }
        else
        {
            document.getElementById("signup").disabled = true;
        }
    }
    catch(e)
    {
        console.log(e);
    }
    // finally{
    //     console.log(`emailsubmit:- ${emailsubmit} \
    //     passsubmit:- ${passsubmit}\
    //     namesubmit:- ${namesubmit}\
    //     mobilesubmit:- ${mobilesubmit}`);
    // }
}

function signinbutton()
{
    try
    {
        if(emailsubmit && passsubmit)
        {
            document.getElementById("MySubmit").disabled = false;
        }
        else
        {
            document.getElementById("MySubmit").disabled = true;
        }
    }
    catch(e)
    {
        console.log(e);
    }
    // finally{
    //     console.log(`emailsubmit:- ${emailsubmit}\
    //     passsubmit:- ${passsubmit}`);
    // }
}