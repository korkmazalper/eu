import Person from "./Person.js";

class Lehrer extends Person {
    #fach;
    constructor(name, alter, fach) {
        super(name, alter);
        this.#fach = fach;
    }

    toString() {
        return `Lehrer: ${super.toString()}, Fach: ${this.#fach}`;
    }
}

export default Lehrer;
