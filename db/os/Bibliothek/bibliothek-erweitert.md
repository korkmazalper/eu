## Erweiterte Bibliothek-Datenbank

Um Redundanzen zu vermeiden, legen Sie eine neue Tabelle `Adresse` an und verknüpfen diese mit der Kundentabelle.


























```sql
CREATE TABLE adresse (
adresse_id INT PRIMARY KEY AUTO_INCREMENT,
strasse VARCHAR(100) NOT NULL,
hausnummer VARCHAR(50) NOT NULL,
stadt_name VARCHAR(100) NOT NULL,
plz VARCHAR(10) NOT NULL
);

CREATE TABLE kunde (
kunde_id INT PRIMARY KEY AUTO_INCREMENT,
vorname VARCHAR(50) NOT NULL,
nachname VARCHAR(50) NOT NULL,
adresse_id INT,
FOREIGN KEY (adresse_id) REFERENCES adresse(adresse_id)
);

```
