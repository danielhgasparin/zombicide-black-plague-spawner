//Global site tag (gtag.js) - Google Analytics
var analyticsId = "UA-111994475-1";

function analyticsRun(){
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', analyticsId);
}

var analyticsScriptImport = document.createElement("script");
analyticsScriptImport.async = true;
analyticsScriptImport.src = "https://www.googletagmanager.com/gtag/js?id=" + analyticsId;

var analyticsScript = document.createElement("script");
analyticsScript.innerHTML = "analyticsRun();";

document.head.appendChild(analyticsScriptImport);
document.head.appendChild(analyticsScript);