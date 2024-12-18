import Person from "./Person.js";

class Schueler extends Person {
    #schuelerID;
    constructor(name, alter, schuelerID) {
        super(name, alter);
        this.#schuelerID = schuelerID;
    }
    get schuelerID() {
        return this.#schuelerID;
    }
    set schuelerID(id) {
        this.#schuelerID = id;
    }

    toString() {
        return `Schüler(in): ${super.toString()}, ID: ${this.#schuelerID}`;
    }
}

export default Schueler;
