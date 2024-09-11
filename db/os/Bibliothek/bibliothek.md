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


```sql
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
insert into verlag(verlagsname) values("Westermann");


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

insert into buch (titel, anschaffungsdatum, verlagid) values ('Otcom', '1/5/2024', 1);
insert into buch (titel, anschaffungsdatum, verlagid) values ('Flexidy', '4/28/2024', 2);
insert into buch (titel, anschaffungsdatum, verlagid) values ('Zathin', '2/3/2024', 3);

```

```