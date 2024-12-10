let zufallszahl = Math.floor(Math.random() * 100) + 1; 
let anzahlVersuche = 0; 

function rateZahl() {
    let benutzerEingabe = parseInt(document.getElementById("versuch").value);
    anzahlVersuche++; 
    if (isNaN(benutzerEingabe)) {
        document.getElementById("hinweis").innerText = "Bitte geben Sie eine gültige Zahl ein.";
    }
    if (benutzerEingabe < zufallszahl) {
        document.getElementById("hinweis").innerText = "Zu niedrig! Versuchen Sie es erneut.";
    } else if (benutzerEingabe > zufallszahl) {
        document.getElementById("hinweis").innerText = "Zu hoch! Versuchen Sie es erneut.";
    } else if (benutzerEingabe === zufallszahl) {
        document.getElementById("hinweis").innerText = "Herzlichen Glückwunsch! Sie haben die Zahl erraten.";
        document.getElementById("versuche").innerText = `Sie haben ${anzahlVersuche} Versuche benötigt.`;
    } else {
        
    }
}

function spielZurücksetzen() {
    zufallszahl = Math.floor(Math.random() * 100) + 1;
    anzahlVersuche = 0; 
    document.getElementById("versuch").value = "";
    document.getElementById("hinweis").innerText = ""; 
    document.getElementById("versuche").innerText = ""; 
}
