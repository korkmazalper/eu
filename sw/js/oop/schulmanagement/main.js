import Lehrer from "./classes/Lehrer.js";
import Schueler from "./classes/Schueler.js";
import Klassenzimmer from "./classes/klassenzimmer.js";
import Schule from "./classes/schule.js";

const lehrer1 = new Lehrer("Herr Wagner", 45, "Software");
const lehrer2 = new Lehrer("Frau Schneider", 38, "Datenbanken");

const schueler1 = new Schueler("Lukas", 16, "ITA-222001");
const schueler2 = new Schueler("Yasmin", 19, "ITA-222002");
const schueler3 = new Schueler("Timoti", 18, "ITA-222003");
const schueler4 = new Schueler("John", 19, "ITA-222004");
const schueler5 = new Schueler("Jung", -2, "ITA-222010");

console.log(schueler1.alter);
const klasse1 = new Klassenzimmer("ITA-22A", lehrer1);
klasse1.schuelerHinzufuegen(schueler1);
klasse1.schuelerHinzufuegen(schueler2);
klasse1.schuelerHinzufuegen(schueler4);
klasse1.schuelerHinzufuegen(schueler5);

const klasse2 = new Klassenzimmer("ITA-22B", lehrer2);
klasse2.schuelerHinzufuegen(schueler3);


const schule = new Schule("TEB");
schule.klassenzimmerHinzufuegen(klasse1);
schule.klassenzimmerHinzufuegen(klasse2);

document.getElementById("schule").innerText = schule.toString();
//document.getElementById("klasse").innerText = schule.toString();
