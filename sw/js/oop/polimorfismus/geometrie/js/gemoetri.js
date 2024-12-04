
class Form {
    berechneFlaeche() {
        throw new Error('Die Methode muss in der Unterklasse implementiert werden.');
    }
}

class Dreieck extends Form {
    basis;
    hoehe;
    constructor(basis, hoehe) {
        super();
        this.basis = basis;
        this.hoehe = hoehe;
    }

    berechneFlaeche() {
        return (this.basis * this.hoehe) / 2; 
    }
}


class Viereck extends Form {
    constructor(breite, hoehe) {
        super();
        this.breite = breite;
        this.hoehe = hoehe;
    }

    berechneFlaeche() {
        return this.breite * this.hoehe;
    }
}

class Kreis extends Form{
    constructor(radius) {
        super();
        this.radius    = radius;
        
    }

    berechneFlaeche() {
        return this.radius*this.radius*Math.PI;
    }
}

class GeometrieRechner {
    berechne(form) {
        if (!(form instanceof Form)) {
            throw new Error('Das übergebene Objekt muss eine Instanz von Form sein.');
        }
        return form.berechneFlaeche();
    }
}


const dreieck = new Dreieck(5, 10); 
const viereck = new Viereck(8, 12); 
const kreis = new Kreis(3);
const rechner = new GeometrieRechner();


console.log(`Die Fläche des Dreiecks: ${rechner.berechne(dreieck).toFixed(2)}`);
console.log(`Die Fläche des Vierecks: ${rechner.berechne(viereck).toFixed(2)}`);
console.log(`Die Fläche des Kreis: ${rechner.berechne(kreis).toFixed(2)}`);
