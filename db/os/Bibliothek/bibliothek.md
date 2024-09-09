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
