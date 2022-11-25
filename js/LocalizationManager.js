
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

document.getElementById('caption').innerHTML = "Programmierer und 3D-Grafiker";

document.getElementById('my_policy').innerHTML = "<a href=\"datenschutz.html\" target=\"_blank\"  class=\"smoothScroll\">Datenschutz</a>";

    document.getElementById('2real').innerHTML = "Freelancer";


 
    document.getElementById('textureresizer').innerHTML =  "<a href=\"./textureresizer/index.html\" target=\"_blank\" rel=\"noopener noreferrer\" >Texture Resizer</a> - Bilderverarbeitungstool";


    document.getElementById('smarthome').innerHTML =  "<a href=\"./visualisierung/index.html\" target=\"_blank\" rel=\"noopener noreferrer\" >Smart Home</a> - interaktive 3D Visualisierung";


    document.getElementById('theballgame').innerHTML =  "<a href=\"./schauraum/index.html\" target=\"_blank\" rel=\"noopener noreferrer\" >The Ball Game </a> - Gelegenheitsspiel (Arcade)";


    document.getElementById('kontakt').innerHTML = "Für mehr Auskunft kontaktieren Sie mich per <a style='text-decoration: underline;' href='mailto:office@janrucil.dev'>Email</a>.";


    document.getElementById('specialist_p').innerHTML = "Ich kann auf 5 Jahre professioneller Erfahrung mit C# / .NET zurückgreifen.<br><br>Ich habe komplexe Infrastrukturen, bestehend aus Server-APIs (ASP) und Klientanwendungen (WPF, Xamarin), zusammengebaut. Begriffe wie OOP, Design Patterns, Clean Code Principles sind mir gut bekannt, sowie auch aktuelle Trends im Bereich und die neuesten Technologien. Ich schreibe Code, der einfach zum Lesen, Warten, Testen und Erweitern ist. ";
    



    document.getElementById('games_header').innerHTML = "Was ich mache";
    document.getElementById('gamedevInfo').innerHTML = "0 published titles, work in progress";
    document.getElementById('3dvisInfo').innerHTML = "3D-Asset-Erstellung, Rendering, interaktive Simulationen und VR";

    document.getElementById('cnetInfo').innerHTML = "Server - client applications & utilities";

    document.getElementById('specialist').innerHTML = "Über mich";
    document.getElementById('specialist_p').innerHTML = "Ich kann auf 5 Jahre professioneller Erfahrung mit C# / .NET zurückgreifen.<br><br>Ich habe komplexe Infrastrukturen, bestehend aus Server-APIs (ASP) und Klientanwendungen (WPF, Xamarin), zusammengebaut. Begriffe wie OOP, Design Patterns, Clean Code Principles sind mir gut bekannt, sowie auch aktuelle Trends im Bereich und die neuesten Technologien. Ich schreibe Code, der einfach zum Lesen, Warten, Testen und Erweitern ist. ";

    document.getElementById('gamedev').innerHTML = "For the last 2 years I have also been increasedly interested in game development and 3D graphics. I use Blender as modelling software and chose the Unreal Engine over Unity as a game engine, as I wanted to challenge myself with something different than Unity´s C#. I also fell in love with the visual quality that UE offers straight out of the box ";
    
  
    
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
document.getElementById('caption').innerHTML = "Programátor a 3D grafik";
document.getElementById('my_policy').innerHTML = "<a href=\"ochranadat.html\" target=\"_blank\"  class=\"smoothScroll\">Ochrana osobních údajů</a>";
    document.getElementById('2real').innerHTML = "Freelancer";


    document.getElementById('textureresizer').innerHTML =  "<a href=\"./textureresizer/\" target=\"_blank\" rel=\"noopener noreferrer\" >Texture Resizer</a> - nástroj na zpracování obrazu";

    document.getElementById('smarthome').innerHTML =  "<a href=\"./vizualizace/index.html\" target=\"_blank\" rel=\"noopener noreferrer\" >Smart Home </a><span id=\"winzab\"></a> - Interaktivní 3D vizualizace</span>";
    
    document.getElementById('theballgame').innerHTML =  "<a href=\"./3dshowroom/\" target=\"_blank\" rel=\"noopener noreferrer\" >The Ball Game </a> - příležitostná arkádová hra";
   
    document.getElementById('kontakt').innerHTML = "Pro více informací mě kontaktujte přes <a style='text-decoration: underline;' href='mailto:office@janrucil.dev'>email</a>.";
    document.getElementById('games_header').innerHTML = "Co dělám";
    document.getElementById('gamedevInfo').innerHTML = "0 vydaných titulů, pracuji na tom";
    document.getElementById('3dvisInfo').innerHTML = "Tvorba 3D assetů, rendering, interaktivní simulace a VR.";

    document.getElementById('cnetInfo').innerHTML = "Server - client aplikace & nástroje";


    document.getElementById('specialist').innerHTML = "O mě";
    document.getElementById('specialist_p').innerHTML = "Mám 5 let profesní zkušenosti s C# / .NET.<br><br>Sestavil jsem komplexní infrastruktury sestávající ze serverových api (ASP) and klientských aplikací (WPF, Xamarin). Pojmy jako OOP, Design Patterns, Clean Code Principles jsou mi dobře známy, stejně jako aktuální trendy v oboru a nejnovější technologie. Píšu kód který se snadno čte, udržuje, testuje a modifikuje. ";
    

    document.getElementById('gamedev').innerHTML = "Poslední 2 roky jsem se taky více začínal zajímat o tvorbu videoher a 3D grafiku. Jako modelovací software používám Blender, a jako herní engine jsem zvolil UnreaI namísto Unity. Taky jsem se zamiloval do vizuální kvality, kterou UE umožňuje dosáhnout.";
    
    


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
document.getElementById('caption').innerHTML = "Programmer and 3D artist";
    document.getElementById('2real').innerHTML = "Freelancer";
    document.getElementById('zabranskyTimeline').innerHTML = "01/2019 - present";


    document.getElementById('textureresizer').innerHTML =  "<a href=\"./textureresizer/\" target=\"_blank\" rel=\"noopener noreferrer\" >Texture Resizer</a> - image processing tool";

    document.getElementById('smarthome').innerHTML =  "<a href=\"./visualization/\" target=\"_blank\" rel=\"noopener noreferrer\" >Smart Home </a> - interactive 3D visualization";


    document.getElementById('theballgame').innerHTML =  "<a href=\"./3dshowroom/\" target=\"_blank\" rel=\"noopener noreferrer\" >The Ball Game </a> - casual arcade game";
    
    document.getElementById('kontakt').innerHTML = "For more info contact me per <a style='text-decoration: underline;' href='mailto:office@janrucil.dev'>email</a>.";  

    document.getElementById('games_header').innerHTML = "What I do";
    document.getElementById('gamedevInfo').innerHTML = "0 published titles, work in progress";
    document.getElementById('3dvisInfo').innerHTML =  "Creation of 3D assets, rendering, interactive simulations and VR";

    document.getElementById('cnetInfo').innerHTML = "Server - client applications & utilities";

    document.getElementById('specialist').innerHTML = "About me";
    document.getElementById('specialist_p').innerHTML = "I have 5 years of professional experience with C# / .NET.<br><br>I built several complex infrastructures consisting of server-side apis (ASP) and client apps (WPF, Xamarin). Terms like OOP, Design Patterns, Clean Code Principles are well known to me, as well as the current trends in the field and latest technology. I write code that is easy to read, maintain, test and modify.";
    document.getElementById('gamedev').innerHTML = "For the last 2 years I have also been increasedly interested in game development and 3D graphics. I use Blender as modelling software and chose the Unreal Engine over Unity as a game engine, as I wanted to challenge myself with something different than Unity´s C#. I also fell in love with the visual quality that UE offers straight out of the box.";
    
    document.getElementById('inboxme').innerHTML = "Inbox me:";
    document.getElementById('wien').innerHTML = "Vienna, Austria";
    document.getElementById('contactform').innerHTML = "<form onsubmit=\"event.preventDefault(); return sendEmail()\"  > <input name=\"from\" type=\"text\" class=\"form-control\" id=\"from\" placeholder=\"Sender: (optional)\"><textarea name=\"message\" rows=\"5\" class=\"form-control\" id=\"message\" placeholder=\"Message\"></textarea> <div class=\"col-md-6 col-sm-10\"> <input type=\"submit\" class=\"form-control\" id=\"submit\" value=\"SEND\"></div></form>"

}