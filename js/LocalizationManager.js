
var userLang = navigator.language; 
//alert ("The language is: " + userLang);


//override the default english version by available language
switch(userLang)
{
    case "cs":
    case "sk":
    case "cs-CZ":   
    case "sk-SK":    
        setCzech();
        break;

    case "de":
    case "de-AT":
    case "de-DE":
    case "de-LI":
        //translate to german
        setGerman();
        break;

        default:
        setEnglish(); //do nothing because it is already english by default
        break;            
}



function setGerman(){

    //flags has to be re-set to english and czech:
document.getElementById('dropdown-menu').innerHTML = "<li><a onclick=\"setEnglish()\"><img src=\"images/en.png\"> English</a></li><li><a onclick=\"setCzech()\"><img src=\"images/cz.png\"> Česky</a></li>";
document.getElementById('flag').innerHTML = "<img src=\"images/de.png\"> <i class=\"fa fa-caret-down\"></i>";


//navbar items
document.getElementById('my_references').innerHTML = "Expertise";
document.getElementById('my_services').innerHTML = "Über mich";
document.getElementById('my_contact').innerHTML = "Kontakt";
document.getElementById('contact_head').innerHTML = "Kontakt";

document.getElementById('caption').innerHTML = "Presentation wie ein Kinderspiel:";

document.getElementById('my_policy').innerHTML = "<a href=\"datenschutz.html\" target=\"_blank\"  class=\"smoothScroll\">Datenschutz</a>";




 
    document.getElementById('textureresizer').innerHTML =  "<a href=\"./textureresizer/index.html\" target=\"_blank\" rel=\"noopener noreferrer\" >Texture Resizer</a> - Bilderverarbeitungstool";


    document.getElementById('smarthome').innerHTML =  "<a href=\"./visualisierung/index.html\" target=\"_blank\" rel=\"noopener noreferrer\" >Smart Home</a> - interaktive 3D Visualisierung";


    document.getElementById('theballgame').innerHTML =  "<a href=\"./schauraum/index.html\" target=\"_blank\" rel=\"noopener noreferrer\" >The Ball Game </a> - Gelegenheitsspiel (Arcade)";


    document.getElementById('kontakt').innerHTML = "Für mehr Auskunft kontaktieren Sie mich per <a style='text-decoration: underline;' href='mailto:office@janrucil.dev'>Email</a>.";




    document.getElementById('games_header').innerHTML = "Expertise";
    document.getElementById('gamedevInfo').innerHTML = "0 published titles, work in progress";
    document.getElementById('3dvisInfo').innerHTML = "3D-Asset-Erstellung, Rendering, interaktive Simulationen und VR";

    document.getElementById('cnetInfo').innerHTML = "Server - client applications & utilities";

    document.getElementById('specialist').innerHTML = "Über mich";
    document.getElementById('specialist_p').innerHTML = "Als Spielentwickler mit starken Codierungsfähigkeiten (dank meinem Hintergrund als C# Anwendungsprogrammierer - WPF, Xamarin, WebAPI) bin ich in der Lage, anspruchsvolle, innovative und spannende Spiele zu entwickeln. Ich verfüge über eine umfassende Erfahrung im Game Design und bin in der Lage, alle Aspekte des Entwicklungsprozesses zu verstehen und zu verwalten.  ";

    document.getElementById('gamedev').innerHTML = "Ich habe ein Gespür für intuitive und reibungslose Benutzeroberflächen, mit denen die Spieler interagieren können. Darüber hinaus habe ich Erfahrung in der Überwachung und Optimierung der Spielleistung und der Benutzererfahrung.<br><br>Ich habe an zahlreichen Projekten gearbeitet, an denen ich meine Fähigkeiten als Spieleentwickler und Apps-Programmierer unter Beweis gestellt habe. Meine Projekte umfassen sowohl 2D- als auch 3D-Spiele, sowie Apps und Web-Anwendungen. <br><br>Mein Ziel ist es, innovative und unterhaltsame Spiele zu kreieren, die Spieler auf der ganzen Welt begeistern. Ich freue mich darauf, mehr über Ihre Projekte und Ideen zu erfahren und hoffe, dass wir zusammenarbeiten können.";
    
  
    
    document.getElementById('inboxme').innerHTML = "Schreiben Sie mir:";
    document.getElementById('wien').innerHTML = "Wien, Österreich";
    document.getElementById('contactform').innerHTML = "<form onsubmit=\"event.preventDefault(); return nachrichtSenden()\"  > <input name=\"from\" type=\"text\" class=\"form-control\" id=\"from\" placeholder=\"Absender: (unpflichtig)\"><textarea name=\"message\" rows=\"5\" class=\"form-control\" id=\"message\" placeholder=\"Nachricht\"></textarea> <div class=\"col-md-6 col-sm-10\"> <input  type=\"submit\" class=\"form-control\" id=\"submit\" value=\"SENDEN\"></div></form>"

}


function setCzech(){

        //flags has to be re-set to german and english:
document.getElementById('dropdown-menu').innerHTML = "<li><a onclick=\"setGerman()\"><img src=\"images/de.png\"> Deutsch</a></li><li><a onclick=\"setEnglish()\"><img src=\"images/en.png\"> English</a></li>";
document.getElementById('flag').innerHTML = "<img src=\"images/cz.png\"> <i class=\"fa fa-caret-down\"></i>";

//navbar items
document.getElementById('my_references').innerHTML = "Expertiza";
document.getElementById('my_services').innerHTML = "O mě";
document.getElementById('my_contact').innerHTML = "Kontakt";
document.getElementById('contact_head').innerHTML = "Kontakt";
document.getElementById('caption').innerHTML = "Hledáte perfektní interiér? Nechte si ho navrhnout ve 3D!";
document.getElementById('my_policy').innerHTML = "<a href=\"ochranadat.html\" target=\"_blank\"  class=\"smoothScroll\">Ochrana osobních údajů</a>";



    document.getElementById('smarthome').innerHTML =  "vyhnete se zbytečným nákladům na chyby a předělávky";

    document.getElementById('textureresizer').innerHTML =  "Získáte jasnou představu o tom, jak má budoucí prostor vypadat";
    
    document.getElementById('theballgame').innerHTML =  "3D návrh vám také pomůže ušetřit čas při výběru materiálů a nábytku.";
   
    document.getElementById('kontakt').innerHTML = "Pro více informací mě kontaktujte přes <a style='text-decoration: underline;' href='mailto:office@janrucil.dev'>email</a>.";
    document.getElementById('games_header').innerHTML = "Expertiza";
    document.getElementById('gamedevInfo').innerHTML = "0 vydaných titulů, pracuji na tom";
    document.getElementById('3dvisInfo').innerHTML = "Tvorba 3D assetů, rendering, interaktivní simulace a VR.";

    document.getElementById('cnetInfo').innerHTML = "Server - client aplikace & nástroje";


    document.getElementById('specialist').innerHTML = "O mě";
    document.getElementById('specialist_p').innerHTML = "Jako vývojář her se silnými kódovacími schopnostmi (díky mému pozadí jako C# programátor aplikací - WPF, Xamarin, WebAPI) jsem schopen vyvíjet náročné, inovativní a zábavné hry. Mám rozsáhlé zkušenosti s designem her a dokážu porozumět a spravovat všem aspektům vývojového procesu. ";
    

    document.getElementById('gamedev').innerHTML = "Mám smysl pro intuitivní a hladké uživatelské rozhraní, se kterým mohou hráči interagovat. Navíc mám zkušenosti s dohledem a optimalizací herního výkonu a uživatelského zážitku.<br><br>Byl jsem zapojen do mnoha projektů, na kterých jsem potvrdil své schopnosti jako vývojáře her a programátora aplikací. Moje projekty zahrnovaly jak 2D, tak 3D hry, stejně jako aplikace a webové aplikace.<br><br>Mým cílem je vytvářet inovativní a zábavné hry, které budou bavit hráče po celém světě. Těším se na to, že se dozvím více o vašich projektech a nápadech a doufám, že budeme spolupracovat.";
    
    


    document.getElementById('inboxme').innerHTML = "Napište mi:";
    document.getElementById('wien').innerHTML = "Vídeň, Rakousko";
    document.getElementById('contactform').innerHTML = "<form  onsubmit=\"event.preventDefault(); return poslatZpravu()\"  > <input name=\"from\" type=\"text\" class=\"form-control\" id=\"from\" placeholder=\"Odesílatel: (nepovinné)\"><textarea name=\"message\" rows=\"5\" class=\"form-control\" id=\"message\" placeholder=\"Zpráva\"></textarea> <div class=\"col-md-6 col-sm-10\"> <input type=\"submit\" class=\"form-control\" id=\"submit\" value=\"POSLAT\"></div></form>"

}


function setEnglish(){


    //flags has to be re-set to english and czech:
    document.getElementById('dropdown-menu').innerHTML = "<li><a onclick=\"setGerman()\"><img src=\"images/de.png\"> Deutsch</a></li><li><a onclick=\"setCzech()\"><img src=\"images/cz.png\"> Česky</a></li>";
    document.getElementById('flag').innerHTML = "<img src=\"images/en.png\"> <i class=\"fa fa-caret-down\"></i>";

    //navbar items

document.getElementById('my_references').innerHTML = "Expertise";
document.getElementById('my_services').innerHTML = "About me";
document.getElementById('my_contact').innerHTML = "Contact";
document.getElementById('contact_head').innerHTML = "Contact";
document.getElementById('my_policy').innerHTML = "<a href=\"privacy.html\" target=\"_blank\"  class=\"smoothScroll\">Privacy policy</a>";
document.getElementById('caption').innerHTML = "Digital homestaging";




    document.getElementById('textureresizer').innerHTML =  "<a href=\"./textureresizer/\" target=\"_blank\" rel=\"noopener noreferrer\" >Texture Resizer</a> - image processing tool";

    document.getElementById('smarthome').innerHTML =  "<a href=\"./visualization/\" target=\"_blank\" rel=\"noopener noreferrer\" >Smart Home </a> - interactive 3D visualization";


    document.getElementById('theballgame').innerHTML =  "<a href=\"./3dshowroom/\" target=\"_blank\" rel=\"noopener noreferrer\" >The Ball Game </a> - casual arcade game";
    
    document.getElementById('kontakt').innerHTML = "For more info contact me per <a style='text-decoration: underline;' href='mailto:office@janrucil.dev'>email</a>.";  

    document.getElementById('games_header').innerHTML = "Ex­per­ti­se";
    document.getElementById('gamedevInfo').innerHTML = "0 published titles, work in progress";
    document.getElementById('3dvisInfo').innerHTML =  "Creation of 3D assets, rendering, interactive simulations and VR";

    document.getElementById('cnetInfo').innerHTML = "Server - client applications & utilities";

    document.getElementById('specialist').innerHTML = "About me";
    document.getElementById('specialist_p').innerHTML = "As a game developer with strong coding skills (thanks to my background as a C# app programmer - WPF, Xamarin, WebAPI) I am able to develop challenging, innovative and exciting games. I have extensive experience in game design and am able to comprehend and manage all aspects of the development process. ";
    document.getElementById('gamedev').innerHTML = "I have an eye for intuitive and smooth user interfaces with which players can interact. Additionally, I have experience in monitoring and optimizing game performance and user experience.<br><br>I've worked on numerous projects that have showcased my skills as a game developer and app programmer. My projects include both 2D and 3D games, as well as apps and web applications.<br><br>My goal is to create innovative and entertaining games that will captivate players all around the world. I look forward to hearing more about your projects and ideas and hope that we can work together.";
    
    document.getElementById('inboxme').innerHTML = "Inbox me:";
    document.getElementById('wien').innerHTML = "Vienna, Austria";
    document.getElementById('contactform').innerHTML = "<form onsubmit=\"event.preventDefault(); return sendEmail()\"  > <input name=\"from\" type=\"text\" class=\"form-control\" id=\"from\" placeholder=\"Sender: (optional)\"><textarea name=\"message\" rows=\"5\" class=\"form-control\" id=\"message\" placeholder=\"Message\"></textarea> <div class=\"col-md-6 col-sm-10\"> <input type=\"submit\" class=\"form-control\" id=\"submit\" value=\"SEND\"></div></form>"

}