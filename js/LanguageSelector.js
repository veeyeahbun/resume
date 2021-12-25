
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
 
    document.getElementById('smarthome').innerHTML =  "<a href=\"./visualisierung/index.html\" target=\"_blank\" rel=\"noopener noreferrer\" >Smart Home</a> - interaktive 3D Visualisierung"
    + "<img alt=\"alternative text\" title=\"vytvořeno v Unreal Engine 4\" style=\"margin-top: -2px;\" src=\"./images/ue4.png\">";


    document.getElementById('theballgame').innerHTML =  "<a href=\"./schauraum/index.html\" target=\"_blank\" rel=\"noopener noreferrer\" >The Ball Game </a> - Gelegenheitsspiel (Arcade)"
    + "<img alt=\"alternative text\" title=\"erstellt in Unreal Engine 4\" style=\"margin-top: -2px;\" src=\"./images/ue4.png\">";


    document.getElementById('kontakt').innerHTML = "Für mehr Auskunft kontaktieren Sie mich per <a style='text-decoration: underline;' href='mailto:office@janrucil.dev'>Email</a>.";

    document.getElementById('games_header').innerHTML = "Meine Spiele";
    document.getElementById('games_desc').innerHTML = "Indie-Spiele aus eigener Produktion";

    document.getElementById('cust_header').innerHTML = "Freelance";
    document.getElementById('cust_desc').innerHTML = "Vertragsarbeit für Partnern";
    document.getElementById('specialist').innerHTML = "Erfahrener Coder";
    document.getElementById('specialist_p').innerHTML = "Ich habe Bunte Erfahrungen mit Entwicklung von Geschäftsanwendungen in C#. In Visual Studio fühle ich mich daheim.";

    
    document.getElementById('projects_h').innerHTML = "Meine Projekte:";


  
    document.getElementById('contact_h').innerHTML = "Aufstrebender 3D Künstler";
    document.getElementById('contact_p').innerHTML = "Ich interessiere mich auch für Modelling, Texturen und Animationen.";
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

document.getElementById('caption').innerHTML = "Programátor a 3D grafik";
document.getElementById('my_policy').innerHTML = "<a href=\"ochranadat.html\" target=\"_blank\"  class=\"smoothScroll\">Ochrana osobních údajů</a>";


    document.getElementById('2real').innerHTML = "Freelancer";
    document.getElementById('zabranskyTimeline').innerHTML = "01/2019 - současnost";

    document.getElementById('last').innerHTML = "Nedávné projekty:";

    document.getElementById('smarthome').innerHTML =  "<a href=\"./vizualizace/index.html\" target=\"_blank\" rel=\"noopener noreferrer\" >Smart Home </a><span id=\"winzab\"></a> - Interaktivní 3D vizualizace</span>"
    + "<img alt=\"alternative text\" title=\"vytvořeno v Unreal Engine 4\" style=\"margin-top: -2px;\" src=\"./images/ue4.png\">";


    document.getElementById('theballgame').innerHTML =  "<a href=\"./3dshowroom/index.html\" target=\"_blank\" rel=\"noopener noreferrer\" >The Ball Game </a> - příležitostná arkádová hra"
    + "<img alt=\"alternative text\" title=\"vytvořeno v Unreal Engine 4\" style=\"margin-top: -2px;\" src=\"./images/ue4.png\">";

    
    document.getElementById('kontakt').innerHTML = "Pro více informací mě kontaktujte přes <a style='text-decoration: underline;' href='mailto:office@janrucil.dev'>email</a>.";
   

    document.getElementById('games_header').innerHTML = "Moje hry";
    document.getElementById('games_desc').innerHTML = "Indie tituly z vlastní produkce";

    document.getElementById('cust_header').innerHTML = "Freelance";
    document.getElementById('cust_desc').innerHTML = "Práce na zakázku";

    
    document.getElementById('projects_h').innerHTML = "Moje projekty:";


    document.getElementById('specialist').innerHTML = "Zkušený kodér";
    document.getElementById('specialist_p').innerHTML = "Mám bohaté zkušenosti s vývojem obchodního software v C#. Ve Visual Studiu jsem jako doma.";


   
    document.getElementById('contact_h').innerHTML = "Nadějný 3D grafik";
    document.getElementById('contact_p').innerHTML = "Zajímá mě i modelování, textury a animace";
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

document.getElementById('caption').innerHTML = "Programmer and 3D artist";
    document.getElementById('2real').innerHTML = "Freelancer";
    document.getElementById('zabranskyTimeline').innerHTML = "01/2019 - present";

    document.getElementById('last').innerHTML = "Recent projects:";

    document.getElementById('smarthome').innerHTML =  "<a href=\"./visualization/index.html\" target=\"_blank\" rel=\"noopener noreferrer\" >Smart Home </a> - interactive 3D visualization"
    + "<img alt=\"alternative text\" title=\"vytvořeno v Unreal Engine 4\" style=\"margin-top: -2px;\" src=\"./images/ue4.png\">";


    document.getElementById('theballgame').innerHTML =  "<a href=\"./3dshowroom/index.html\" target=\"_blank\" rel=\"noopener noreferrer\" >The Ball Game </a> - casual arcade game"
    + "<img alt=\"alternative text\" title=\"vytvořeno v Unreal Engine 4\" style=\"margin-top: -2px;\" src=\"./images/ue4.png\">";

    
    document.getElementById('kontakt').innerHTML = "For more info contact me per <a style='text-decoration: underline;' href='mailto:office@janrucil.dev'>email</a>.";
   
    document.getElementById('games_header').innerHTML = "My games";
    document.getElementById('games_desc').innerHTML = "Indie titles of own production";

       
    document.getElementById('cust_header').innerHTML = "Freelance";
    document.getElementById('cust_desc').innerHTML = "Contract work";
    
    document.getElementById('projects_h').innerHTML = "My projects:";

    document.getElementById('specialist').innerHTML = "Skilled coder";
    document.getElementById('specialist_p').innerHTML = "I have rich experience with development of business applications in C# (WPF, Xamarin, ASP.NET). I´m very familiar with Visual Studio.";



  
    document.getElementById('contact_h').innerHTML = "Aspiring 3D artist";
    document.getElementById('contact_p').innerHTML = "I am also interested in modeling, textures and animations.";
    document.getElementById('contact_p2').innerHTML = "<span style=\"text-decoration: underline;\">Please note</span> that my current availability is less than 10h / week.";


    
    document.getElementById('inboxme').innerHTML = "Inbox me:";
    document.getElementById('wien').innerHTML = "Vienna, Austria";
    document.getElementById('contactform').innerHTML = "<form onsubmit=\"event.preventDefault(); return sendEmail()\"  > <input name=\"from\" type=\"text\" class=\"form-control\" id=\"from\" placeholder=\"Sender: (optional)\"><textarea name=\"message\" rows=\"5\" class=\"form-control\" id=\"message\" placeholder=\"Message\"></textarea> <div class=\"col-md-6 col-sm-10\"> <input type=\"submit\" class=\"form-control\" id=\"submit\" value=\"SEND\"></div></form>"

}