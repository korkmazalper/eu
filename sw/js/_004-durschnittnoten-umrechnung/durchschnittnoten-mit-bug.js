function berechneDurchschnittsnoteUndBuschstabennote() {
  let note1 = parseFloat(document.getElementById('note1').value)
  let note2 = parseFloat(document.getElementById('note2').value)
  let projekt = parseFloat(document.getElementById('projekt').value)
  let sonstiges = parseFloat(document.getElementById('sonstiges').value)

    if ((!isNaN(note1) && note1 >= 0 && note1 <= 100) &&
        (!isNaN(note2) && note2 >= 0 && note2 <= 100) &&
        (!isNaN(projekt) && projekt >= 0 && projekt <= 100) &&
        (!isNaN(sonstiges) && sonstiges >= 0 && sonstiges <= 100)
    
    ) {
        var durchschnittsnote = (note1 + note2 + projekt + sonstiges) / 4
    document.getElementById('average').value = durchschnittsnote

    var buchstabenNote
    if (durchschnittsnote > 90) {
      buchstabeNote = 'A'
    } else if (durchschnittsnote > 80) {
      buchstabeNote = 'B'
    } else if (durchschnittsnote > 70) {
      buchstabeNote = 'C'
    } else if (durchschnittsnote > 60) {
      buchstabeNote = 'D'
    } else {
      buchstabeNote = 'F'
    }
    document.getElementById('grade').value = buchstabeNote
  } else {
        console.log('Ungültige Eingabe.')

  }
}
