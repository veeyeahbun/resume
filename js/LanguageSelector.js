
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

document.getElementById('caption').innerHTML = "Digitaler Nomad & leidenschaftlicher Spielentwickler";

document.getElementById('my_policy').innerHTML = "<a href=\"datenschutz.html\" target=\"_blank\"  class=\"smoothScroll\">Datenschutz</a>";

    document.getElementById('mcpPraktikum').innerHTML = "Praktikum";
    document.getElementById('zabranskyTimeline').innerHTML = "01/2019 - Gegenwart";
    document.getElementById('last').innerHTML = "Kürzliche Projekte:";
 
    document.getElementById('theballgame').innerHTML =  "<a href=\"./schauraum/index.html\" target=\"_blank\" rel=\"noopener noreferrer\" >The Ball Game </a><span id=\"winzab\"> - Gelegenheitsspiel (Arcade) </span>"
    + "<img alt=\"alternative text\" title=\"erstellt in Unreal Engine 4\" style=\"margin-top: -2px;\" src=\"./images/ue4.png\">";


    document.getElementById('kontakt').innerHTML = "Für mehr Auskunft kontaktieren Sie mich per <a style='text-decoration: underline;' href='mailto:office@janrucil.dev'>Email</a>.";

    document.getElementById('games_header').innerHTML = "Spiele & 3D";
    document.getElementById('games_desc').innerHTML = "Unabhängige Spiele, Simulationen und 3D Kunst";

    document.getElementById('cust_header').innerHTML = "Geschäftslösungen";
    document.getElementById('cust_desc').innerHTML = " Businesssoftware & maßgeschneiderte Apps";
    document.getElementById('specialist').innerHTML = "Digitaler Nomad mit Leidenschaft für Spiele";
    document.getElementById('specialist_p').innerHTML = "Ich bin auf Handy- (Android und iOS) und Desktopapps (nur Windows) spezialisiert. Mit 2+ Jahren Fullstackerfahrung kann ich eine App veröffenltichen und für sie den sogenannten Backend (Server mit Datenbank) einrichten, alles aus einer Hand."
    + "<br>	<br> Vielleicht wissen Sie was ich meine:";

    
    document.getElementById('projects_h').innerHTML = "Meine Projekte:";

    document.getElementById('moredetails').innerHTML = "(Kontaktieren Sie mich für mehr Auskunft)";
    document.getElementById('specialist_g').innerHTML = "Ich habe immer Spiele geliebt. Mit 5 Jahren habe ich bewundert, wie fortgeschritten Super Mario war. Damals hatte ich keinen PC und YouTube hat es nicht gegeben. 20 Jahre später bin ich ein erfahrene Programmierer mit Zugang zu Technologien wie Unreal Engine. Es hindert mich nichts daran, eigene Spiele zu machen :)";
  
    document.getElementById('contact_h').innerHTML = "Fragen kostet nichts";
    document.getElementById('contact_p').innerHTML = "Sie haben eine interessante Idee oder Projekt?<br>Sie können mich gerne kontaktieren. Ich verrechne nichts fürs Consulting,";
    document.getElementById('contact_p2').innerHTML = "<span style=\"text-decoration: underline;\">Bitte beachten Sie</span> dass ich wenigar als 10 Std. / Woche verfügbar bin.";


    
    document.getElementById('inboxme').innerHTML = "Schreiben Sie mir:";
    document.getElementById('wien').innerHTML = "Wien, Österreich";
    document.getElementById('contactform').innerHTML = "<input name=\"name\" type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Absender: (unpflichtig)\"><textarea name=\"message\" rows=\"5\" class=\"form-control\" id=\"message\" placeholder=\"Nachricht\"></textarea> <div class=\"col-md-6 col-sm-10\"> <input name=\"submit\" type=\"submit\" class=\"form-control\" id=\"submit\" value=\"SENDEN\"></div>"


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

document.getElementById('caption').innerHTML = "Digitální nomád & vášnivý vývojář her";
document.getElementById('my_policy').innerHTML = "<a href=\"ochranadat.html\" target=\"_blank\"  class=\"smoothScroll\">Ochrana osobních údajů</a>";


    document.getElementById('mcpPraktikum').innerHTML = "Stáž";
    document.getElementById('zabranskyTimeline').innerHTML = "01/2019 - současnost";

    document.getElementById('last').innerHTML = "Nedávné projekty:";

    document.getElementById('theballgame').innerHTML =  "<a href=\"./3dshowroom/index.html\" target=\"_blank\" rel=\"noopener noreferrer\" >The Ball Game </a><span id=\"winzab\"> - příležitostná arkádová hra </span>"
    + "<img alt=\"alternative text\" title=\"vytvořeno v Unreal Engine 4\" style=\"margin-top: -2px;\" src=\"./images/ue4.png\">";

    
    document.getElementById('kontakt').innerHTML = "Pro více informací mě kontaktujte přes <a style='text-decoration: underline;' href='mailto:office@janrucil.dev'>email</a>.";
   

    document.getElementById('games_header').innerHTML = "Hry & 3D";
    document.getElementById('games_desc').innerHTML = "Nezávislé hry, simulace a 3D umění";

    document.getElementById('cust_header').innerHTML = "Podniková řešení";
    document.getElementById('cust_desc').innerHTML = "Firemní software & appky na míru.";

    
    document.getElementById('projects_h').innerHTML = "Moje projekty:";


    document.getElementById('specialist').innerHTML = "Digitální nomád s vášní pro hry";
    document.getElementById('specialist_p').innerHTML = "Specializuji se na mobilní (Android i iOS) a desktopové (pouze Windows) aplikace. S 2+ lety fullstack zkušeností umím aplikaci publikovat a zajistit pro ni i takzvaný backend (server s databankou), vše z jedné ruky. "
    + "<br>	<br> Možná víte co myslím:";

    document.getElementById('moredetails').innerHTML = "(kontaktujte mě pro více detailů)";
    document.getElementById('specialist_g').innerHTML = "Vždycky jsem miloval videohry. V 5 letech jsem se závistí obdivoval, jak pokročilý byl Super Mario. Tehdy jsem neměl počítač a YouTube neexistoval. Teď, o 20 let později, jsem zkušený programátor s přístupem k moderním technologiím jako Unreal Engine. V tvorbě vlastních her mi nic nebrání :)";
    document.getElementById('contact_h').innerHTML = "Za zeptání nic nedáte";
    document.getElementById('contact_p').innerHTML = "Máte zajímavý nápad nebo projekt?<br> Můžete mě klidně kontaktovat. Za konzultace si nic neúčtuju.";
    document.getElementById('contact_p2').innerHTML = "<span style=\"text-decoration: underline;\">Berte prosím na vědomí</span> že moje dostupnost je méně než 10h týdně. ";

    document.getElementById('inboxme').innerHTML = "Napište mi:";
    document.getElementById('wien').innerHTML = "Vídeň, Rakousko";
    document.getElementById('contactform').innerHTML = "<input name=\"name\" type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Odesílatel: (nepovinné)\"><textarea name=\"message\" rows=\"5\" class=\"form-control\" id=\"message\" placeholder=\"Zpráva\"></textarea> <div class=\"col-md-6 col-sm-10\"> <input name=\"submit\" type=\"submit\" class=\"form-control\" id=\"submit\" value=\"POSLAT\"></div>"

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

document.getElementById('caption').innerHTML = "Digital nomad & passionate game developer";
    document.getElementById('mcpPraktikum').innerHTML = "Trainee";
    document.getElementById('zabranskyTimeline').innerHTML = "01/2019 - present";

    document.getElementById('last').innerHTML = "Recent projects:";

    document.getElementById('theballgame').innerHTML =  "<a href=\"./3dshowroom/index.html\" target=\"_blank\" rel=\"noopener noreferrer\" >The Ball Game </a><span id=\"winzab\"> - casual arcade game </span>"
    + "<img alt=\"alternative text\" title=\"vytvořeno v Unreal Engine 4\" style=\"margin-top: -2px;\" src=\"./images/ue4.png\">";

    
    document.getElementById('kontakt').innerHTML = "For more info contact me per <a style='text-decoration: underline;' href='mailto:office@janrucil.dev'>email</a>.";
   
    document.getElementById('games_header').innerHTML = "Games & 3D";
    document.getElementById('games_desc').innerHTML = "Indie-games, simulations and 3D art.";

       
    document.getElementById('cust_header').innerHTML = "Enterprise solutions";
    document.getElementById('cust_desc').innerHTML = "Business software & custom apps.";
    
    document.getElementById('projects_h').innerHTML = "My projects:";

    document.getElementById('specialist').innerHTML = "Digital nomad with passion for games";
    document.getElementById('specialist_p').innerHTML = "I am specialized on mobile (Android and iOS) and desktop (Windows only) apps. With 2+ years of fullstack experience, I can publish an app & setup the so-called backend (server with database) for it, all-inclusive."
    + "<br>	<br> Maybe you know what mean:";

    document.getElementById('moredetails').innerHTML = "(contact me for more details)";

    document.getElementById('specialist_g').innerHTML = "I always loved games. At the age of 5, I wondered with envy how advanced Super Mario was. I had no computer and there was no Youtube at that time. Now, 20 years later, I am a skilled programmer with access to modern technology like Unreal Engine. There is nothing preventing me from making my own games :)";
  
    document.getElementById('contact_h').innerHTML = "It costs nothing to ask";
    document.getElementById('contact_p').innerHTML = "You´ve got an interesting idea or project?<br> Feel free to contact me. I don´t charge anything for consulting.";
    document.getElementById('contact_p2').innerHTML = "<span style=\"text-decoration: underline;\">Please note</span> that my current availability is less than 10h / week.";


    
    document.getElementById('inboxme').innerHTML = "Inbox me:";
    document.getElementById('wien').innerHTML = "Vienna, Austria";
    document.getElementById('contactform').innerHTML = "<input name=\"name\" type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Sender: (optional)\"><textarea name=\"message\" rows=\"5\" class=\"form-control\" id=\"message\" placeholder=\"Message\"></textarea> <div class=\"col-md-6 col-sm-10\"> <input name=\"submit\" type=\"submit\" class=\"form-control\" id=\"submit\" value=\"SEND\"></div>"

}