class Schule {
    #schulName;
    #klassenzimmerListe;

    constructor(schulName) {
        this.#schulName = schulName;
        this.#klassenzimmerListe = [];
    }

    klassenzimmerHinzufuegen(klassenzimmer) {
        this.#klassenzimmerListe.push(klassenzimmer);
    }

    toString() {
        let klassenzimmerDetails = this.#klassenzimmerListe
            .map(klassenzimmer => klassenzimmer.toString())
            .join("\n------------------------------\n");
        return `Schule: ${this.#schulName}\n\n${klassenzimmerDetails}`;
    }
}

export default Schule;
