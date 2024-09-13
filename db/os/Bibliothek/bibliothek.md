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
