const ergebnisDiv = document.getElementById('ergebnis');
function playFizBuzz() {
    const start = parseInt(document.getElementById('start').value);
    const end = parseInt(document.getElementById('end').value);
    
    if (isNaN(start) || isNaN(end) || start > end) {
        ergebnisDiv.innerHTML = "<p>Bitte geben Sie gültige Zahlen ein!</p>";
        return;
    } else {
        ergebnisDiv.innerHTML = ''; 
        berechneFizBuzz(start, end);
    }
 
}
function berechneFizBuzz(start, end) {
          for (let i = start; i <= end; i++) {
            const p = document.createElement('p');
            let output='';
            if (i % 3 === 0) {
                output+="Fizz";
            } 
            if (i % 5 === 0) {
                output+="Buzz";
            }
            if (output !== '') {
                p.textContent=output;
                p.style.color="blue";
                if(output=='FizzBuzz'){
                    p.style.color="red";
                }
                ergebnisDiv.appendChild(p);
            } else {
                p.textContent=i;
                ergebnisDiv.appendChild(p);
            }
            }
    }

