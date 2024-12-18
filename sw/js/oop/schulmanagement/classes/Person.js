class Person {
    #name;
    #alter;

    constructor(name, alter) {
        this.#name = name;
        this.alter = alter;    
    }
    get name() {
        return this.#name;
    }
    set name(name) {
        this.#name = name;
    }
    get alter() {
        return this.#alter;
    }
    set alter(alter) {
        if (alter > 0) {
            this.#alter = alter;
        } else {
            this.#alter = "Ungültig";    
        }
        
    }
    toString() {
        return `Name: ${this.#name}, Alter: ${this.#alter}`;
    }
    
}

export default Person;
