// Lkw.js - Lkw Klasse
import Fahrzeug from './Fahrzeug.js';

class Lkw extends Fahrzeug {
  #ladung;
  #achsenZahl;

  constructor(geschwindigkeit, baujahr, farbe, hersteller, ladung, achsenZahl) {
    super('Lkw', geschwindigkeit, baujahr, farbe, hersteller);
    this.#ladung = ladung;
    this.#achsenZahl = achsenZahl;
  }

  getLadung() {
    return this.#ladung;
  }

  setLadung(tonnen) {
    if (tonnen >= 0) {
      this.#ladung = tonnen;
      console.log(`Neue Ladung: ${this.#ladung} Tonnen`);
    } else {
      console.log('Die Ladung muss positiv sein');
    }
  }

  getAchsenZahl() {
    return this.#achsenZahl;
  }

  starten() {
    console.log(`Der Lkw mit ${this.#ladung} Tonnen Ladung und ${this.#achsenZahl} Achsen startet den Motor.`);
  }

  anzeigenDetails() {
    super.anzeigenDetails();
    console.log(`Ladung: ${this.#ladung} Tonnen, Achsenanzahl: ${this.#achsenZahl}`);
  }
}

export default Lkw;
