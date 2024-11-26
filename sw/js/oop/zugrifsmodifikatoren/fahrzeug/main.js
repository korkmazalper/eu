import Auto from './auto.js';
import Motorrad from './motorrad.js';
import Lkw from './lkw.js';

const meinAuto = new Auto(150, 2021, 'Rot', 'BMW Group', 'BMW', 5);
const meinMotorrad = new Motorrad(180, 2019, 'Schwarz', 'Yamaha Corp', 'Yamaha', true);
const meinLkw = new Lkw(100, 2018, 'Blau', 'Daimler AG', 10, 4);

//window.meinAuto = meinAuto;
//window.meinMotorrad = meinMotorrad;
//window.meinLkw = meinLkw;

meinAuto.starten();
meinAuto.anzeigenDetails();

meinMotorrad.starten();
meinMotorrad.anzeigenDetails();

meinLkw.starten();
meinLkw.anzeigenDetails();

meinMotorrad.hupen();
meinLkw.hupen();

console.log("=====================");
huppppenn(meinMotorrad);
huppppenn(meinLkw);

function huppppenn(param) {
    console.log(":" + param.anzeigenDetails());
    param.hupen();
}
