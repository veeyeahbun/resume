


//post form data to API
const thisForm = document.getElementById('poptavkaForm');
thisForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    if(document.getElementById("from").value ==0)
    {    
        alert("Zadeje prosím kontakt");
    }
    else 
    {      
      
        const formData = new FormData(thisForm).entries();
        const json = JSON.stringify(Object.fromEntries(formData));
        const response = await fetch('https://janrucil.dev/zigo/api/webinquiries', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: json
        });


        if(await response.status == 200){
            alert("V brzké době se Vám ozveme!");    
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
