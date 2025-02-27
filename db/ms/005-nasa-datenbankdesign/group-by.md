## Aggregatfunktionen, GROUP BY und HAVING in MySQL

### **1. Aggregatfunktionen**
Aggregatfunktionen in MySQL dienen dazu, eine Menge von Datensätzen zu analysieren und zusammengefasste Werte zurückzugeben. Sie werden häufig mit der `GROUP BY`-Klausel verwendet.

#### **Wichtige Aggregatfunktionen:**
- `COUNT(*)` – Zählt die Anzahl der Zeilen in einer Gruppe.
- `SUM(spalte)` – Summiert die Werte einer Spalte.
- `AVG(spalte)` – Berechnet den Durchschnitt der Werte in einer Spalte.
- `MIN(spalte)` – Gibt den kleinsten Wert in einer Spalte zurück.
- `MAX(spalte)` – Gibt den größten Wert in einer Spalte zurück.

**Beispiel:** Anzahl der Astronauten in der Tabelle `astronaut`:
```sql
SELECT COUNT(*) AS anzahl_astronauten FROM astronaut;
```

---

### **2. GROUP BY**
Die `GROUP BY`-Klausel wird verwendet, um Datensätze mit identischen Werten in einer oder mehreren Spalten zu gruppieren. Sie wird oft in Kombination mit Aggregatfunktionen genutzt.

**Syntax:**
```sql
SELECT spalte, Aggregatfunktion(spalte)
FROM tabelle
GROUP BY spalte;
```

**Beispiel:** Anzahl der Astronauten pro Nationalität:
```sql
SELECT nationalitaet, COUNT(*) AS anzahl_astronauten
FROM astronaut
GROUP BY nationalitaet;
```

---

### **3. HAVING**
Die `HAVING`-Klausel wird verwendet, um Gruppen zu filtern, die von `GROUP BY` erstellt wurden. Sie ähnelt `WHERE`, aber `WHERE` kann nicht mit Aggregatfunktionen verwendet werden.

**Syntax:**
```sql
SELECT spalte, Aggregatfunktion(spalte)
FROM tabelle
GROUP BY spalte
HAVING Bedingung;
```

**Beispiel:** Zeige nur Nationalitäten mit mehr als 5 Astronauten:
```sql
SELECT nationalitaet, COUNT(*) AS anzahl_astronauten
FROM astronaut
GROUP BY nationalitaet
HAVING COUNT(*) > 5;
```

---

### **4. Kombination von JOIN, GROUP BY und HAVING**
`GROUP BY` kann mit `JOIN` kombiniert werden, um aggregierte Werte aus mehreren Tabellen zu berechnen.

**Beispiel:** Anzahl der Astronauten pro Mission:
```sql
SELECT m.name AS mission_name, COUNT(ma.astronaut_id) AS astronauten_anzahl
FROM mission m
LEFT JOIN mission_astronaut ma ON m.mission_id = ma.mission_id
GROUP BY m.name
HAVING COUNT(ma.astronaut_id) > 2;
```

Diese Konzepte ermöglichen es, komplexe Abfragen in MySQL effizient durchzuführen und strukturierte Berichte zu erstellen.
