
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
        //setEnglish(); //do nothing because it is already english by default
        break;            
}



function setGerman(){

    //flags has to be re-set to english and czech:
document.getElementById('dropdown-menu').innerHTML = "<li><a onclick=\"setEnglish()\"><img src=\"images/en.png\"> English</a></li><li><a onclick=\"setCzech()\"><img src=\"images/cz.png\"> Česky</a></li>";
document.getElementById('flag').innerHTML = "<img src=\"images/de.png\"> <i class=\"fa fa-caret-down\"></i>";


//navbar items
document.getElementById('my_references').innerHTML = "Projekte";
document.getElementById('my_services').innerHTML = "Über mich";
document.getElementById('my_contact').innerHTML = "Kontakt";
document.getElementById('contact_head').innerHTML = "Kontakt";

document.getElementById('caption').innerHTML = "Digitaler Nomad mit Leidenschaft für Spiele";

document.getElementById('my_policy').innerHTML = "<a href=\"datenschutz.html\" target=\"_blank\"  class=\"smoothScroll\">Datenschutz</a>";

    document.getElementById('mcpPraktikum').innerHTML = "Praktikum";
    document.getElementById('zabranskyTimeline').innerHTML = "01/2019 - Gegenwart";
    document.getElementById('last').innerHTML = "Kürzliche Projekte:";
 
    document.getElementById('smarthome').innerHTML =  "<a href=\"./visualisierung/index.html\" target=\"_blank\" rel=\"noopener noreferrer\" >Smart Home</a> - interaktive 3D Visualisierung"
    + "<img alt=\"alternative text\" title=\"vytvořeno v Unreal Engine 4\" style=\"margin-top: -2px;\" src=\"./images/ue4.png\">";


    document.getElementById('theballgame').innerHTML =  "<a href=\"./schauraum/index.html\" target=\"_blank\" rel=\"noopener noreferrer\" >The Ball Game </a> - Gelegenheitsspiel (Arcade)"
    + "<img alt=\"alternative text\" title=\"erstellt in Unreal Engine 4\" style=\"margin-top: -2px;\" src=\"./images/ue4.png\">";


    document.getElementById('kontakt').innerHTML = "Für mehr Auskunft kontaktieren Sie mich per <a style='text-decoration: underline;' href='mailto:office@janrucil.dev'>Email</a>.";

    document.getElementById('games_header').innerHTML = "Spiele & 3D";
    document.getElementById('games_desc').innerHTML = "Unabhängige Spiele, Simulationen und 3D Grafik";

    document.getElementById('cust_header').innerHTML = "Softwarelösungen";
    document.getElementById('cust_desc').innerHTML = " IT-Infrastruktur & maßgeschneiderte Apps";
    document.getElementById('specialist').innerHTML = "Digitaler Nomad mit Leidenschaft für Spiele";
    document.getElementById('specialist_p').innerHTML = "Ich bin ein professioneller fullstack Softwareentwickler mit Spezialisierung auf Handy- und Desktopapps. Mein Beruf ist es, Firmenlösungen zu erstellen.";

    
    document.getElementById('projects_h').innerHTML = "Meine Projekte:";


    document.getElementById('specialist_g').innerHTML = "In meiner Freizeit bin ich auch ein Leidenschaftlicher Spielentwickler. Ich habe noch kein Spiel veröffentlicht, ich arbeite nun an meinen ersten Prototypen.";
  
    document.getElementById('contact_h').innerHTML = "Fragen kostet nichts";
    document.getElementById('contact_p').innerHTML = "Sie haben eine interessante Idee oder Projekt?<br>Sie können mich gerne kontaktieren. Ich verrechne nichts fürs Consulting,";
    document.getElementById('contact_p2').innerHTML = "<span style=\"text-decoration: underline;\">Bitte beachten Sie</span> dass ich wenigar als 10 Std. / Woche verfügbar bin.";


    
    document.getElementById('inboxme').innerHTML = "Schreiben Sie mir:";
    document.getElementById('wien').innerHTML = "Wien, Österreich";
    document.getElementById('contactform').innerHTML = "<form  onsubmit=\"event.preventDefault(); return nachrichtSenden()\"  > <input name=\"from\" type=\"text\" class=\"form-control\" id=\"from\" placeholder=\"Absender: (unpflichtig)\"><textarea name=\"message\" rows=\"5\" class=\"form-control\" id=\"message\" placeholder=\"Nachricht\"></textarea> <div class=\"col-md-6 col-sm-10\"> <input  type=\"submit\" class=\"form-control\" id=\"submit\" value=\"SENDEN\"></div></form>"


}


function setCzech(){

        //flags has to be re-set to german and english:
document.getElementById('dropdown-menu').innerHTML = "<li><a onclick=\"setGerman()\"><img src=\"images/de.png\"> Deutsch</a></li><li><a onclick=\"setEnglish()\"><img src=\"images/en.png\"> English</a></li>";
document.getElementById('flag').innerHTML = "<img src=\"images/cz.png\"> <i class=\"fa fa-caret-down\"></i>";

//navbar items
document.getElementById('my_references').innerHTML = "Projekty";
document.getElementById('my_services').innerHTML = "O mě";
document.getElementById('my_contact').innerHTML = "Kontakt";
document.getElementById('contact_head').innerHTML = "Kontakt";

document.getElementById('caption').innerHTML = "Digitální nomád s vášní pro hry";
document.getElementById('my_policy').innerHTML = "<a href=\"ochranadat.html\" target=\"_blank\"  class=\"smoothScroll\">Ochrana osobních údajů</a>";


    document.getElementById('mcpPraktikum').innerHTML = "Stáž";
    document.getElementById('zabranskyTimeline').innerHTML = "01/2019 - současnost";

    document.getElementById('last').innerHTML = "Nedávné projekty:";

    document.getElementById('smarthome').innerHTML =  "<a href=\"./vizualizace/index.html\" target=\"_blank\" rel=\"noopener noreferrer\" >Smart Home </a><span id=\"winzab\"></a> - Interaktivní 3D vizualizace</span>"
    + "<img alt=\"alternative text\" title=\"vytvořeno v Unreal Engine 4\" style=\"margin-top: -2px;\" src=\"./images/ue4.png\">";


    document.getElementById('theballgame').innerHTML =  "<a href=\"./3dshowroom/index.html\" target=\"_blank\" rel=\"noopener noreferrer\" >The Ball Game </a> - příležitostná arkádová hra"
    + "<img alt=\"alternative text\" title=\"vytvořeno v Unreal Engine 4\" style=\"margin-top: -2px;\" src=\"./images/ue4.png\">";

    
    document.getElementById('kontakt').innerHTML = "Pro více informací mě kontaktujte přes <a style='text-decoration: underline;' href='mailto:office@janrucil.dev'>email</a>.";
   

    document.getElementById('games_header').innerHTML = "Hry & 3D";
    document.getElementById('games_desc').innerHTML = "Nezávislé hry, simulace a 3D grafika";

    document.getElementById('cust_header').innerHTML = "Softwarová řešení";
    document.getElementById('cust_desc').innerHTML = "IT infrastruktura & appky na míru.";

    
    document.getElementById('projects_h').innerHTML = "Moje projekty:";


    document.getElementById('specialist').innerHTML = "Digitální nomád s vášní pro hry";
    document.getElementById('specialist_p').innerHTML = "Jsem profesionální fullstack vývojář softwaru se specializací na mobilní a desktopové aplikace. Mým povoláním je tvorba firemních řešení.";


    document.getElementById('specialist_g').innerHTML = "Ve volném čase jsem taky vášnivý vývojář her. Zatím jsem žádnou hru nevydal, teď pracuju na svým prvních prototypech.";
    document.getElementById('contact_h').innerHTML = "Za zeptání nic nedáte";
    document.getElementById('contact_p').innerHTML = "Máte zajímavý nápad nebo projekt?<br> Můžete mě klidně kontaktovat. Za konzultace si nic neúčtuju.";
    document.getElementById('contact_p2').innerHTML = "<span style=\"text-decoration: underline;\">Berte prosím na vědomí</span> že moje dostupnost je aktuálně méně než 10h týdně. ";

    document.getElementById('inboxme').innerHTML = "Napište mi:";
    document.getElementById('wien').innerHTML = "Vídeň, Rakousko";
    document.getElementById('contactform').innerHTML = "<form  onsubmit=\"event.preventDefault(); return poslatZpravu()\"  > <input name=\"from\" type=\"text\" class=\"form-control\" id=\"from\" placeholder=\"Odesílatel: (nepovinné)\"><textarea name=\"message\" rows=\"5\" class=\"form-control\" id=\"message\" placeholder=\"Zpráva\"></textarea> <div class=\"col-md-6 col-sm-10\"> <input type=\"submit\" class=\"form-control\" id=\"submit\" value=\"POSLAT\"></div></form>"

}



function setEnglish(){


    //flags has to be re-set to english and czech:
    document.getElementById('dropdown-menu').innerHTML = "<li><a onclick=\"setGerman()\"><img src=\"images/de.png\"> Deutsch</a></li><li><a onclick=\"setCzech()\"><img src=\"images/cz.png\"> Česky</a></li>";
    document.getElementById('flag').innerHTML = "<img src=\"images/en.png\"> <i class=\"fa fa-caret-down\"></i>";

    //navbar items

document.getElementById('my_references').innerHTML = "Projects";
document.getElementById('my_services').innerHTML = "About";
document.getElementById('my_contact').innerHTML = "Contact";
document.getElementById('contact_head').innerHTML = "Contact";

document.getElementById('my_policy').innerHTML = "<a href=\"privacy.html\" target=\"_blank\"  class=\"smoothScroll\">Privacy policy</a>";

document.getElementById('caption').innerHTML = "Digital nomad with a passion for games";
    document.getElementById('mcpPraktikum').innerHTML = "Intership";
    document.getElementById('zabranskyTimeline').innerHTML = "01/2019 - present";

    document.getElementById('last').innerHTML = "Recent projects:";

    document.getElementById('smarthome').innerHTML =  "<a href=\"./visualization/index.html\" target=\"_blank\" rel=\"noopener noreferrer\" >Smart Home </a> - interactive 3D visualization"
    + "<img alt=\"alternative text\" title=\"vytvořeno v Unreal Engine 4\" style=\"margin-top: -2px;\" src=\"./images/ue4.png\">";


    document.getElementById('theballgame').innerHTML =  "<a href=\"./3dshowroom/index.html\" target=\"_blank\" rel=\"noopener noreferrer\" >The Ball Game </a> - casual arcade game"
    + "<img alt=\"alternative text\" title=\"vytvořeno v Unreal Engine 4\" style=\"margin-top: -2px;\" src=\"./images/ue4.png\">";

    
    document.getElementById('kontakt').innerHTML = "For more info contact me per <a style='text-decoration: underline;' href='mailto:office@janrucil.dev'>email</a>.";
   
    document.getElementById('games_header').innerHTML = "Games & 3D";
    document.getElementById('games_desc').innerHTML = "Indie-games, simulations and 3D graphics.";

       
    document.getElementById('cust_header').innerHTML = "Software solutions";
    document.getElementById('cust_desc').innerHTML = "IT infrastructure & custom apps";
    
    document.getElementById('projects_h').innerHTML = "My projects:";

    document.getElementById('specialist').innerHTML = "Digital nomad with passion for games";
    document.getElementById('specialist_p').innerHTML = "I am a professional fullstack software developer with specialization on mobile and desktop apps. It is my occupation to create business solutions.";



    document.getElementById('specialist_g').innerHTML = "In my free time I am also a passionate game developer. I haven´t published any games yet, I am now working on my first prototypes.";
  
    document.getElementById('contact_h').innerHTML = "It costs nothing to ask";
    document.getElementById('contact_p').innerHTML = "You´ve got an interesting idea or project?<br> Feel free to contact me. I don´t charge anything for consulting.";
    document.getElementById('contact_p2').innerHTML = "<span style=\"text-decoration: underline;\">Please note</span> that my current availability is less than 10h / week.";


    
    document.getElementById('inboxme').innerHTML = "Inbox me:";
    document.getElementById('wien').innerHTML = "Vienna, Austria";
    document.getElementById('contactform').innerHTML = "<form onsubmit=\"event.preventDefault(); return sendEmail()\"  > <input name=\"from\" type=\"text\" class=\"form-control\" id=\"from\" placeholder=\"Sender: (optional)\"><textarea name=\"message\" rows=\"5\" class=\"form-control\" id=\"message\" placeholder=\"Message\"></textarea> <div class=\"col-md-6 col-sm-10\"> <input type=\"submit\" class=\"form-control\" id=\"submit\" value=\"SEND\"></div></form>"

}