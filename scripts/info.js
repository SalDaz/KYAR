
function loadXMLDoc(info) {
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    } else {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.open("GET", info, false);
    xhttp.send();
    return xhttp.responseXML;
}

function displayData() {
    var xmlDoc = loadXMLDoc("info.xml");
    var name = xmlDoc.getElementsByTagName("info")[0].childNodes[0].nodeValue;
    document.getElementById("output").innerHTML = name;
}

window.onload = displayData;
