
var userLang = navigator.language || navigator.userLanguage; 
//alert ("The language is: " + userLang);



switch(userLang){
    case "cs-CZ":      
        setGerman();
        break;
    case "de-AT","de-DE", "de-CH":
        setGerman();
        break;
    default:
        setEnglish();
        break;            
}


function setGerman(){
    document.getElementById('service').innerHTML = "Entwurf und Umsetzung kompletter Lösungen";
    document.getElementById('mcpPraktikum').innerHTML = "Praktikum";
    document.getElementById('zabranskyTimeline').innerHTML = "01/2019 - Gegenwart";
    document.getElementById('last').innerHTML = "Zuletzt realisiert:";
    document.getElementById('winzab').innerHTML = " - Informationssystem der Firma Zabransky GmbH";
    document.getElementById('kontakt').innerHTML = "Für mehr Auskunft erreichen Sie mich unter meiner E-mailadresse <a href='mailto:rucil.jan@gmail.com'>rucil.jan@gmail.com</a>";
    document.getElementById('zabapp').innerHTML = " - Handy-App der Firma Zabransky GmbH";
}


function setCzech(){

    document.getElementById('service').innerHTML = "Vývojář mobilních, desktopových a webových aplikací";
    document.getElementById('mcpPraktikum').innerHTML = "Stáž";
    document.getElementById('zabranskyTimeline').innerHTML = "01/2019 - současnost";
}



function setEnglish(){

    document.getElementById('service').innerHTML = "Developer of mobile, desktop and web applications";
}