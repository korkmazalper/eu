### Bibliothek Lösungen

1. Erste Lösung von Bibliothek (Kundentabelle ist nicht normalisiert)

```sql
drop DATABASE if EXISTS `kunde_buch`;
create DATABASE if not exists `kunde_buch`;
use kunde_buch;
create table if not exists kunde(kundennummer int primary key auto_increment,
kundenvorname varchar(250) not null,
kundennachname varchar(250) not null,
telefonnummer varchar(50),
adresse varchar(500)
);

create table if not exists `verlag`(verlagid int primary key auto_increment,
verlagsname varchar(250)
);

create table if not exists `buch` (
buchnummer int primary key auto_increment,
titel varchar(500),
anschaffungsdatum date,
verlagid int,
FOREIGN key(verlagid) REFERENCES verlag(verlagid)
);

create table if not exists `verleihvorgang`(
verleihvorgangid int primary key auto_increment,
buchnummer int not null,
kundennummer int not null,
rueckgabedatum date,
ausleihdatum date,
FOREIGN KEY(buchnummer) REFERENCES buch(buchnummer),
foreign key(kundennummer) References kunde(kundennummer)
);


```

**_Wichtige Punkte_**

- Die Tabellen Buch und Vorleihgang haben Fremdschlüsseln (Foreign Keys), die eigentlich die Primärschlüssel von anderen Tabellen sind. Um die ungewünschten Fehlermeldungen zu vermeiden, muss man die logische Verknüpfungen zwischen Tabellen beachten.
- Beachten Sie die Datentypen von Attributen

### Erweiterte Bibliothek-Datenbank

```sql

drop DATABASE if EXISTS `kunde_buch`;

create DATABASE if not exists `kunde_buch`;
use kunde_buch;
create table if not exists kunde(kundennummer int primary key auto_increment,
kundenvorname varchar(250) not null,
kundennachname varchar(250) not null,
telefonnummer varchar(50),
adresse varchar(500)
);

create table if not exists `verlag`(verlagid int primary key auto_increment,
verlagsname varchar(250)
);

create table if not exists `buch` (
buchnummer int primary key auto_increment,
titel varchar(500),
anschaffungsdatum date,
verlagid int,
FOREIGN key(verlagid) REFERENCES verlag(verlagid)
);

create table if not exists `verleihvorgang`(
verleihvorgangid int primary key auto_increment,
buchnummer int not null,
kundennummer int not null,
rueckgabedatum date,
ausleihdatum date,
FOREIGN KEY(buchnummer) REFERENCES buch(buchnummer),
foreign key(kundennummer) References kunde(kundennummer)
);

insert into kunde (kundenvorname, kundennachname, telefonnummer, adresse) values ('Maïly', 'Hook', '357-436-6431', 'Suite 26');
insert into kunde (kundenvorname, kundennachname, telefonnummer, adresse) values ('Josée', 'Johnke', '841-522-3562', 'Mark Mustermann Str 145 51067 Köln');
insert into kunde (kundenvorname, kundennachname, telefonnummer, adresse) values ('Gaëlle', 'Howis', '188-577-3543', 'Room 562');
insert into kunde (kundenvorname, kundennachname, telefonnummer, adresse) values ('Anaé', 'Stormouth', '357-923-9135', 'PO Box 39619');
insert into kunde (kundenvorname, kundennachname, telefonnummer, adresse) values ('Anaël', 'Rudland', '773-432-4145', 'Mark Mustermann Str 145 51067 Köln
');
insert into kunde (kundenvorname, kundennachname, telefonnummer, adresse) values ('Andréa', 'Korneichuk', '879-596-6088', 'Holzweg 154 12345 Berlin');
insert into kunde (kundenvorname, kundennachname, telefonnummer, adresse) values ('Thérèse', 'Feare', '907-228-1014', 'Mark Mustermann Str 145 51067 Köln
');
insert into kunde (kundenvorname, kundennachname, telefonnummer, adresse) values ('Eloïse', 'Cosans', '495-779-5976', 'Suite 15');
insert into kunde (kundenvorname, kundennachname, telefonnummer, adresse) values ('Anaëlle', 'Burles', '417-151-5655', 'Mark Mustermann Str 145 51067 Köln');
insert into kunde (kundenvorname, kundennachname, telefonnummer, adresse) values ('Lauréna', 'Wibrow', '969-340-4719', 'Holzweg 154 12345 Berlin');

insert into verlag(verlagsname) values("Springer");
insert into verlag(verlagsname) values("Klett");
insert into verlag(verlagsname) values("Wstermann");
insert into verlag(verlagsname) values("Main");
insert into verlag(verlagsname) values("Addison");
insert into verlag(verlagsname) values("Cambridge");
INSERT INTO buch (titel, anschaffungsdatum, verlagid) VALUES ('Ninja', '2023-09-10', 1);
INSERT INTO buch (titel, anschaffungsdatum, verlagid) VALUES ('Zombie and the Ghost Train (Zombie ja Kummitusjuna)', '2024-07-26', 2);
INSERT INTO buch (titel, anschaffungsdatum, verlagid) VALUES ('Night at the Museum', '2022-10-14', 3);
INSERT INTO buch (titel, anschaffungsdatum, verlagid) VALUES ('Pat and Mike', '2024-05-31', 4);
INSERT INTO buch (titel, anschaffungsdatum, verlagid) VALUES ('Young Detective Dee: Rise of the Sea Dragon (Di Renjie: Shen du long wang)', '2024-06-15', 4);
INSERT INTO buch (titel, anschaffungsdatum, verlagid) VALUES ('Thousand Clouds of Peace, A (Mil nubes de paz cercan el cielo, amor, jamás acabarás de ser amor)', '2024-05-05', 6);
INSERT INTO buch (titel, anschaffungsdatum, verlagid) VALUES ('Furry Vengeance', '2023-12-01', 1);
INSERT INTO buch (titel, anschaffungsdatum, verlagid) VALUES ('Flintstones in Viva Rock Vegas, The', '2023-11-12', 2);
INSERT INTO buch (titel, anschaffungsdatum, verlagid) VALUES ('Letzte schöne Herbsttag, Der', '2022-10-24', 2);
INSERT INTO buch (titel, anschaffungsdatum, verlagid) VALUES ('Sing Your Song', '2023-04-15', 2);

insert into buch (titel, anschaffungsdatum, verlagid) values ('Otcom', '1/5/2024', 4);
insert into buch (titel, anschaffungsdatum, verlagid) values ('Flexidy', '4/28/2024', 2);
insert into buch (titel, anschaffungsdatum, verlagid) values ('Zathin', '2/3/2024', 3);

create table if not exists `buch` (
buchnummer int primary key auto_increment,
titel varchar(500),
anschaffungsdatum date,
verlagid int,
FOREIGN key(verlagid) REFERENCES verlag(verlagid)
);

create table if not exists `verleihvorgang`(
verleihvorgangid int primary key auto_increment,
buchnummer int not null,
kundennummer int not null,
rueckgabedatum date,
ausleihdatum date,
FOREIGN KEY(buchnummer) REFERENCES buch(buchnummer),
foreign key(kundennummer) References kunde(kundennummer)
);


```

- Um die Redundanzen und mögliche Anomalien in der Datenbank zu vermeiden, erstellen wir eine neue Tabelle Adresse::

```sql
drop DATABASE if EXISTS `kunde_buch`;

create DATABASE if not exists `kunde_buch`;
use kunde_buch;
create table if not exists adresse(
adresseid int primary key AUTO_INCREMENT,
strasse varchar(300),
plz varchar(20),
stadt varchar(100) not null
);

create table if not exists kunde(kundennummer int primary key auto_increment,
kundenvorname varchar(250) not null,
kundennachname varchar(250) not null,
telefonnummer varchar(50),
adresseid int not null,
FOREIGN key (adresseid) references adresse(adresseid)
);
-- Adresse tablosu için veriler
INSERT INTO adresse (strasse, plz, stadt) VALUES
('Hauptstrasse 1', '12345', 'Berlin'),
('Musterweg 2', '23456', 'Hamburg'),
('Beispielallee 3', '34567', 'München'),
('Teststrasse 4', '45678', 'Köln'),
('Demoweg 5', '56789', 'Frankfurt'),
('Erika-Mustermann-Str. 6', '67890', 'Stuttgart'),
('Schulstrasse 7', '78901', 'Düsseldorf'),
('Bahnhofstrasse 8', '89012', 'Dortmund'),
('Hauptbahnhofplatz 9', '90123', 'Essen'),
('Kirchweg 10', '01234', 'Leipzig');

-- Kunde tablosu için veriler
INSERT INTO kunde (kundenvorname, kundennachname, telefonnummer, adresseid) VALUES
('Max', 'Mustermann', '0123456789', 1),
('Erika', 'Musterfrau', '0234567890', 2),
('John', 'Doe', '0345678901', 3),
('Jane', 'Doe', '0456789012', 4),
('Hans', 'Meier', '0567890123', 5),
('Anna', 'Schmidt', '0678901234', 6),
('Peter', 'Schulz', '0789012345', 7),
('Laura', 'Müller', '0890123456', 8),
('Klaus', 'Becker', '0901234567', 9),
('Sophie', 'Bauer', '1012345678', 10);

create table if not exists `verlag`(verlagid int primary key auto_increment,
verlagsname varchar(250)
);

create table if not exists `buch` (
buchnummer int primary key auto_increment,
titel varchar(500),
anschaffungsdatum date,
verlagid int,
FOREIGN key(verlagid) REFERENCES verlag(verlagid)
);

create table if not exists `verleihvorgang`(
verleihvorgangid int primary key auto_increment,
buchnummer int not null,
kundennummer int not null,
rueckgabedatum date,
ausleihdatum date,
FOREIGN KEY(buchnummer) REFERENCES buch(buchnummer),
foreign key(kundennummer) References kunde(kundennummer)
);

insert into verlag(verlagsname) values("Springer");
insert into verlag(verlagsname) values("Klett");
insert into verlag(verlagsname) values("Wstermann");
insert into verlag(verlagsname) values("Main");
insert into verlag(verlagsname) values("Addison");
insert into verlag(verlagsname) values("Cambridge");
INSERT INTO buch (titel, anschaffungsdatum, verlagid) VALUES ('Ninja', '2023-09-10', 1);
INSERT INTO buch (titel, anschaffungsdatum, verlagid) VALUES ('Zombie and the Ghost Train (Zombie ja Kummitusjuna)', '2024-07-26', 2);
INSERT INTO buch (titel, anschaffungsdatum, verlagid) VALUES ('Night at the Museum', '2022-10-14', 3);
INSERT INTO buch (titel, anschaffungsdatum, verlagid) VALUES ('Pat and Mike', '2024-05-31', 4);
INSERT INTO buch (titel, anschaffungsdatum, verlagid) VALUES ('Young Detective Dee: Rise of the Sea Dragon (Di Renjie: Shen du long wang)', '2024-06-15', 4);
INSERT INTO buch (titel, anschaffungsdatum, verlagid) VALUES ('Thousand Clouds of Peace, A (Mil nubes de paz cercan el cielo, amor, jamás acabarás de ser amor)', '2024-05-05', 6);
INSERT INTO buch (titel, anschaffungsdatum, verlagid) VALUES ('Furry Vengeance', '2023-12-01', 1);
INSERT INTO buch (titel, anschaffungsdatum, verlagid) VALUES ('Flintstones in Viva Rock Vegas, The', '2023-11-12', 2);
INSERT INTO buch (titel, anschaffungsdatum, verlagid) VALUES ('Letzte schöne Herbsttag, Der', '2022-10-24', 2);
INSERT INTO buch (titel, anschaffungsdatum, verlagid) VALUES ('Sing Your Song', '2023-04-15', 2);

insert into buch (titel, anschaffungsdatum, verlagid) values ('Otcom', '1/5/2024', 4);
insert into buch (titel, anschaffungsdatum, verlagid) values ('Flexidy', '4/28/2024', 2);
insert into buch (titel, anschaffungsdatum, verlagid) values ('Zathin', '2/3/2024', 3);

create table if not exists `buch` (
buchnummer int primary key auto_increment,
titel varchar(500),
anschaffungsdatum date,
verlagid int,
FOREIGN key(verlagid) REFERENCES verlag(verlagid)
);

create table if not exists `verleihvorgang`(
verleihvorgangid int primary key auto_increment,
buchnummer int not null,
kundennummer int not null,
rueckgabedatum date,
ausleihdatum date,
FOREIGN KEY(buchnummer) REFERENCES buch(buchnummer),
foreign key(kundennummer) References kunde(kundennummer)
);

-- Verleihvorgang tablosu için veriler
INSERT INTO verleihvorgang (buchnummer, kundennummer, rueckgabedatum, ausleihdatum) VALUES
(1, 1, '2023-09-01', '2023-08-01'),
(2, 2, '2023-09-05', '2023-08-05'),
(3, 3, '2023-09-10', '2023-08-10'),
(4, 4, '2023-09-15', '2023-08-15'),
(5, 5, '2023-09-20', '2023-08-20'),
(6, 6, '2023-09-25', '2023-08-25'),
(7, 7, '2023-09-30', '2023-08-30'),
(8, 8, '2023-10-05', '2023-09-05'),
(9, 9, '2023-10-10', '2023-09-10'),
(10, 10, '2023-10-15', '2023-09-15');

```

### Wiedererweiterte Datenbank

```sql
drop DATABASE if EXISTS `kunde_buch_e1`;

create DATABASE `kunde_buch_e1`;
use `kunde_buch_e1`;

create table if not exists stadt_plz(
stadtplzid int primary key AUTO_INCREMENT,
plz varchar(20) not null,
stadt varchar(100) not null
);

create table if not exists adresse(
adresseid int primary key AUTO_INCREMENT,
strasse varchar(300),
stadtplzid int not null,
foreign key (stadtplzid) references stadt_plz(stadtplzid)
);

create table if not exists kunde(
kundennummer int primary key auto_increment,
kundenvorname varchar(250) not null,
kundennachname varchar(250) not null,
telefonnummer varchar(50),
adresseid int not null,
FOREIGN key (adresseid) references adresse(adresseid)
);

INSERT INTO stadt_plz (plz, stadt) VALUES
('12345', 'Berlin'),
('23456', 'Hamburg'),
('34567', 'München'),
('45678', 'Köln'),
('45978', 'Köln'),
('45778', 'Köln'),
('45878', 'Köln'),
('56789', 'Frankfurt'),
('67890', 'Stuttgart'),
('78901', 'Düsseldorf'),
('89012', 'Dortmund'),
('90123', 'Essen'),
('01234', 'Leipzig'),
('99427', 'Weimar'),
('01034', 'Hamburg'),
('11034', 'Hamburg'),
('21034', 'Hamburg'),
('54345', 'Kassel'),
('76532', 'München'),
('12122', 'Bonn'),
('67541', 'Euskirchen'),
('11111', 'Postdam'),
('07321', 'Jena')
;

INSERT INTO adresse (strasse, stadtplzid) VALUES
('Hauptstrasse 1', 1),
('Musterweg 2', 2),
('Beispielallee 3', 3),
('Teststrasse 4', 4),
('Demoweg 5', 5),
('Erika-Mustermann-Str. 6', 6),
('Schulstrasse 7', 7),
('Bahnhofstrasse 8', 1),
('Hauptbahnhofplatz 9', 2),
('Hauptbahnhofplatz 11', 11),
('Hauptbahnhofplatz 139', 12),
('Kirchweg 10', 10),
('Domstraße 10', 13),
('Goetheplatz 22', 19),
('Vollstraße 145', 17);

INSERT INTO kunde (kundenvorname, kundennachname, telefonnummer, adresseid) VALUES
('Max', 'Mustermann', '0123456789', 1),
('Julia', 'Mustermann', '0123356789', 1),
('Helga', 'Mustermann', '0143356789', 1),
('Erika', 'Musterfrau', '0234567890', 3),
('John', 'Doe', '0345678901', 3),
('Jane', 'Doe', '0456789012', 3),
('Jane', 'Trainer', '0555789012', 4),
('Hans', 'Meier', '0567890123', 5),
('Anna', 'Schmidt', '0678901234', 6),
('Peter', 'Schulz', '0789012345', 7),
('Laura', 'Müller', '0890123456', 8),
('Klaus', 'Becker', '0901234567', 9),
('Sophie', 'Bauer', '1012345678', 10),
('Steffen', 'Bernard', '1012345678', 11),
('Yasmin', 'Milkmann', '134245678', 12),
('Celine', 'Eisenbahn','02321234554',11),
('Julia', 'Schumacher','02321234554',14),
('Jasmin', 'Feder','03234222342',15),
('Hans', 'Eisenbahn','02324234554',13),
('Stefan', 'Rossman','09875636273',11)
;

create table if not exists verlag(
verlagid int primary key auto_increment,
verlagsname varchar(250)
);

create table if not exists buch (
buchnummer int primary key auto_increment,
titel varchar(500),
anschaffungsdatum date,
verlagid int,
FOREIGN key(verlagid) REFERENCES verlag(verlagid)
);

create table if not exists verleihvorgang(
verleihvorgangid int primary key auto_increment,
buchnummer int not null,
kundennummer int not null,
rueckgabedatum date,
ausleihdatum date,
FOREIGN KEY(buchnummer) REFERENCES buch(buchnummer),
foreign key(kundennummer) References kunde(kundennummer)
);

insert into verlag(verlagsname) values
("Sprinegr"),
("Klett"),
("Wstermann"),
("Main"),
("Addison"),
("Cambrigde"),
("O'Reilly Media"),
("Penguin Random House"),
("HarperCollins"),
("Simon & Schuster"),
("Hachette Livre"),
("Macmillan Publishers"),
("Scholastic"),
("McGraw-Hill Education"),
("Pearson"),
("Oxford University Press"),
("John Wiley & Sons"),
("Cengage Learning"),
("Wiley-Blackwell"),
("Springer Nature"),
("SAGE Publications"),
("Elsevier"),
("Cambridge University Press"),
("Bloomsbury"),
("Random House"),
("Thomson Reuters"),
("Bertelsmann"),
("Reed Elsevier"),
("Taylor & Francis"),
("Informa"),
("Grupo Planeta"),
("Kodansha"),
("Shogakukan"),
("Houghton Mifflin Harcourt"),
("Workman Publishing"),
("Abrams Books"),
("Chronicle Books"),
("F+W Media"),
("Sterling Publishing"),
("Zondervan"),
("Westminster John Knox Press"),
("Broadman & Holman"),
("Barbour Publishing"),
("Abingdon Press"),
("Harvest House Publishers"),
("Tyndale House Publishers"),
("NavPress"),
("InterVarsity Press"),
("Baker Publishing Group"),
("Crossway");

INSERT INTO buch (titel, anschaffungsdatum, verlagid) VALUES
('Berlin Alexanderplatz', '2022-05-17', 5),
('Das Boot', '2023-03-20', 17),
('Das Haus der Treppen', '2023-11-10', 25),
('Das Muschelessen', '2023-05-22', 35),
('Der Fremde', '2023-02-09', 35),
('Der Hauptmann von Köpenick', '2023-12-10', 45),
('Der Mann ohne Eigenschaften', '2023-04-10', 15),
('Der Name der Rose', '2021-05-15', 38),
('Der Prozess', '2022-03-08', 3),
('Der Räuber Hotzenplotz', '2022-06-30', 39),
('Der Richter und sein Henker', '2022-03-07', 32),
('Der Sandmann', '2022-03-05', 12),
('Der Schwarm', '2023-07-14', 25),
('Der Schimmelreiter', '2022-05-17', 25),
('Die Blechtrommel', '2022-02-21', 2),
('Die Physiker', '2023-11-01', 45),
('Die unendliche Geschichte', '2023-05-27', 50),
('Die Verwandlung', '2022-07-29', 8),
('Die verlorene Ehre der Katharina Blum', '2022-08-19', 41),
('Die Wand', '2023-04-15', 34),
('Die Vermessung der Welt', '2021-09-10', 35),
('Die unendliche Geschichte', '2023-12-09', 44),
('Die endliche Geschichte', '2023-12-09', 44),
('Schuld und Sühne', '2023-12-09', 44),
( 'Ninja', '2023-09-10', 1),
( 'Green Mile', '2022-09-09', 43),
( 'Mein Freund', '2021-08-09', 37);

INSERT INTO verleihvorgang (buchnummer, kundennummer, rueckgabedatum, ausleihdatum) VALUES
(1, 1, '2024-09-01', '2024-08-01'),
(2, 2, '2024-09-05', '2024-08-05'),
(3, 3, '2024-09-10', '2024-08-10'),
(4, 4, '2024-09-15', '2024-08-15'),
(5, 5, '2024-09-20', '2024-08-20'),
(6, 6, '2024-09-25', '2024-08-25'),
(7, 7, '2024-09-30', '2024-08-30'),
(8, 8, '2024-10-05', '2024-09-05'),
(9, 9, '2024-10-10', '2024-09-10'),
(10, 10, '2024-10-15', '2024-09-15');

INSERT INTO verleihvorgang (buchnummer, kundennummer, ausleihdatum) VALUES
(1, 3, '2024-08-01'),
(4, 2, '2024-08-01'),
(6, 9, '2024-08-01'),
(9, 6, '2024-08-01');


```

### Aufgaben

- Zeige alle Kunden aus Berlin
- Zeige alle Kunden aus allen Städten mit dem Anfangsbuchstaben „B“.
- Zeige alle Kunden aus Städten mit dem 3. Buchstaben „N“
- Zeige alle Kunden aus Städten mit dem 2. oder 3. Buchstaben „E“
- Zeige alle Kunden aus Städten, die mit dem Buchstaben „N“ enden
- Zeige alle Bücher von Springer (Verlag)
- Zeige alle Bücher, die nach dem 1 Januar 2023 gekauft wurden
- Zeige alle Kunden, deren Telefonnummer mit '0123' beginnt
- Zeige die Anzahl der Bücher pro Verlag
