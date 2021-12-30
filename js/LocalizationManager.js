
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

document.getElementById('caption').innerHTML = "Programmierer und 3D Grafiker";

document.getElementById('my_policy').innerHTML = "<a href=\"datenschutz.html\" target=\"_blank\"  class=\"smoothScroll\">Datenschutz</a>";

    document.getElementById('2real').innerHTML = "Freelancer";
    document.getElementById('zabranskyTimeline').innerHTML = "01/2019 - Gegenwart";
    document.getElementById('last').innerHTML = "Kürzliche Projekte:";
 
    document.getElementById('textureresizer').innerHTML =  "<a href=\"./de/textureresizer/index.html\" target=\"_blank\" rel=\"noopener noreferrer\" >Texture Resizer</a> - Bilderverarbeitungstool";


    document.getElementById('smarthome').innerHTML =  "<a href=\"./visualisierung/index.html\" target=\"_blank\" rel=\"noopener noreferrer\" >Smart Home</a> - interaktive 3D Visualisierung"
    + "<img alt=\"alternative text\" title=\"vytvořeno v Unreal Engine 4\" style=\"margin-top: -2px;\" src=\"./images/ue4.png\">";


    document.getElementById('theballgame').innerHTML =  "<a href=\"./schauraum/index.html\" target=\"_blank\" rel=\"noopener noreferrer\" >The Ball Game </a> - Gelegenheitsspiel (Arcade)"
    + "<img alt=\"alternative text\" title=\"erstellt in Unreal Engine 4\" style=\"margin-top: -2px;\" src=\"./images/ue4.png\">";


    document.getElementById('kontakt').innerHTML = "Für mehr Auskunft kontaktieren Sie mich per <a style='text-decoration: underline;' href='mailto:office@janrucil.dev'>Email</a>.";


    document.getElementById('games_desc').innerHTML = "Unabhängiges Studio mit eigener Produktion";

    document.getElementById('cust_desc').innerHTML = "Auftragsentwicklung, Freelance und Outsourcing";
    document.getElementById('specialist').innerHTML = "Erfahrener Coder";
    document.getElementById('specialist_p').innerHTML = "Ich habe langjährige Erfahrungen mit Entwicklung von Bussinesssoftware in C# <br>Mit C++ bin ich auch vertraut und In Visual Studio fühle ich mich daheim.";

    
    document.getElementById('projects_h').innerHTML = "Meine Projekte:";


  
    document.getElementById('graphic').innerHTML = "Aufstrebender 3D Künstler";
    document.getElementById('graphic_p').innerHTML = "Ich interessiere mich auch für Modelling, Texturen und Animationen - obwohl diese gerade nicht zu meinen stärksten Skills gehören";
    document.getElementById('contact_p2').innerHTML = "<span style=\"font-weight: bold;\">Aktuelle zeitliche Verfügbarkeit: </span>10 - 20 Std. / Wo";


    
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

document.getElementById('caption').innerHTML = "Programátor a 3D grafik";
document.getElementById('my_policy').innerHTML = "<a href=\"ochranadat.html\" target=\"_blank\"  class=\"smoothScroll\">Ochrana osobních údajů</a>";


    document.getElementById('2real').innerHTML = "Freelancer";
    document.getElementById('zabranskyTimeline').innerHTML = "01/2019 - současnost";

    document.getElementById('last').innerHTML = "Nedávné projekty:";
    document.getElementById('textureresizer').innerHTML =  "<a href=\"./cz/textureresizer/index.html\" target=\"_blank\" rel=\"noopener noreferrer\" >Texture Resizer</a> - nástroj na zpracování obrazu";

    document.getElementById('smarthome').innerHTML =  "<a href=\"./vizualizace/index.html\" target=\"_blank\" rel=\"noopener noreferrer\" >Smart Home </a><span id=\"winzab\"></a> - Interaktivní 3D vizualizace</span>"
    + "<img alt=\"alternative text\" title=\"vytvořeno v Unreal Engine 4\" style=\"margin-top: -2px;\" src=\"./images/ue4.png\">";


    document.getElementById('theballgame').innerHTML =  "<a href=\"./3dshowroom/index.html\" target=\"_blank\" rel=\"noopener noreferrer\" >The Ball Game </a> - příležitostná arkádová hra"
    + "<img alt=\"alternative text\" title=\"vytvořeno v Unreal Engine 4\" style=\"margin-top: -2px;\" src=\"./images/ue4.png\">";

    
    document.getElementById('kontakt').innerHTML = "Pro více informací mě kontaktujte přes <a style='text-decoration: underline;' href='mailto:office@janrucil.dev'>email</a>.";
   

    document.getElementById('games_header').innerHTML = "Indie games";
    document.getElementById('games_desc').innerHTML = "Nezávislé studio s vlastní produkcí";

    document.getElementById('cust_desc').innerHTML = "Software na zakázku, freelance a outsourcing";

    
    document.getElementById('projects_h').innerHTML = "Moje hry:";


    document.getElementById('specialist').innerHTML = "Zkušený kodér";
    document.getElementById('specialist_p').innerHTML = "Mám letité zkušenosti s vývojem obchodního software v C#.<br> Kamarád jsem taky s  C++ a ve Visual Studiu jsem jako doma.";



    document.getElementById('graphic').innerHTML = "Nadějný 3D grafik";
    document.getElementById('graphic_p').innerHTML = "Zajímám se taky o modelování, textury a animace - i když to momentálně nepatří k mým silným stránkám";
    document.getElementById('contact_p2').innerHTML = "<span style=\"font-weight: bold;\">Aktuální časová dostupnost: </span>10 - 20 h týdně. ";

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

document.getElementById('caption').innerHTML = "Programmer and 3D artist";
    document.getElementById('2real').innerHTML = "Freelancer";
    document.getElementById('zabranskyTimeline').innerHTML = "01/2019 - present";

    document.getElementById('last').innerHTML = "Recent projects:";

    document.getElementById('textureresizer').innerHTML =  "<a href=\"./textureresizer/index.html\" target=\"_blank\" rel=\"noopener noreferrer\" >Texture Resizer</a> - image processing tool";

    document.getElementById('smarthome').innerHTML =  "<a href=\"./visualization/index.html\" target=\"_blank\" rel=\"noopener noreferrer\" >Smart Home </a> - interactive 3D visualization"
    + "<img alt=\"alternative text\" title=\"vytvořeno v Unreal Engine 4\" style=\"margin-top: -2px;\" src=\"./images/ue4.png\">";


    document.getElementById('theballgame').innerHTML =  "<a href=\"./3dshowroom/index.html\" target=\"_blank\" rel=\"noopener noreferrer\" >The Ball Game </a> - casual arcade game"
    + "<img alt=\"alternative text\" title=\"vytvořeno v Unreal Engine 4\" style=\"margin-top: -2px;\" src=\"./images/ue4.png\">";

    
    document.getElementById('kontakt').innerHTML = "For more info contact me per <a style='text-decoration: underline;' href='mailto:office@janrucil.dev'>email</a>.";
   

    document.getElementById('games_desc').innerHTML = "Indenpendent studio with own production";

       
    document.getElementById('cust_desc').innerHTML = "Custom development, freelance and outsourcing";
    
    document.getElementById('projects_h').innerHTML = "My projects:";

    document.getElementById('specialist').innerHTML = "Skilled coder";
    document.getElementById('specialist_p').innerHTML = "I have years of experience with development of business applications in C# <br> I´m also familiar with C++ and I´m very comfortable in Visual Studio.";



  
    document.getElementById('graphic').innerHTML = "Aspiring 3D artist";
    document.getElementById('graphic_p').innerHTML = "I am also interested in modeling, textures and animations - although these aren´t currently my strong skills";
    document.getElementById('contact_p2').innerHTML = "<span style=\"font-weight: bold;\">Current availability: </span>10 - 20 h / week. ";

    
    document.getElementById('inboxme').innerHTML = "Inbox me:";
    document.getElementById('wien').innerHTML = "Vienna, Austria";
    document.getElementById('contactform').innerHTML = "<form onsubmit=\"event.preventDefault(); return sendEmail()\"  > <input name=\"from\" type=\"text\" class=\"form-control\" id=\"from\" placeholder=\"Sender: (optional)\"><textarea name=\"message\" rows=\"5\" class=\"form-control\" id=\"message\" placeholder=\"Message\"></textarea> <div class=\"col-md-6 col-sm-10\"> <input type=\"submit\" class=\"form-control\" id=\"submit\" value=\"SEND\"></div></form>"

}