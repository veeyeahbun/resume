
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
document.getElementById('my_references').innerHTML = "Spezialisierung";
document.getElementById('my_services').innerHTML = "Über mich";
document.getElementById('my_contact').innerHTML = "Kontakt";
document.getElementById('contact_head').innerHTML = "Kontakt";

document.getElementById('caption').innerHTML = "Software und 3D Grafik";

document.getElementById('my_policy').innerHTML = "<a href=\"datenschutz.html\" target=\"_blank\"  class=\"smoothScroll\">Datenschutz</a>";

    document.getElementById('2real').innerHTML = "Freelancer";


 
    document.getElementById('textureresizer').innerHTML =  "<a href=\"./textureresizer/index.html\" target=\"_blank\" rel=\"noopener noreferrer\" >Texture Resizer</a> - Bilderverarbeitungstool";


    document.getElementById('smarthome').innerHTML =  "<a href=\"./visualisierung/index.html\" target=\"_blank\" rel=\"noopener noreferrer\" >Smart Home</a> - interaktive 3D Visualisierung"
    + "<img alt=\"alternative text\" title=\"vytvořeno v Unreal Engine 4\" style=\"margin-top: -2px;\" src=\"./images/ue4.png\">";


    document.getElementById('theballgame').innerHTML =  "<a href=\"./schauraum/index.html\" target=\"_blank\" rel=\"noopener noreferrer\" >The Ball Game </a> - Gelegenheitsspiel (Arcade)"
    + "<img alt=\"alternative text\" title=\"erstellt in Unreal Engine 4\" style=\"margin-top: -2px;\" src=\"./images/ue4.png\">";


    document.getElementById('kontakt').innerHTML = "Für mehr Auskunft kontaktieren Sie mich per <a style='text-decoration: underline;' href='mailto:office@janrucil.dev'>Email</a>.";


    document.getElementById('specialist_p').innerHTML = "Ich habe mehrjährige Erfahrung in Entwicklung von Geschäftssoftware.";


    document.getElementById('games_header').innerHTML = "Was ich mache";
    document.getElementById('gamedevInfo').innerHTML = "0 published titles, work in progress";
    document.getElementById('3dvis').innerHTML = "3D visualisation";
    document.getElementById('3dvisInfo').innerHTML = "Custom 3D assets, renders, simulations and VR";

    document.getElementById('cnetInfo').innerHTML = "Non-gaming server - client applications & utilities";

    document.getElementById('specialist').innerHTML = "Erfahrener Programmierer";
   
  
    document.getElementById('graphic').innerHTML = "3D Grafik";
    document.getElementById('graphic_p').innerHTML = "Ich beschäftige mich auch mit 3D Grafik & Spielentwicklung";



    
    document.getElementById('inboxme').innerHTML = "Schreiben Sie mir:";
    document.getElementById('wien').innerHTML = "Wien, Österreich";
    document.getElementById('contactform').innerHTML = "<form onsubmit=\"event.preventDefault(); return nachrichtSenden()\"  > <input name=\"from\" type=\"text\" class=\"form-control\" id=\"from\" placeholder=\"Absender: (unpflichtig)\"><textarea name=\"message\" rows=\"5\" class=\"form-control\" id=\"message\" placeholder=\"Nachricht\"></textarea> <div class=\"col-md-6 col-sm-10\"> <input  type=\"submit\" class=\"form-control\" id=\"submit\" value=\"SENDEN\"></div></form>"


}


function setCzech(){

        //flags has to be re-set to german and english:
document.getElementById('dropdown-menu').innerHTML = "<li><a onclick=\"setGerman()\"><img src=\"images/de.png\"> Deutsch</a></li><li><a onclick=\"setEnglish()\"><img src=\"images/en.png\"> English</a></li>";
document.getElementById('flag').innerHTML = "<img src=\"images/cz.png\"> <i class=\"fa fa-caret-down\"></i>";

//navbar items
document.getElementById('my_references').innerHTML = "Specializace";
document.getElementById('my_services').innerHTML = "O mě";
document.getElementById('my_contact').innerHTML = "Kontakt";
document.getElementById('contact_head').innerHTML = "Kontakt";
document.getElementById('caption').innerHTML = "Software a 3D grafika";
document.getElementById('my_policy').innerHTML = "<a href=\"ochranadat.html\" target=\"_blank\"  class=\"smoothScroll\">Ochrana osobních údajů</a>";
    document.getElementById('2real').innerHTML = "Freelancer";


    document.getElementById('textureresizer').innerHTML =  "<a href=\"./textureresizer/\" target=\"_blank\" rel=\"noopener noreferrer\" >Texture Resizer</a> - nástroj na zpracování obrazu";

    document.getElementById('smarthome').innerHTML =  "<a href=\"./vizualizace/index.html\" target=\"_blank\" rel=\"noopener noreferrer\" >Smart Home </a><span id=\"winzab\"></a> - Interaktivní 3D vizualizace</span>"
    + "<img alt=\"alternative text\" title=\"vytvořeno v Unreal Engine 4\" style=\"margin-top: -2px;\" src=\"./images/ue4.png\">";
    
    document.getElementById('theballgame').innerHTML =  "<a href=\"./3dshowroom/\" target=\"_blank\" rel=\"noopener noreferrer\" >The Ball Game </a> - příležitostná arkádová hra"
    + "<img alt=\"alternative text\" title=\"vytvořeno v Unreal Engine 4\" style=\"margin-top: -2px;\" src=\"./images/ue4.png\">";    
   
    document.getElementById('kontakt').innerHTML = "Pro více informací mě kontaktujte přes <a style='text-decoration: underline;' href='mailto:office@janrucil.dev'>email</a>.";
    document.getElementById('games_header').innerHTML = "Co dělám";

    document.getElementById('gamedev').innerHTML = "Hry";
    document.getElementById('gamedevInfo').innerHTML = "0 vydaných titulů, pracuji na tom";
    document.getElementById('3dvis').innerHTML = "3D vizualizace";
    document.getElementById('3dvisInfo').innerHTML = "3D assety, rendery, simulace a VR na míru.";

    document.getElementById('cnetInfo').innerHTML = "Neherní server - client aplikace & nástroje";


    document.getElementById('specialist').innerHTML = "Zkušený programátor";
    document.getElementById('specialist_p').innerHTML = "Mám několikaleté zkušenosti s vývojem obchodního software";

    document.getElementById('graphic').innerHTML = "3D grafik";
    document.getElementById('graphic_p').innerHTML = "Zabývám se také 3D grafice & vývoji videoher.";

    document.getElementById('inboxme').innerHTML = "Napište mi:";
    document.getElementById('wien').innerHTML = "Vídeň, Rakousko";
    document.getElementById('contactform').innerHTML = "<form  onsubmit=\"event.preventDefault(); return poslatZpravu()\"  > <input name=\"from\" type=\"text\" class=\"form-control\" id=\"from\" placeholder=\"Odesílatel: (nepovinné)\"><textarea name=\"message\" rows=\"5\" class=\"form-control\" id=\"message\" placeholder=\"Zpráva\"></textarea> <div class=\"col-md-6 col-sm-10\"> <input type=\"submit\" class=\"form-control\" id=\"submit\" value=\"POSLAT\"></div></form>"

}


function setEnglish(){


    //flags has to be re-set to english and czech:
    document.getElementById('dropdown-menu').innerHTML = "<li><a onclick=\"setGerman()\"><img src=\"images/de.png\"> Deutsch</a></li><li><a onclick=\"setCzech()\"><img src=\"images/cz.png\"> Česky</a></li>";
    document.getElementById('flag').innerHTML = "<img src=\"images/en.png\"> <i class=\"fa fa-caret-down\"></i>";

    //navbar items

document.getElementById('my_references').innerHTML = "Specialization";
document.getElementById('my_services').innerHTML = "About me";
document.getElementById('my_contact').innerHTML = "Contact";
document.getElementById('contact_head').innerHTML = "Contact";
document.getElementById('my_policy').innerHTML = "<a href=\"privacy.html\" target=\"_blank\"  class=\"smoothScroll\">Privacy policy</a>";
document.getElementById('caption').innerHTML = "Software and 3D graphics";
    document.getElementById('2real').innerHTML = "Freelancer";
    document.getElementById('zabranskyTimeline').innerHTML = "01/2019 - present";


    document.getElementById('textureresizer').innerHTML =  "<a href=\"./textureresizer/\" target=\"_blank\" rel=\"noopener noreferrer\" >Texture Resizer</a> - image processing tool";

    document.getElementById('smarthome').innerHTML =  "<a href=\"./visualization/\" target=\"_blank\" rel=\"noopener noreferrer\" >Smart Home </a> - interactive 3D visualization"
    + "<img alt=\"alternative text\" title=\"vytvořeno v Unreal Engine 4\" style=\"margin-top: -2px;\" src=\"./images/ue4.png\">";


    document.getElementById('theballgame').innerHTML =  "<a href=\"./3dshowroom/\" target=\"_blank\" rel=\"noopener noreferrer\" >The Ball Game </a> - casual arcade game"
    + "<img alt=\"alternative text\" title=\"vytvořeno v Unreal Engine 4\" style=\"margin-top: -2px;\" src=\"./images/ue4.png\">";
    
    document.getElementById('kontakt').innerHTML = "For more info contact me per <a style='text-decoration: underline;' href='mailto:office@janrucil.dev'>email</a>.";  

    document.getElementById('games_header').innerHTML = "What I do";

    document.getElementById('gamedev').innerHTML = "Games";
    document.getElementById('gamedevInfo').innerHTML = "0 published titles, work in progress";
    document.getElementById('3dvis').innerHTML = "3D visualisation";
    document.getElementById('3dvisInfo').innerHTML = "Custom 3D assets, renders, simulations and VR";

    document.getElementById('cnetInfo').innerHTML = "Non-gaming server - client applications & utilities";

    document.getElementById('specialist').innerHTML = "Skilled programmer";
    document.getElementById('specialist_p').innerHTML = "I have years of experience in development of enterprise software";
 
    document.getElementById('graphic').innerHTML = "3D artist";
    document.getElementById('graphic_p').innerHTML = "I also do some 3D Modelling & game development";

    
    document.getElementById('inboxme').innerHTML = "Inbox me:";
    document.getElementById('wien').innerHTML = "Vienna, Austria";
    document.getElementById('contactform').innerHTML = "<form onsubmit=\"event.preventDefault(); return sendEmail()\"  > <input name=\"from\" type=\"text\" class=\"form-control\" id=\"from\" placeholder=\"Sender: (optional)\"><textarea name=\"message\" rows=\"5\" class=\"form-control\" id=\"message\" placeholder=\"Message\"></textarea> <div class=\"col-md-6 col-sm-10\"> <input type=\"submit\" class=\"form-control\" id=\"submit\" value=\"SEND\"></div></form>"

}