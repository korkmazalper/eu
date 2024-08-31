DROP DATABASE IF EXISTS weine;

create database IF NOT EXISTS weine
character set utf8;
use weine;

create table weine.tbl_Ausbauarten
(
  AusbauartNr int not null primary key,
  Ausbauart char(40) not null
);

create table weine.tbl_Qualitaet
(
  QualitaetsNr int not null primary key,
  Qualitaet char(40) not null
);

create table weine.tbl_Jahrgang
(
  Jahrgang int not null primary key
);

create table weine.tbl_Anbaugebiet
(
  AnbaugebietsNr int not null primary key,
  Anbaugebiet char(40) not null
);

create table weine.tbl_Menge
(
  Menge float not null primary key
);

create table weine.tbl_Farbe
(
  FarbNr int not null primary key,
  Farbe char(15) not null
);

create table weine.tbl_Weine
(
  WeinNr int not null primary key,
  WeinName char(40) not null, 
  Jahrgang int not null,
  Qualitaet int not null,
  Anbaugebiet int not null,
  Ausbauart int,
  Menge float not null,
  Farbe int not null,
  Preis float not null,
  Kommentar char(200),
  foreign key (Jahrgang) references weine.tbl_Jahrgang (Jahrgang),
  foreign key (Qualitaet) references weine.tbl_Qualitaet (QualitaetsNr),
  foreign key (Anbaugebiet) references weine.tbl_Anbaugebiet (AnbaugebietsNr),
  foreign key (Ausbauart) references weine.tbl_Ausbauarten (AusbauartNr),
  foreign key (Menge) references weine.tbl_Menge (Menge),
  foreign key (Farbe) references weine.tbl_Farbe (FarbNr)
);

insert into weine.tbl_Ausbauarten values (1,'trocken');
insert into weine.tbl_Ausbauarten values (2,'halbtrocken');
insert into weine.tbl_Ausbauarten values (3,'mild');
insert into weine.tbl_Ausbauarten values (4,'feinherb');
insert into weine.tbl_Ausbauarten values (5,'lieblich');

insert into weine.tbl_Qualitaet values (1,'Tafelwein');
insert into weine.tbl_Qualitaet values (2,'QbA');
insert into weine.tbl_Qualitaet values (3,'Kabinett');
insert into weine.tbl_Qualitaet values (4,'Spätlese');
insert into weine.tbl_Qualitaet values (5,'Auslese');
insert into weine.tbl_Qualitaet values (6,'Beerenauslese');
insert into weine.tbl_Qualitaet values (7,'Trockenbeerenauslese');
insert into weine.tbl_Qualitaet values (8,'Eiswein');

insert into weine.tbl_Jahrgang values (1992);
insert into weine.tbl_Jahrgang values (1994);
insert into weine.tbl_Jahrgang values (1998);
insert into weine.tbl_Jahrgang values (2000);
insert into weine.tbl_Jahrgang values (2001);
insert into weine.tbl_Jahrgang values (2002);
insert into weine.tbl_Jahrgang values (2003);
			
insert into weine.tbl_Anbaugebiet values (1,'Flohnheimer Bingerberg');
insert into weine.tbl_Anbaugebiet values (2,'Flohnheimer Klostergarten');
insert into weine.tbl_Anbaugebiet values (3,'Flohnheimer Geisterberg');
insert into weine.tbl_Anbaugebiet values (4,'Flohnheimer Rotenpfad');
			
insert into weine.tbl_Menge values (0.375);
insert into weine.tbl_Menge values (0.5);
insert into weine.tbl_Menge values (0.75);
insert into weine.tbl_Menge values (1.0);
			
insert into weine.tbl_Farbe values (1,'Rotwein');
insert into weine.tbl_Farbe values (2,'Weißherbst');
insert into weine.tbl_Farbe values (3,'Weißwein');

/*
insert into tbl_Weine values (1,'Portugieser',2000,1,1,1,1.0,3.10,1,'vollmundig');
insert into tbl_Weine values (2,'Huxelrebe',2002,4,3,null,0.75,3.80,3,'frisch und geheltvoll');
insert into tbl_Weine
  (WeinNr, WeinName, Jahrgang, Qualitaet, Anbaugebiet, Menge,
   Preiss, Farbe, Kommentar)
   values (3,'Huxelrebe',2002,4,3,0.75,3.80,3,'frisch und geheltvoll');

*/

insert into weine.tbl_Weine values (1,'Portugieser',2000,2,1,2,1.0,1,3.1,'vollmundig');
insert into weine.tbl_Weine values (2,'Portugieser',2002,2,1,2,1.0,1,3.1,'vollmundig');
insert into weine.tbl_Weine values (3,'Saint Laurent',2002,4,2,1,0.75,1,4.0,'frisch, pikant');
insert into weine.tbl_Weine values (4,'Portugieser',2001,1,1,2,0.75,2,3.0,'voll Duft und Harmonie');
insert into weine.tbl_Weine values (5,'Portugieser',2002,1,1,2,0.75,2,3.0,'voll Duft und Harmonie');
insert into weine.tbl_Weine values (6,'Portugieser',2002,1,1,3,0.75,1,3.1,'reich an Geschmack');
insert into weine.tbl_Weine values (7,'Dornfelder',2002,1,1,1,0.75,1,3.5,'feurig, wunderbare Fruchtnote');
insert into weine.tbl_Weine values (8,'Dornfelder',2002,1,1,2,0.75,1,3.5,'rassig');
insert into weine.tbl_Weine values (9,'Spätburgunder',2002,1,1,3,0.75,1,4.0,'kräftig, ausdrucksvoll');

insert into weine.tbl_Weine values (10,'Müller-Thurgau u. Scheurebe',2000,1,3,1,1.0,3,2.6,'harmonisch und spritzig');
insert into weine.tbl_Weine values (11,'Weißer Burgunder',2000,3,4,1,0.75,3,3.2,'angenehm edel');
insert into weine.tbl_Weine values (12,'Weißer Burgunder',2002,3,4,1,0.75,3,3.2,'angenehm edel');
insert into weine.tbl_Weine values (13,'Silvaner Classic',2001,1,1,1,0.75,3,3.5,'fein, spritzig, elegant');
insert into weine.tbl_Weine values (14,'Riesling Classic',2001,1,1,4,0.75,3,3.5,'anspruchsvoll kernig');
insert into weine.tbl_Weine values (15,'Riesling',2000,3,3,2,0.75,3,3.2,'spritzig, feine Frucht');
insert into weine.tbl_Weine values (16,'Faberrebe',2001,3,2,2,1.0,3,2.6,'ein leichter, fruchtiger Wein');
insert into weine.tbl_Weine values (17,'Kerner',2001,4,2,1,0.75,3,3.8,'ein frischer Wein');
insert into weine.tbl_Weine values (18,'Chardonnay',2001,2,1,1,0.75,3,3.2,'frisch und spritzig');
insert into weine.tbl_Weine values (19,'Grauer Burgunder',2001,2,1,1,0.75,3,3.2,'gehaltvoll und rassig mit feiner Frucht');
insert into weine.tbl_Weine values (20,'Scheurebe',2001,3,3,5,0.75,3,3.0,'süffig');
insert into weine.tbl_Weine values (21,'Würzer',2001,3,1,5,0.75,3,3.0,'volles Bukett');
insert into weine.tbl_Weine values (22,'Bacchus',2001,3,1,5,0.75,3,3.0,'viel Frucht');
insert into weine.tbl_Weine values (23,'Huxelrebe',2002,4,3,null,0.75,3,3.8,'frisch und gehaltvoll');
insert into weine.tbl_Weine values (24,'Riesling',2002,4,3,null,0.75,3,3.8,'feine Blume, duftig und würzig');
insert into weine.tbl_Weine values (25,'Kerner',2002,4,2,null,0.75,3,3.8,'feine Reife, voll Duft und Harmonie');
insert into weine.tbl_Weine values (26,'Ortega',2000,5,1,null,0.75,3,4.9,'ausdrucksvoll und kräftig');
insert into weine.tbl_Weine values (27,'Kerner',2002,5,2,null,0.75,3,4.9,'für jene, die das Besondere lieben');
insert into weine.tbl_Weine values (28,'Riesling',2001,5,3,1,0.5,3,4.1,'eine seltene Rarität');
insert into weine.tbl_Weine values (29,'Huxelrebe "Jungfernwein"',1992,6,3,null,0.5,3,9.2,
                              '135° Oechsle, Ein Wein, mit Worten kaum zu beschreiben, man kann ihn nur genießen');
insert into weine.tbl_Weine values (30,'Ortega',1994,7,1,null,0.375,3,19.5,
                              '160° Oechsle, eine besondere Rarität und ein Jahrhundertwein');
insert into weine.tbl_Weine values (31,'Silvaner',1998,8,1,null,0.375,3,13.0,
                              '143° Oechsle, eine Rarität besonderer Art');
insert into weine.tbl_Weine values (32,'Riesling',2001,8,3,null,0.75,3,23.0,'138° Oechsle, ein edler Wein');
insert into weine.tbl_Weine values (33,'Riesling',2001,8,3,null,0.375,3,13.0,'138° Oechsle, ein edler Wein');

/*
drop table tbl_Kunden;
drop table tbl_Orte;
drop table tbl_Bundeslaender;
*/

create table weine.tbl_Bundeslaender
(
  BundeslandNr int not null primary key, 
  Bundesland char(40) not null
);

create table weine.tbl_Orte
(
  OrtsNr int not null primary key,
  PLZ char(5) not null,
  Ort char(40) not null,
  BundeslandNr int not null, 
  foreign key (BundeslandNr) references weine.tbl_Bundeslaender (BundeslandNr)
);

create table weine.tbl_Kunden
(
  KundenNr int not null primary key,
  Vorname char(40) not null,
  Nachname char(40) not null,
  Strasse char(40) not null, 
  Ort int not null,
  foreign key (Ort) references weine.tbl_Orte (OrtsNr)
);

insert into weine.tbl_Bundeslaender values (1,'Thüringen');
insert into weine.tbl_Bundeslaender values (2,'Sachsen');
insert into weine.tbl_Bundeslaender values (3,'Hessen');
insert into weine.tbl_Bundeslaender values (4,'Berlin');
insert into weine.tbl_Bundeslaender values (5,'Schleswig-Holstein');
insert into weine.tbl_Bundeslaender values (6,'Mecklenburg-Vorpommern');
insert into weine.tbl_Bundeslaender values (7,'Hamburg');
insert into weine.tbl_Bundeslaender values (8,'Bremen');
insert into weine.tbl_Bundeslaender values (9,'Brandenburg');
insert into weine.tbl_Bundeslaender values (10,'Nordrhein-Westfalen');
insert into weine.tbl_Bundeslaender values (11,'Sachsen-Anhalt');
insert into weine.tbl_Bundeslaender values (12,'Rheinland-Pfalz');
insert into weine.tbl_Bundeslaender values (13,'Saarland');
insert into weine.tbl_Bundeslaender values (14,'Baden-Württemberg');
insert into weine.tbl_Bundeslaender values (15,'Bayern');
insert into weine.tbl_Bundeslaender values (16,'Niedersachsen');

insert into weine.tbl_Orte values(1,'07639','Bad Klosterlausnitz',1);
insert into weine.tbl_Orte values(2,'07629','Hermsdorf',1);
insert into weine.tbl_Orte values(3,'07629','Schleifreisen',1);
insert into weine.tbl_Orte values(4,'07549','Gera',1);
insert into weine.tbl_Orte values(5,'07547','Gera',1);
insert into weine.tbl_Orte values(6,'07740','Jena',1);
insert into weine.tbl_Orte values(7,'07743','Jena',1);
insert into weine.tbl_Orte values(8,'09111','Chemmnitz',2);
insert into weine.tbl_Orte values(9,'08056','Zwickau',2);
insert into weine.tbl_Orte values(10,'01326','Dresden',2);
insert into weine.tbl_Orte values(11,'90425','Nürnberg',15);
insert into weine.tbl_Orte values(12,'65185','Wiesbaden',3);
insert into weine.tbl_Orte values(13,'05365','Calw',14);
insert into weine.tbl_Orte values(14,'06108','Halle',11);
insert into weine.tbl_Orte values(15,'06618','Naumburg',11);

insert into weine.tbl_Kunden values (1,'Werner','Lange','Waldweg 3',1);
insert into weine.tbl_Kunden values (2,'Susi','Kurz','Feldweg 5',2);
insert into weine.tbl_Kunden values (3,'Otto','Birnbaum','Dorfstr. 67',3);
insert into weine.tbl_Kunden values (4,'Frank','Plötner','Bahnhofstraße 29',2);
insert into weine.tbl_Kunden values (5,'Jana','Wunderlich','Am Theater',4);
insert into weine.tbl_Kunden values (6,'Annette','Walter','Lindenplatz 69',5);
insert into weine.tbl_Kunden values (7,'Peter','Hunger','An der Keksrolle 23',6);
insert into weine.tbl_Kunden values (8,'Hans','Rumpel','Am Rundweg',9);
insert into weine.tbl_Kunden values (9,'Elke','Fuchs','Karl Marx Allee 87',8);
insert into weine.tbl_Kunden values (10,'Petra','Scharf','Burggraben 43',11);
insert into weine.tbl_Kunden values (11,'Kathrin','Bitter','Schwarzwaldweg 2',13);
insert into weine.tbl_Kunden values (12,'Dieter','Wind','Domstraße 1',15);
insert into weine.tbl_Kunden values (13,'Frank','Müller','Am Ufer 9',12);
insert into weine.tbl_Kunden values (14,'Ramona','Müller','Zwingerweg 8',10);
insert into weine.tbl_Kunden values (15,'Sandra','Münch','Am Kurpark 7',1);

/*
drop table tbl_Rechnungen;
*/
create table weine.tbl_Rechnungen
(
  RechnungsNr char(20) not null primary key,
  RechnungsDatum date not null,
  KundenNr int not null,
  foreign key (KundenNr) references weine.tbl_Kunden (KundenNr)
);
/*
drop table tbl_Rechnungsdetails;
*/
create table weine.tbl_RechnungsDetails
(
  RechnungsNr char(20) not null,
  WeinNr int not null,
  Pos int not null,
  Anzahl int not null,
  Preis float not null,
  primary key (RechnungsNr, WeinNr),
  foreign key (RechnungsNr) references weine.tbl_Rechnungen (RechnungsNr),
  foreign key (WeinNr) references weine.tbl_Weine (WeinNr)
);

/* Rechnungsdaten */

insert into weine.tbl_Rechnungen values ('000103','2003-07-02',1);
insert into weine.tbl_Rechnungsdetails values ('000103',1,1,2,3.1);
insert into weine.tbl_Rechnungsdetails values ('000103',7,2,2,3.5);
insert into weine.tbl_Rechnungsdetails values ('000103',8,3,2,3.5);
insert into weine.tbl_Rechnungsdetails values ('000103',9,4,2,4.0);

insert into weine.tbl_Rechnungen values ('000203','2003-07-02',6);
insert into weine.tbl_Rechnungsdetails values ('000203',17,1,6,3.8);
insert into weine.tbl_Rechnungsdetails values ('000203',23,2,12,3.8);
insert into weine.tbl_Rechnungsdetails values ('000203',27,3,24,4.9);

insert into weine.tbl_Rechnungen values ('000303','2003-07-09',13);
insert into weine.tbl_Rechnungsdetails values ('000303',7,1,2,3.1);
insert into weine.tbl_Rechnungsdetails values ('000303',14,2,12,3.5);
insert into weine.tbl_Rechnungsdetails values ('000303',28,3,12,4.1);

insert into weine.tbl_Rechnungen values ('000403','2003-07-12',8);
insert into weine.tbl_Rechnungsdetails values ('000403',10,1,12,2.6);
insert into weine.tbl_Rechnungsdetails values ('000403',13,2,24,3.5);
insert into weine.tbl_Rechnungsdetails values ('000403',14,3,12,3.5);
insert into weine.tbl_Rechnungsdetails values ('000403',33,4,1,13.0);

insert into weine.tbl_Rechnungen values ('000503','2003-07-23',3);
insert into weine.tbl_Rechnungsdetails values ('000503',7,1,1,3.5);
insert into weine.tbl_Rechnungsdetails values ('000503',9,2,1,4.0);
insert into weine.tbl_Rechnungsdetails values ('000503',19,3,1,3.2);

insert into weine.tbl_Rechnungen values ('000603','2003-07-28',6);
insert into weine.tbl_Rechnungsdetails values ('000603',27,1,24,4.9);

insert into weine.tbl_Rechnungen values ('000703','2003-08-04',5);
insert into weine.tbl_Rechnungsdetails values ('000703',3,1,2,4.0);
insert into weine.tbl_Rechnungsdetails values ('000703',9,2,2,4.0);
insert into weine.tbl_Rechnungsdetails values ('000703',14,3,2,3.5);
insert into weine.tbl_Rechnungsdetails values ('000703',19,4,6,3.2);
insert into weine.tbl_Rechnungsdetails values ('000703',28,5,2,4.1);
insert into weine.tbl_Rechnungsdetails values ('000703',29,6,2,9.2);

insert into weine.tbl_Rechnungen values ('000803','2003-08-25',2);
insert into weine.tbl_Rechnungsdetails values ('000803',23,1,2,3.8);
insert into weine.tbl_Rechnungsdetails values ('000803',24,2,2,3.8);
insert into weine.tbl_Rechnungsdetails values ('000803',25,3,2,3.8);

insert into weine.tbl_Rechnungen values ('000903','2003-08-28',4);
insert into weine.tbl_Rechnungsdetails values ('000903',4,1,3,3.0);
insert into weine.tbl_Rechnungsdetails values ('000903',5,2,3,3.0);
insert into weine.tbl_Rechnungsdetails values ('000903',11,3,3,3.2);
insert into weine.tbl_Rechnungsdetails values ('000903',12,4,3,3.2);

insert into weine.tbl_Rechnungen values ('001003','2003-08-31',2);
insert into weine.tbl_Rechnungsdetails values ('001003',23,1,12,3.8);
insert into weine.tbl_Rechnungsdetails values ('001003',24,2,12,3.8);
insert into weine.tbl_Rechnungsdetails values ('001003',25,3,12,3.8);

insert into weine.tbl_Rechnungen values ('001103','2003-08-31',11);
insert into weine.tbl_Rechnungsdetails values ('001103',18,1,6,3.2);
insert into weine.tbl_Rechnungsdetails values ('001103',26,2,6,4.9);
insert into weine.tbl_Rechnungsdetails values ('001103',4,3,12,3.0);

insert into weine.tbl_Rechnungen values ('001203','2003-09-03',7);
insert into weine.tbl_Rechnungsdetails values ('001203',21,1,12,3.0);

insert into weine.tbl_Rechnungen values ('001303','2003-09-14',15);
insert into weine.tbl_Rechnungsdetails values ('001303',9,1,12,4.0);
insert into weine.tbl_Rechnungsdetails values ('001303',18,2,12,3.0);

insert into weine.tbl_Rechnungen values ('001403','2003-09-21',1);
insert into weine.tbl_Rechnungsdetails values ('001403',8,1,12,3.5);
insert into weine.tbl_Rechnungsdetails values ('001403',9,2,12,4.0);

insert into weine.tbl_Rechnungen values ('001503','2003-09-27',3);
insert into weine.tbl_Rechnungsdetails values ('001503',9,1,12,4.0);
insert into weine.tbl_Rechnungsdetails values ('001503',25,2,3,4.9);
insert into weine.tbl_Rechnungsdetails values ('001503',26,3,3,4.9);

insert into weine.tbl_Rechnungen values ('001603','2003-10-03',6);
insert into weine.tbl_Rechnungsdetails values ('001603',17,1,6,3.8);
insert into weine.tbl_Rechnungsdetails values ('001603',23,2,6,3.8);

insert into weine.tbl_Rechnungen values ('001703','2003-10-05',13);
insert into weine.tbl_Rechnungsdetails values ('001703',7,1,12,3.5);

insert into weine.tbl_Rechnungen values ('001803','2003-10-05',8);
insert into weine.tbl_Rechnungsdetails values ('001803',13,1,6,3.5);
insert into weine.tbl_Rechnungsdetails values ('001803',14,2,6,3.5);
insert into weine.tbl_Rechnungsdetails values ('001803',18,3,12,3.2);

insert into weine.tbl_Rechnungen values ('001903','2003-12-08',4);
insert into weine.tbl_Rechnungsdetails values ('001903',27,1,6,4.9);
insert into weine.tbl_Rechnungsdetails values ('001903',29,2,4,9.2);
insert into weine.tbl_Rechnungsdetails values ('001903',30,3,2,19.5);

insert into weine.tbl_Rechnungen values ('002003','2003-12-09',9);
insert into weine.tbl_Rechnungsdetails values ('002003',33,1,4,13.0);

insert into weine.tbl_Rechnungen values ('002103','2003-12-14',11);
insert into weine.tbl_Rechnungsdetails values ('002103',04,1,12,3.0);
insert into weine.tbl_Rechnungsdetails values ('002103',27,2,2,4.9);
insert into weine.tbl_Rechnungsdetails values ('002103',29,3,4,9.2);
insert into weine.tbl_Rechnungsdetails values ('002103',31,4,2,13.0);
insert into weine.tbl_Rechnungsdetails values ('002103',32,5,1,23.0);

insert into weine.tbl_Rechnungen values ('002203','2003-12-14',1);
insert into weine.tbl_Rechnungsdetails values ('002203',01,1,12,3.1);       
insert into weine.tbl_Rechnungsdetails values ('002203',07,2,12,3.5);
insert into weine.tbl_Rechnungsdetails values ('002203',08,3,12,3.5);

insert into weine.tbl_Rechnungen values ('002303','2003-12-16',12);
insert into weine.tbl_Rechnungsdetails values ('002303',01,1,2,3.1);
insert into weine.tbl_Rechnungsdetails values ('002303',03,2,2,4.0);
insert into weine.tbl_Rechnungsdetails values ('002303',07,3,2,3.5);
insert into weine.tbl_Rechnungsdetails values ('002303',08,4,2,3.5);
insert into weine.tbl_Rechnungsdetails values ('002303',09,5,2,4.0);
insert into weine.tbl_Rechnungsdetails values ('002303',14,6,2,3.5);

insert into weine.tbl_Rechnungen values ('002403','2003-12-16',6);
insert into weine.tbl_Rechnungsdetails values ('002403',17,1,6,3.8);
insert into weine.tbl_Rechnungsdetails values ('002403',24,2,6,3.8);
insert into weine.tbl_Rechnungsdetails values ('002403',25,3,2,9.2);
insert into weine.tbl_Rechnungsdetails values ('002403',30,4,2,19.5);

insert into weine.tbl_Rechnungen values ('002503','2003-12-17',13);
insert into weine.tbl_Rechnungsdetails values ('002503',02,1,24,3.5);

insert into weine.tbl_Rechnungen values ('002603','2003-12-17',8);
insert into weine.tbl_Rechnungsdetails values ('002603',32,1,1,23.0);
insert into weine.tbl_Rechnungsdetails values ('002603',33,2,2,13.0);

insert into weine.tbl_Rechnungen values ('002703','2003-12-18',2);
insert into weine.tbl_Rechnungsdetails values ('002703',13,1,6,3.5);
insert into weine.tbl_Rechnungsdetails values ('002703',14,2,6,3.5);
insert into weine.tbl_Rechnungsdetails values ('002703',31,3,1,13.0);
insert into weine.tbl_Rechnungsdetails values ('002703',26,4,3,4.9);

insert into weine.tbl_Rechnungen values ('002803','2003-12-29',14);
insert into weine.tbl_Rechnungsdetails values ('002803',08,1,12,3.5);
insert into weine.tbl_Rechnungsdetails values ('002803',23,2,12,3.8);

insert into weine.tbl_Rechnungen values ('002903','2003-12-29',5);
insert into weine.tbl_Rechnungsdetails values ('002903',1,1,6,3.1);
insert into weine.tbl_Rechnungsdetails values ('002903',7,2,6,3.5);
insert into weine.tbl_Rechnungsdetails values ('002903',10,3,6,2.6);
insert into weine.tbl_Rechnungsdetails values ('002903',22,4,6,3.0);

insert into weine.tbl_Rechnungen values ('003003','2003-12-29',15);
insert into weine.tbl_Rechnungsdetails values ('003003',9,1,12,4.0);
insert into weine.tbl_Rechnungsdetails values ('003003',18,2,12,3.0);

insert into weine.tbl_Rechnungen values ('003103','2003-12-29',3);
insert into weine.tbl_Rechnungsdetails values ('003103',7,1,6,3.5);
insert into weine.tbl_Rechnungsdetails values ('003103',9,2,18,4.0);
insert into weine.tbl_Rechnungsdetails values ('003103',33,3,1,13.0);

insert into weine.tbl_Rechnungen values ('003203','2003-12-30',11);
insert into weine.tbl_Rechnungsdetails values ('003203',3,1,12,4.0);
insert into weine.tbl_Rechnungsdetails values ('003203',20,2,6,3.0);
insert into weine.tbl_Rechnungsdetails values ('003203',13,3,6,3.5);

insert into weine.tbl_Rechnungen values ('003303','2003-12-30',7);
insert into weine.tbl_Rechnungsdetails values ('003303',11,1,12,3.2);
insert into weine.tbl_Rechnungsdetails values ('003303',14,2,12,3.5);

insert into weine.tbl_Rechnungen values ('000104','2004-01-22',2);
insert into weine.tbl_Rechnungsdetails values ('000104',25,1,12,3.8);

insert into weine.tbl_Rechnungen values ('000204','2004-01-26',4);
insert into weine.tbl_Rechnungsdetails values ('000204',4,1,6,3.0);
insert into weine.tbl_Rechnungsdetails values ('000204',5,2,6,3.0);
insert into weine.tbl_Rechnungsdetails values ('000204',11,3,6,3.2);
insert into weine.tbl_Rechnungsdetails values ('000204',12,4,6,3.2);

insert into weine.tbl_Rechnungen values ('000304','2004-02-02',6);
insert into weine.tbl_Rechnungsdetails values ('000304',17,1,6,3.8);
insert into weine.tbl_Rechnungsdetails values ('000304',23,2,6,3.8);
insert into weine.tbl_Rechnungsdetails values ('000304',25,3,12,3.8);

insert into weine.tbl_Rechnungen values ('000404','2004-02-05',11);
insert into weine.tbl_Rechnungsdetails values ('000404',4,1,12,3.0);
insert into weine.tbl_Rechnungsdetails values ('000404',15,2,6,3.2);
insert into weine.tbl_Rechnungsdetails values ('000404',24,3,6,3.8);
insert into weine.tbl_Rechnungsdetails values ('000404',28,4,6,4.1);

insert into weine.tbl_Rechnungen values ('000504','2004-02-25',10);
insert into weine.tbl_Rechnungsdetails values ('000504',2,1,1,3.1);
insert into weine.tbl_Rechnungsdetails values ('000504',3,2,1,4.0);
insert into weine.tbl_Rechnungsdetails values ('000504',7,3,2,3.5);
insert into weine.tbl_Rechnungsdetails values ('000504',8,4,2,3.5);
insert into weine.tbl_Rechnungsdetails values ('000504',9,5,2,4.0);
insert into weine.tbl_Rechnungsdetails values ('000504',13,6,1,3.5);
insert into weine.tbl_Rechnungsdetails values ('000504',14,7,1,3.5);
insert into weine.tbl_Rechnungsdetails values ('000504',17,8,1,3.8);
insert into weine.tbl_Rechnungsdetails values ('000504',18,9,2,3.2);
insert into weine.tbl_Rechnungsdetails values ('000504',22,10,2,3.0);
insert into weine.tbl_Rechnungsdetails values ('000504',27,11,2,4.9);
insert into weine.tbl_Rechnungsdetails values ('000504',30,12,1,19.5);

insert into weine.tbl_Rechnungen values ('000604','2004-03-01',1);
insert into weine.tbl_Rechnungsdetails values ('000604',8,1,12,3.5);
insert into weine.tbl_Rechnungsdetails values ('000604',9,2,12,4.0);

insert into weine.tbl_Rechnungen values ('000704','2004-03-05',15);
insert into weine.tbl_Rechnungsdetails values ('000704',9,1,24,4.0);

insert into weine.tbl_Rechnungen values ('000804','2004-03-09',8);
insert into weine.tbl_Rechnungsdetails values ('000804',12,1,3,3.5);
insert into weine.tbl_Rechnungsdetails values ('000804',14,2,3,3.5);
insert into weine.tbl_Rechnungsdetails values ('000804',22,3,6,3.0);

insert into weine.tbl_Rechnungen values ('000904','2004-03-18',14);
insert into weine.tbl_Rechnungsdetails values ('000904',8,1,12,3.5);
insert into weine.tbl_Rechnungsdetails values ('000904',23,2,12,3.8);

insert into weine.tbl_Rechnungen values ('001004','2004-03-19',15);
insert into weine.tbl_Rechnungsdetails values ('001004',9,1,24,4.0);

insert into weine.tbl_Rechnungen values ('001104','2004-03-27',9);
insert into weine.tbl_Rechnungsdetails values ('001104',2,1,2,3.1);
insert into weine.tbl_Rechnungsdetails values ('001104',7,2,2,3.5);
insert into weine.tbl_Rechnungsdetails values ('001104',13,3,2,3.5);

insert into weine.tbl_Rechnungen values ('001204','2004-04-07',3);
insert into weine.tbl_Rechnungsdetails values ('001204',19,1,12,3.2);

insert into weine.tbl_Rechnungen values ('001304','2004-04-09',5);
insert into weine.tbl_Rechnungsdetails values ('001304',9,1,12,4.0);
insert into weine.tbl_Rechnungsdetails values ('001304',19,2,12,3.2);

insert into weine.tbl_Rechnungen values ('001404','2004-04-12',12);
insert into weine.tbl_Rechnungsdetails values ('001404',7,1,12,3.5);
insert into weine.tbl_Rechnungsdetails values ('001404',8,2,12,3.5);

insert into weine.tbl_Rechnungen values ('001504','2004-04-20',6);
insert into weine.tbl_Rechnungsdetails values ('001504',17,1,6,3.8);
insert into weine.tbl_Rechnungsdetails values ('001504',23,2,6,3.8);
insert into weine.tbl_Rechnungsdetails values ('001504',24,3,6,3.8);
insert into weine.tbl_Rechnungsdetails values ('001504',25,4,6,3.8);


-- commit work;
