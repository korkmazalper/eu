function berechneDurchschnitt() {
            // Noten von den Eingabefeldern abrufen
            let note1 = parseFloat(document.getElementById("note1").value);
            let note2 = parseFloat(document.getElementById("note2").value);
            let projekt = parseFloat(document.getElementById("projekt").value);
            let sonstiges = parseFloat(document.getElementById("sonstiges").value);   
    if (notenValidieren(note1) && notenValidieren(note2) &&
        notenValidieren(projekt) && notenValidieren(sonstiges)) {
        document.getElementById("average").value = berechneDurchschnittNote(note1, note2, projekt, sonstiges);
        document.getElementById("grade").value = notenBuchstaben(berechneDurchschnittNote(note1, note2, projekt, sonstiges));
    } else {
        document.getElementById("average").value = "Ungültige Eingabe!";
        document.getElementById("grade").value =  "Ungültige Eingabe!";
    }   
}
function notenBuchstaben(durchschnittnote) {
        var buchstabeNote;
        if (durchschnittnote > 90) {
            buchstabeNote = "A";
        } else if (durchschnittnote > 80) {
            buchstabeNote = "B";
        } else if (durchschnittnote > 70) {
            buchstabeNote = "C";
        }else if (durchschnittnote > 60) {
            buchstabeNote = "D";
        } else {
            buchstabeNote = "F";
        } 
    return buchstabeNote;
} 
    
function berechneDurchschnittNote(...note) {
    //console.log("Berechne");
    if (note.length == 0) {
        return "Ungültige/keine Eingabe !";
    } 
    let total=0; 
    for (let index = 0; index < note.length; index++) {
         total += note[index];
    }
    return total/note.length;   
}

function notenValidieren(note) {
    
    if (!isNaN(note) && note >= 0 && note <= 100) {
        return true;
    } else {
        return false;
    }
}
        


/**
 * 
 *         
            // Überprüfen, ob alle Eingaben gültig sind
    if (isNaN(note1) || isNaN(note2) || isNaN(projekt) || isNaN(sonstiges)
    || note1<0 || note1>100 || note2<0 || note2>100) {
                alert("Bitte gültige Noten eingeben.");
                return;
            }
     
    
            // Durchschnitt berechnen
            let durchschnitt = (note1 + note2 + projekt + sonstiges) / 4;
            document.getElementById("average").value = durchschnitt.toFixed(2);

            // Durchschnitt in Buchstabenbewertung umwandeln
            let buchstabenbewertung;
            if (durchschnitt >= 90) {
                buchstabenbewertung = "A";
            } else if (durchschnitt >= 80) {
                buchstabenbewertung = "B";
            } else if (durchschnitt >= 70) {
                buchstabenbewertung = "C";
            } else if (durchschnitt >= 60) {
                buchstabenbewertung = "D";
            } else {
                buchstabenbewertung = "F";
            }

            // Buchstabenbewertung ausgeben
            document.getElementById("grade").value = buchstabenbewertung;
 */