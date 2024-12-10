function loesungDerQuadratisheGleichung(){
                let a=parseFloat(document.getElementById("Eingabea").value);
                let b=parseFloat(document.getElementById("Eingabeb").value);
                let c=parseFloat(document.getElementById("Eingabec").value);
                //document.getElementById("ergebnis").value=a;
                if(isNaN(a)||isNaN(b)||isNaN(c)){
                    document.getElementById("ergebnis").value="Ungültige Eingabe(n)";
                    return;
                }
                if(a<0){
                    console.log(a);
                    document.getElementById("ergebnis").value="Keine Quadratische Gleichung";
                    return;
                }
                let diskriminante=Math.pow(b,2)-4*a*c;
                if(diskriminante<0){
                    document.getElementById("ergebnis").value="Disc:"+`${diskriminante}`+", Keine (reelen) Lösung";
                    
                } else if(diskriminante==0){
                    document.getElementById("ergebnis").value=(-b)/(2*a);
                    
                } else{
                    document.getElementById("ergebnis").value=(-b+Math.sqrt(diskriminante))/(2*a) 
                                                            + " , " 
                                                            + (-b-Math.sqrt(diskriminante))/(2*a); 
                }

            }