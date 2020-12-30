
var userLang = navigator.language; 
alert ("The language is: " + userLang);


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
    document.getElementById('service').innerHTML = "Ich erstelle komplexe Anwendungen, 3D Simulationen und Spiele";
    document.getElementById('mcpPraktikum').innerHTML = "Praktikum";
    document.getElementById('zabranskyTimeline').innerHTML = "01/2019 - Gegenwart";
    document.getElementById('last').innerHTML = "Kürzlich realisiert:";
 
    document.getElementById('3dschauraum').innerHTML =  "<a href=\"./schauraum/index.html\" target=\"_blank\" rel=\"noopener noreferrer\" >3D Schauraum </a><label id=\"winzab\"> - Produktvisualisierung </label>"
    + "<img alt=\"alternative text\" title=\"erstellt in Unreal Engine 4\" style=\"margin-top: -2px;\" src=\"./contents/ue4.png\">";

    document.getElementById('zabapp').innerHTML = "<a href=\"https://play.google.com/store/apps/details?id=com.zabranskygmbh.app\" target=\"_blank\" rel=\"noopener noreferrer\">Zabransky GmbH</a><label > - intern app (Xamarin)</label>"  
    + "<img alt=\"alternative text\" title=\"inklusive Backend (ASP.NET Core 3.1 + SQL Server)\" style=\"margin-top: -5px;\" src=\"./contents/backend.png\">"               
    + "<img alt=\"alternative text\" title=\"verfügbar auf Google Play\" style=\"margin-top: -5px;\" src=\"./contents/playstore.png\">";    
    
    document.getElementById('winzab2').innerHTML = "<a href=\"#\">Winzab2 </a><label > - Company information system</label>"
    + "<img alt=\"alternative text\" title=\"inklusive Backend (SQL Server)\" style=\"margin-top: -2px;\" src=\"./contents/backend.png\">";
    
    document.getElementById('kontakt').innerHTML = "Für mehr Auskunft kontaktieren Sie mich per <a style='text-decoration: underline;' href='mailto:office@janrucil.dev'>Email</a>.";

}


function setCzech(){

    document.getElementById('service').innerHTML = "Tvořím komplexní aplikace, 3D simulace a hry";
    document.getElementById('mcpPraktikum').innerHTML = "Stáž";
    document.getElementById('zabranskyTimeline').innerHTML = "01/2019 - současnost";

    document.getElementById('last').innerHTML = "Nedávné realizace:";

    document.getElementById('3dschauraum').innerHTML =  "<a href=\"./3dshowroom/index.html\" target=\"_blank\" rel=\"noopener noreferrer\" >3D Showroom </a><label id=\"winzab\"> - vizualizace produktu </label>"
    + "<img alt=\"alternative text\" title=\"vytvořeno v Unreal Engine 4\" style=\"margin-top: -2px;\" src=\"./contents/ue4.png\">";

    document.getElementById('zabapp').innerHTML = "<a href='https://play.google.com/store/apps/details?id=com.zabranskygmbh.app' target='_blank' rel='noopener noreferrer'>Zabransky GmbH</a><label > - interní aplikace (Xamarin)</label>"  
    + "<img alt='alternative text' title='včetně backendu (ASP.NET Core 3.1 + SQL Server)' style='margin-top: -5px;' src='./contents/backend.png'>"               
    + "<img alt='alternative text' title='K dispozici na Google Play' style='margin-top: -5px;' src='./contents/playstore.png'>";    
    
    document.getElementById('winzab2').innerHTML = "<a href='#'>Winzab2 </a><label > - firemní informační systém</label>"
    + "<img alt='alternative text' title='včetně backendu (SQL Server)' style='margin-top: -2px;' src='./contents/backend.png'>";
    
    document.getElementById('kontakt').innerHTML = "Pro více informací mě kontaktujte přes <a style='text-decoration: underline;' href='mailto:office@janrucil.dev'>email</a>.";
}



function setEnglish(){


}