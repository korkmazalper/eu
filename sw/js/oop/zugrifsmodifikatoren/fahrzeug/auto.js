// Auto.js - Auto Klasse
import Fahrzeug from './Fahrzeug.js';

class Auto extends Fahrzeug {
  #marke;
  #sitzplaetze;

  constructor(geschwindigkeit, baujahr, farbe, hersteller, marke, sitzplaetze) {
    super('Auto', geschwindigkeit, baujahr, farbe, hersteller);
    this.#marke = marke;
    this.#sitzplaetze = sitzplaetze;
  }

  getMarke() {
    return this.#marke;
  }

  getSitzplaetze() {
    return this.#sitzplaetze;
  }

  starten() {
    console.log(`${this.#marke} Auto startet den Motor.`);
  }

  hupen() {
    console.log(`${this.#marke} Auto hupt: Beep Beep!`);
  }

  anzeigenDetails() {
    super.anzeigenDetails();
    console.log(`Marke: ${this.#marke}, Sitzplätze: ${this.#sitzplaetze}`);
  }
}

export default Auto;
