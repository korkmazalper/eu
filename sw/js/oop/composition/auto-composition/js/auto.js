class Motor {
            constructor(typ, marke) {
                this.typ = typ;
                this.marke = marke;
            }

            showDetails() {
                return `${this.marke}-${this.typ} `;
            }
        }

class BenzinMotor extends Motor {
            constructor(marke) {
                super('Benzin', marke);
            }        
}

class ElektroMotor extends Motor {
            constructor(marke) {
                super('Elektro', marke);
            }

            showDetails() {
                return `Elektro :: ${this.marke}-${this.typ}`;
            }
}

class DieselMotor extends Motor {
            constructor(marke) {
                super('Diesel', marke);
            }       
}

class Reifen {
            constructor(marke) {
                this.marke = marke;
            }

            details() {
                return `Reifenmarke: ${this.marke}`;
            }
}

class Auto {
            constructor(marke, farbe, motor, reifen) {
                this.marke = marke;
                this.farbe = farbe;
                this.motor = motor;
                this.reifen = reifen;
            }

            details() {
                return `${this.farbe} ${this.marke}: ,${this.motor.showDetails()} ${this.reifen.details()}`;
            }
}

        const autos = [];

        const form = document.getElementById('autoForm');
        const autoListeDiv = document.getElementById('autoListe');

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const marke = document.getElementById('marke').value;
            const farbe = document.getElementById('farbe').value;
            const motorTyp = document.getElementById('motorTyp').value;
            const reifenMarke = document.getElementById('reifenMarke').value;

            let motor;
            if (motorTyp === 'Benzin') {
                motor = new BenzinMotor(`${marke} Motor`);
            } else if (motorTyp === 'Elektro') {
                motor = new ElektroMotor(`${marke} Motor`);
            } else if (motorTyp === 'Diesel') {
                motor = new DieselMotor(`${marke} Motor`);
            }

            const reifen = new Reifen(reifenMarke);
            const auto = new Auto(marke, farbe, motor, reifen);
            autos.push(auto);
            autoListeAktualisieren();
        });

        function autoListeAktualisieren() {
            autoListeDiv.innerHTML = '';

            autos.forEach((auto, index) => {
                const autoDetail = document.createElement('p');
                autoDetail.innerHTML = `- ${auto.details()}`;
                autoListeDiv.appendChild(autoDetail);
            });
        }