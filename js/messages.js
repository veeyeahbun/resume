


//post form data to API
const thisForm = document.getElementById('messageform');
thisForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    if(document.getElementById("text").value ==0)
    {    
        alert("Vaše zpráva je prázdná");
    }
    else 
    {      
      
        const formData = new FormData(thisForm).entries();
        const json = JSON.stringify(Object.fromEntries(formData));
        const response = await fetch('https://janrucil.dev/zigo/api/webmessages', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: json
        });


        if(await response.status == 200){
            alert("Vaši zprávu jsem obdržel, díky!");    
            reset(); 
        }   
    }
});




//reset the form
function reset()    
{
    document.getElementById("text").value = "";    
    document.getElementById("from").value = "";  
}


