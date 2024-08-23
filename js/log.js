

document.addEventListener("DOMContentLoaded", function(event) {

    
  var ip = '';

  var url = this.documentURI;
   // Fetch the IP address from the API
   fetch("https://ipinfo.io/json") 
   .then(response => response.json())
   .then(data => {
       // Display the IP address on the screen
       ip = `${data.ip}`;
      
       return fetch('https://janrucil.dev/zigo/api/weblogs', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: '{"url":"'+ url +'","text":"served to '+ ip +'"}'         
      });
   }); 
});

