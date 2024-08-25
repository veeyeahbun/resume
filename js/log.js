

document.addEventListener("DOMContentLoaded", function(event) {

  var url = this.documentURI;
   // Fetch the IP address from the API
   fetch("https://ipinfo.io/json") 
   .then(response => response.json())
   .then(data => {
       return fetch('https://janrucil.dev/zigo/api/weblogs', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: '{"url":"'+ url +'","text":"content served to '+ `${data.ip}` +' in ' + `${data.city}` +'"}'         
      });
   }); 
});


document.getElementById("formsubmit").addEventListener("click", function(event){

   var url = document.documentURI;
    // Fetch the IP address from the API
    fetch("https://ipinfo.io/json") 
    .then(response => response.json())
    .then(data => {   
        return fetch('https://janrucil.dev/zigo/api/weblogs', {
           method: 'POST',
           headers: { 'Content-Type': 'application/json' },
           body: '{"url":"'+ url +'","text":"form submitted by '+ `${data.ip}` +' in ' + `${data.city}` +'"}'               
       });
    }); 
});

