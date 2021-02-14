
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
document.getElementById('about_me').innerHTML = "Über mich";
document.getElementById('my_references').innerHTML = "Projekte";
document.getElementById('my_services').innerHTML = "Spezialisierung";
document.getElementById('specialization_h').innerHTML = "Spezialisierung:";

document.getElementById('my_contact').innerHTML = "Kontakt";
document.getElementById('my_policy').innerHTML = "<a href=\"datenschutz.html\" target=\"_blank\"  class=\"smoothScroll\">Datenschutz</a>";

    document.getElementById('caption').innerHTML = "Ersteller maßgeschnittenen Digitalprodukten";
    document.getElementById('mcpPraktikum').innerHTML = "Praktikum";
    document.getElementById('zabranskyTimeline').innerHTML = "01/2019 - Gegenwart";
    document.getElementById('last').innerHTML = "Letzte Projekte:";
 
    document.getElementById('3dschauraum').innerHTML =  "<a href=\"./schauraum/index.html\" target=\"_blank\" rel=\"noopener noreferrer\" >3D Schauraum </a><span id=\"winzab\"> - Produktvisualisierung </span>"
    + "<img alt=\"alternative text\" title=\"erstellt in Unreal Engine 4\" style=\"margin-top: -2px;\" src=\"./images/ue4.png\">";

    document.getElementById('zabapp').innerHTML = "<a href=\"https://play.google.com/store/apps/details?id=com.zabranskygmbh.app\" target=\"_blank\" rel=\"noopener noreferrer\">Zabransky GmbH</a><span > - interne Firmenapp fürs Handy(Xamarin)</span>"  
    + "<img alt=\"alternative text\" title=\"inklusive Backend (ASP.NET Core 3.1 + SQL Server)\" style=\"margin-top: -5px;\" src=\"./images/backend.png\">"               
    + "<img alt=\"alternative text\" title=\"verfügbar auf Google Play\" style=\"margin-top: -5px;\" src=\"./images/playstore.png\">";    
    
    document.getElementById('winzab2').innerHTML = "<a href=\"#\">Winzab2 </a><span > - Internes EDV-System</span>"
    + "<img alt=\"alternative text\" title=\"inklusive Backend (SQL Server)\" style=\"margin-top: -2px;\" src=\"./images/backend.png\">";
    
    document.getElementById('kontakt').innerHTML = "Für mehr Auskunft kontaktieren Sie mich per <a style='text-decoration: underline;' href='mailto:office@janrucil.dev'>Email</a>.";

    document.getElementById('web_desc').innerHTML = "Webseiten, apps und API Lösungen";
    document.getElementById('mobile_header').innerHTML = "Handy";
    document.getElementById('mobile_desc').innerHTML = "Apps für Android und iOS";

    document.getElementById('desktop_desc').innerHTML = "Software mit oder ohne Benutzeroberfläche";

    document.getElementById('games_header').innerHTML = "Spiele";
    document.getElementById('games_desc').innerHTML = "Indie-games und 3D Simulationen";
    document.getElementById('about_h').innerHTML = "Die richtige Adresse für individuelle Softwarelösungen";
    document.getElementById('specialist').innerHTML = "Erfahrener Spezialist";
    document.getElementById('specialist_p').innerHTML = "Ich habe mehrjährige Erfahrung und kenne mich in verschiedenen Bereichen aus: Netzwerke, Datenbanken, Sicherheit, 3D rendering, Design und Architektur. Für kleinere Projekte kann ich die Arbeit des ganzen Fullstackteams decken. Ich bin sehr produktiv und liefere top-qualität Code in kurzer Zeit.";
    document.getElementById('contact_person').innerHTML = "Perfekte Ansprechperson";
    document.getElementById('contact_p').innerHTML = "Zeit ist Geld. Verschwenden Sie es nicht mit Agenturen. Ich werde Sie als ein erfahrener B2B Ansprechpartner persönlich vom Entwurf bis zum Release Ihres Digitalproduktes begleiten. Die Kommunikation ist der Schlüssel zum Erfolg.";


    document.getElementById('recent_projects').innerHTML = "Letzte projekte";
    document.getElementById('recent_projects_p').innerHTML = "Lieber lasse ich meine Arbeit für mich sprechen:";




}


function setCzech(){

        //flags has to be re-set to german and english:
document.getElementById('dropdown-menu').innerHTML = "<li><a onclick=\"setGerman()\"><img src=\"images/de.png\"> Deutsch</a></li><li><a onclick=\"setEnglish()\"><img src=\"images/en.png\"> English</a></li>";
document.getElementById('flag').innerHTML = "<img src=\"images/cz.png\"> <i class=\"fa fa-caret-down\"></i>";

//navbar items
document.getElementById('about_me').innerHTML = "O mě";
document.getElementById('my_references').innerHTML = "Projekty";
document.getElementById('my_services').innerHTML = "Specializace";
document.getElementById('specialization_h').innerHTML = "Specializace:";

document.getElementById('my_contact').innerHTML = "Kontakt";
document.getElementById('my_policy').innerHTML = "<a href=\"ochranadat.html\" target=\"_blank\"  class=\"smoothScroll\">Ochrana osobních údajů</a>";

    document.getElementById('caption').innerHTML = "Tvůrce digitálních produktů na míru";
    document.getElementById('mcpPraktikum').innerHTML = "Stáž";
    document.getElementById('zabranskyTimeline').innerHTML = "01/2019 - současnost";

    document.getElementById('last').innerHTML = "Nedávné projekty:";

    document.getElementById('3dschauraum').innerHTML =  "<a href=\"./3dshowroom/index.html\" target=\"_blank\" rel=\"noopener noreferrer\" >3D Showroom </a><span id=\"winzab\"> - vizualizace produktu </span>"
    + "<img alt=\"alternative text\" title=\"vytvořeno v Unreal Engine 4\" style=\"margin-top: -2px;\" src=\"./images/ue4.png\">";

    document.getElementById('zabapp').innerHTML = "<a href='https://play.google.com/store/apps/details?id=com.zabranskygmbh.app' target='_blank' rel='noopener noreferrer'>Zabransky GmbH</a><span > - interní aplikace (Xamarin)</span>"  
    + "<img alt='alternative text' title='včetně backendu (ASP.NET Core 3.1 + SQL Server)' style='margin-top: -5px;' src='./images/backend.png'>"               
    + "<img alt='alternative text' title='K dispozici na Google Play' style='margin-top: -5px;' src='./images/playstore.png'>";    
    
    document.getElementById('winzab2').innerHTML = "<a href='#'>Winzab2 </a><span > - firemní informační systém</span>"
    + "<img alt='alternative text' title='včetně backendu (SQL Server)' style='margin-top: -2px;' src='./images/backend.png'>";
    
    document.getElementById('kontakt').innerHTML = "Pro více informací mě kontaktujte přes <a style='text-decoration: underline;' href='mailto:office@janrucil.dev'>email</a>.";
    document.getElementById('web_desc').innerHTML = "Webovky, aplikace a API řešení";

    document.getElementById('mobile_header').innerHTML = "Mobil";
    document.getElementById('mobile_desc').innerHTML = "Appky pro Android a iOS";

    document.getElementById('desktop_desc').innerHTML = "Software s uživatelským rozhraním nebo bez";

    document.getElementById('games_header').innerHTML = "Hry";
    document.getElementById('games_desc').innerHTML = "Indie-games a 3D simulace";

    document.getElementById('about_h').innerHTML = "Správná adresa pro individuální softwarová řešení";

    document.getElementById('specialist').innerHTML = "Zkušený specialista";
    document.getElementById('specialist_p').innerHTML = "Mám několikaleté zkušenosti a vyznám se v různých oblastech: sítě, databáze, zabezpečení, 3D rendering, design a architektura. U menších projektů zvládnu sám pokrýt práci kompletního fullstack týmu. Jsem velmi produktivní a doručuji kód v top kvalitě za krátký čas.";
    document.getElementById('contact_person').innerHTML = "Perfektní kontaktní osoba";
    document.getElementById('contact_p').innerHTML = "Čas jsou peníze. Neztrácejte ho s agenturami. Osobně Vás jako zkušená B2B kontaktní osoba povedu od návhru až k vydání Vašeho digitálního produktu. Komunikace je klíčem k úspěchu.";


    document.getElementById('recent_projects').innerHTML = "Nedávné projekty";
    document.getElementById('recent_projects_p').innerHTML = "Raději za sebe nechám mluvit svou práci:";


}



function setEnglish(){


    //flags has to be re-set to english and czech:
    document.getElementById('dropdown-menu').innerHTML = "<li><a onclick=\"setGerman()\"><img src=\"images/de.png\"> Deutsch</a></li><li><a onclick=\"setCzech()\"><img src=\"images/cz.png\"> Česky</a></li>";
    document.getElementById('flag').innerHTML = "<img src=\"images/en.png\"> <i class=\"fa fa-caret-down\"></i>";

    //navbar items
document.getElementById('about_me').innerHTML = "About";
document.getElementById('my_references').innerHTML = "Projects";
document.getElementById('my_services').innerHTML = "Specialization";
document.getElementById('specialization_h').innerHTML = "Specialization:";

document.getElementById('my_contact').innerHTML = "Contact";
document.getElementById('my_policy').innerHTML = "<a href=\"privacy.html\" target=\"_blank\"  class=\"smoothScroll\">Privacy policy</a>";

    document.getElementById('caption').innerHTML = "Creator of custom digital products";
    document.getElementById('mcpPraktikum').innerHTML = "Trainee";
    document.getElementById('zabranskyTimeline').innerHTML = "01/2019 - present";

    document.getElementById('last').innerHTML = "Recent projects:";

    document.getElementById('3dschauraum').innerHTML =  "<a href=\"./3dshowroom/index.html\" target=\"_blank\" rel=\"noopener noreferrer\" >3D Showroom </a><span id=\"winzab\"> - product visualization </span>"
    + "<img alt=\"alternative text\" title=\"vytvořeno v Unreal Engine 4\" style=\"margin-top: -2px;\" src=\"./images/ue4.png\">";

    document.getElementById('zabapp').innerHTML = "<a href='https://play.google.com/store/apps/details?id=com.zabranskygmbh.app' target='_blank' rel='noopener noreferrer'>Zabransky GmbH</a><span > - company intern mobile app (Xamarin)</span>"  
    + "<img alt='alternative text' title='including backend (ASP.NET Core 3.1 + SQL Server)' style='margin-top: -5px;' src='./images/backend.png'>"               
    + "<img alt='alternative text' title='available at Google Play' style='margin-top: -5px;' src='./images/playstore.png'>";    
    
    document.getElementById('winzab2').innerHTML = "<a href='#'>Winzab2 </a><span > - Company information system</span>"
    + "<img alt='alternative text' title='including backend (SQL Server)' style='margin-top: -2px;' src='./images/backend.png'>";
    
    document.getElementById('kontakt').innerHTML = "For more info contact me per <a style='text-decoration: underline;' href='mailto:office@janrucil.dev'>email</a>.";

    document.getElementById('web_desc').innerHTML = "Websites, apps and API solutions";

    document.getElementById('mobile_header').innerHTML = "Mobile";
    document.getElementById('mobile_desc').innerHTML = "Apps für Android und iOS";

    
    document.getElementById('desktop_desc').innerHTML = "Software with or without user interface";

    
    document.getElementById('games_header').innerHTML = "Games";
    document.getElementById('games_desc').innerHTML = "Indie-games and 3D simulations";
    document.getElementById('about_h').innerHTML = "The right address for individual software solutions";
    document.getElementById('specialist').innerHTML = "Experienced specialist";
    document.getElementById('specialist_p').innerHTML = "I have years of experience and knowledge in differen fields: networking, databases, security, 3D rendering, design and architecture). For smaller projects I can alone cover the work of a complete fullstack team. I´m very productive and delivering top quality code in short time.";
    document.getElementById('contact_person').innerHTML = "The perfect contact person";
    document.getElementById('contact_p').innerHTML = "Time is money. Don´t waste it with agencies. I am an experienced B2B contact partner and I will personally guide you from the design to the release of your digital product. Communication is the key to success.";

    document.getElementById('recent_projects').innerHTML = "Recent projects";
    document.getElementById('recent_projects_p').innerHTML = "I will better let my work speak for me:";

}