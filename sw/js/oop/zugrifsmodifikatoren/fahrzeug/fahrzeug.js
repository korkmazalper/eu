// Fahrzeug.js - Abstrakte Basisklasse
class Fahrzeug {
  #typ;
  #geschwindigkeit;
  #baujahr;
  #farbe;
  #hersteller;

  constructor(typ, geschwindigkeit, baujahr, farbe, hersteller) {
    this.#typ = typ;
    this.#geschwindigkeit = geschwindigkeit;
    this.#baujahr = baujahr;
    this.#farbe = farbe;
    this.#hersteller = hersteller;
  }

  getTyp() {
    return this.#typ;
  }

  getGeschwindigkeit() {
    return this.#geschwindigkeit;
  }

  setGeschwindigkeit(geschwindigkeit) {
    if (geschwindigkeit > 0) {
      this.#geschwindigkeit = geschwindigkeit;
    } else {
      console.log('Die Geschwindigkeit muss positiv sein');
    }
  }

  getBaujahr() {
    return this.#baujahr;
  }

  getFarbe() {
    return this.#farbe;
  }

  setFarbe(farbe) {
    this.#farbe = farbe;
  }

  getHersteller() {
    return this.#hersteller;
  }

  starten() {
    throw new Error('Die Methode "starten" muss in einer Unterklasse implementiert werden');
  }

  beschleunigen() {
    console.log(`${this.#typ} beschleunigt auf ${this.#geschwindigkeit} km/h`);
  }

  anzeigenDetails() {
    console.log(`Typ: ${this.#typ}, Baujahr: ${this.#baujahr}, Farbe: ${this.#farbe}, Geschwindigkeit: ${this.#geschwindigkeit} km/h, Hersteller: ${this.#hersteller}`);
  }
}

export default Fahrzeug;
