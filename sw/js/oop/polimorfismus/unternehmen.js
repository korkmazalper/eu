class Mitarbeiter {
    #vorname;
    #nachname;
    #geburtsdatum;
    #position;
    #abteilung;
    #grundgehalt;
    #eintrittsdatum;
    #email;

    constructor(vorname, nachname, geburtsdatum, position, abteilung, grundgehalt, eintrittsdatum, email) {
        this.#vorname = vorname;
        this.#nachname = nachname;
        this.#geburtsdatum = geburtsdatum;
        this.#position = position;
        this.#abteilung = abteilung;
        this.#grundgehalt = grundgehalt;
        this.#eintrittsdatum = eintrittsdatum;
        this.#email = email;
    }

    // Überprüfen Sie Geburtsdatum, Eintrittsdatum, E-Mail und Grundgehalt. 
    // z.B. Mitarbeiter unter 16 Jahren dürfen nicht arbeiten. 
    // oder das Eintrittsdatum darf nicht später als heute sein.

    #berechneJahresBonus() {
        const aktuellesJahr = new Date().getFullYear();
        const eintrittsjahr = new Date(this.#eintrittsdatum).getFullYear();
        const arbeitsjahre = aktuellesJahr - eintrittsjahr;
        return this.#grundgehalt * 0.02 * arbeitsjahre; 
    }
    #berechneGehalt() {
        return this.#grundgehalt + this.#berechneJahresBonus();
    }

    get gehalt() {
        return this.#berechneGehalt();
    }

    get MitarbeiterDetails() {
        return `${this.#vorname} ${this.#nachname}, geboren am ${this.#geburtsdatum}, ist ${this.#position} in der Abteilung ${this.#abteilung} und verdient ein Gehalt von ${this.gehalt.toFixed(2)} EUR. Eingestellt am ${this.#eintrittsdatum}. Kontakt: ${this.#email}\n`;
    }
}

class Buchhalter extends Mitarbeiter {
    constructor(vorname, nachname, geburtsdatum, abteilung, grundgehalt, eintrittsdatum, email) {
        super(vorname, nachname, geburtsdatum, "Buchhalter", abteilung, grundgehalt, eintrittsdatum, email);
    }

    mitarbeiterGehaltBerechnen(mitarbeiter) {
        //console.log(mitarbeiter.MitarbeiterDetails);
        console.log(`${mitarbeiter.gehalt}` +" EU");
    }
}

class Manager extends Mitarbeiter {
    #reisezulage;
    #fuehrungszulage;

    constructor(vorname, nachname, geburtsdatum, abteilung, grundgehalt, eintrittsdatum, email, reisezulage, fuehrungszulage) {
        super(vorname, nachname, geburtsdatum, "Manager", abteilung, grundgehalt, eintrittsdatum, email);
        this.#reisezulage = reisezulage;
        this.#fuehrungszulage = fuehrungszulage;
    }

    #berechneGehalt() {
        return super.gehalt + this.#reisezulage + this.#fuehrungszulage;
    }

    get gehalt() {
        return this.#berechneGehalt();
    }

    get ManagerDetails() {
        return `Manager Details:\n${this.getMitarbeiterDetails()} (inkl. ${this.#reisezulage.toFixed(2)} EUR Reisezulage und ${this.#fuehrungszulage.toFixed(2)} EUR Führungszulage)`;
    }
}

class Generaldirektor extends Manager {
    #verantwortungszulage;

    constructor(vorname, nachname, geburtsdatum, abteilung, grundgehalt, eintrittsdatum, email, reisezulage, fuehrungszulage, verantwortungszulage) {
        super(vorname, nachname, geburtsdatum, abteilung, grundgehalt, eintrittsdatum, email, reisezulage, fuehrungszulage);
        this.#verantwortungszulage = verantwortungszulage;
        this.position = "Generaldirektor"; 
    }

    #berechneGehalt() {
        return super.gehalt + this.#verantwortungszulage; 
    }

    get gehalt() {
        return this.#berechneGehalt();
    }

    get GeneralDirektorDetails() {
        return `Generaldirektor Details:\n${this.MitarbeiterDetails} (inkl. ${this.gehalt.toFixed(2)} EUR Gesamtgehalt mit Direktions-, Führungs- und Verantwortungszulage)`;
    }
}

const buchhalter = new Buchhalter("Max", "Müller", "01.01.1985", "Buchhaltung", 4000, "01.01.2010", "max.mueller@x.de");
const manager = new Manager("Anna", "Schmidt", "15.05.1978", "Vertrieb", 8000, "01.06.2005", "anna.schmidt@x.de", 1500, 2000);
const generaldirektor = new Generaldirektor("Hans", "Meier", "01.01.1960", "Führung", 15000, "01.01.2000", "hans.meier@x.de", 3000, 5000, 7000);


buchhalter.mitarbeiterGehaltBerechnen(manager);

//console.log(generaldirektor.GeneralDirektorDetails);