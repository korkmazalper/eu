class Klassenzimmer {
    #klassenName;
    #lehrer;
    #schuelerListe;

    constructor(klassenName, lehrer) {
        this.#klassenName = klassenName;
        this.#lehrer = lehrer;
        this.#schuelerListe = [];
    }

    schuelerHinzufuegen(schueler) {
        this.#schuelerListe.push(schueler);
    }

    toString() {
        let schuelerDetails = this.#schuelerListe
            .map(schueler => schueler.toString())
            .join("\n");
        return `Klasse: ${this.#klassenName}\n${this.#lehrer.toString()}\nSchüler(in):\n${schuelerDetails}`;
    }
}

export default Klassenzimmer;
