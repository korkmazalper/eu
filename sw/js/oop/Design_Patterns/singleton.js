class Singleton {
    #hash;
    constructor() {
        if (Singleton.instance) {
            return Singleton.instance;
        }
        Singleton.instance = this;
        this.#hash = this.createSpecialHash(2);
    }
    createSpecialHash(x) {
        let myHash = "";
        for (let index = 0; index < x; index++) {
            myHash += crypto.randomUUID();

        }
        return myHash;
    }
    showDetails() {
        return this.#hash;
    }
}


const instance1 = new Singleton();
const instance2 = new Singleton();
console.log(typeof instance1);
console.log(typeof instance2);

console.log(instance1 instanceof Object);
console.log(instance1 === instance2);
console.log(instance1.showDetails());
console.log(instance2.showDetails());