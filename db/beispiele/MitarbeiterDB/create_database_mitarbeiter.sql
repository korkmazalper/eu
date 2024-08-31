DROP DATABASE IF EXISTS mitarbeiter;
CREATE DATABASE IF NOT EXISTS mitarbeiter CHARACTER SET utf8;
use mitarbeiter;
CREATE TABLE mitarbeiter.mitarbeiter (
  Ma_ID INT PRIMARY KEY,
  Nachname VARCHAR(30) NOT NULL,
  Vorname VARCHAR(30) NOT NULL,
  Geb_Datum DATETIME NOT NULL,
  Tagesarbeitszeit INT NOT NULL,
  UrlaubsanspruchJahr INT NOT NULL
);
CREATE TABLE mitarbeiter.einsatz (
  E_ID INT PRIMARY KEY AUTO_INCREMENT,
  Ma_ID INT NOT NULL,
  Datum DATE NOT NULL,
  EinsatzVon_Zeit TIME NOT NULL,
  EinsatzBis_Zeit TIME NOT NULL,
  CONSTRAINT FK_E_MITARBEITER FOREIGN KEY(Ma_ID) REFERENCES mitarbeiter.mitarbeiter(Ma_ID)
);
CREATE TABLE mitarbeiter.fehlzeit (
  FZ_ID INT PRIMARY KEY AUTO_INCREMENT,
  Ma_ID INT NOT NULL,
  Von_Datum DATE NOT NULL,
  Bis_Datum DATE NOT NULL,
  Fehlgrund VARCHAR(30) NOT NULL,
  Fehltage INT NOT NULL,
  CONSTRAINT FK_FZ_MITARBEITER FOREIGN KEY(Ma_ID) REFERENCES mitarbeiter.mitarbeiter(Ma_ID)
);
INSERT INTO
  mitarbeiter.mitarbeiter(
    Ma_ID,
    Nachname,
    Vorname,
    Geb_Datum,
    Tagesarbeitszeit,
    UrlaubsanspruchJahr
  )
VALUES(811, 'Müller', 'Jens', '1982-04-14', 8, 26),
  (812, 'Scholz', 'Birgit', '1964-08-23', 4, 27),
  (815, 'Schmidt', 'Ulrich', '1957-11-02', 8, 28),
  (817, 'Storck', 'Hans', '1990-11-14', 6, 24),
  (841, 'Ullmann', 'Franz', '1959-12-21', 8, 28),
  (902, 'Sorge', 'Susanne', '1952-03-02', 8, 30);
INSERT INTO
  mitarbeiter.einsatz(Ma_ID, Datum, EinsatzVon_Zeit, EinsatzBis_Zeit)
VALUES(811, '2009-04-17', '07:00', '11:45'),
  (811, '2009-04-17', '12:15', '16:00'),
  (811, '2009-04-18', '07:32', '08:10'),
  (902, '2009-04-17', '07:21', '12:06');
INSERT INTO
  mitarbeiter.fehlzeit(Ma_ID, Von_Datum, Bis_Datum, Fehlgrund, Fehltage)
VALUES(811, '2009-04-18', '2009-04-23', 'Urlaub', 4),
  (902, '2009-04-18', '2009-05-08', 'Krank', 14),
  (811, '2009-06-19', '2009-06-20', 'Krank', 2),
  (811, '2009-11-17', '2009-11-17', 'Urlaub', 1),
  (902, '2009-12-31', '2009-12-31', 'Urlaub', 1),
  (902, '2010-01-01', '2010-01-09', 'Urlaub', 6);