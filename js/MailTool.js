//send email & show english text
function sendEmail()
{       
    if(document.getElementById("message").value ==0)
    {    
        alert("Your message is blank");
    }
    else 
    {
        send();   
        alert("I received your message, thank you");    
        reset();     
    }
    return false;
}

//send email & show german text
function nachrichtSenden()
{       
    if(document.getElementById("message").value ==0)
    {    
        alert("Ihre Nachricht ist leer");
    }
    else 
    { 
        send();  
        alert("Ich habe Ihre Nachricht erhalten, danke!");    
        reset();    
    }
    return false;
}


//send email & show czech text
function poslatZpravu()
{    
   
    if(document.getElementById("message").value ==0)
    {    
        alert("Vaše zpráva je prázdná");
    }
    else 
    {      
        send(); 
        alert("Vaši zprávu jsem obdržel, díky!");    
        reset();    
    }
    return false;
}


//send the email
function send()
{      
    var url = "https://mailtool.azurewebsites.net/api/email/send?message=" + document.getElementById("message").value + "&from=" + document.getElementById("from").value;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, true); // false for synchronous request
    xmlHttp.send();      
}


//reset the form
function reset()    
{
    document.getElementById("message").value = "";    
    document.getElementById("from").value = "";  
}
