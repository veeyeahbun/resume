


//post form data to API
const thisForm = document.getElementById('messageform');
thisForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    if(document.getElementById("message").value ==0)
    {    
        alert("Vaše zpráva je prázdná");
    }
    else 
    {      
        const formData = new FormData(thisForm).entries()
        const response = await fetch('https://janrucil.dev/zigo/api/webmessages', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(Object.fromEntries(formData))
        });
        const result = await response.json();
        console.log(result)
        
        alert("Vaši zprávu jsem obdržel, díky!");    
        reset();    
    }
});




//reset the form
function reset()    
{
    document.getElementById("message").value = "";    
    document.getElementById("from").value = "";  
}
