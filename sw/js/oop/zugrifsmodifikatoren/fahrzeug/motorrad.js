// Motorrad.js - Motorrad Klasse
import Fahrzeug from './Fahrzeug.js';

class Motorrad extends Fahrzeug {
  #marke;
  #helmFach;

  constructor(geschwindigkeit, baujahr, farbe, hersteller, marke, helmFach) {
    super('Motorrad', geschwindigkeit, baujahr, farbe, hersteller);
    this.#marke = marke;
    this.#helmFach = helmFach;
  }

  getMarke() {
    return this.#marke;
  }

  hatHelmFach() {
    return this.#helmFach;
  }

  starten() {
    console.log(`${this.#marke} Motorrad startet den Motor.`);
  }

  hupen() {
    console.log(`${this.#marke} Motorrad hupt: Toot Toot!`);
  }

  anzeigenDetails() {
    super.anzeigenDetails();
    console.log(`Marke: ${this.#marke}, Helmfach: ${this.#helmFach ? 'Ja' : 'Nein'}`);
  }
}

export default Motorrad;
