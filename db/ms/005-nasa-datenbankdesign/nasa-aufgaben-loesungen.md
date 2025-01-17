## **INNER JOIN Aufgaben und Lösungen - Nasa Datenbank**

1. **Liste alle Missionen und die Namen der zugehörigen Raumschiffe.**
   ```sql
   SELECT m.name mission, r.name raumschiff
   FROM mission AS m
   INNER JOIN raumschiff_fahrzeug AS r 
   ON m.raumschiff_fahrzeug_id = r.raumschiff_fahrzeug_id;
   ```

2. **Zeige die Namen aller Astronauten zusammen mit der Mission "Galileo Orbiter"**
   ```sql
   SELECT m.name mission, a.vorname astronaut_vorname, a.nachname astronaut_nachname
   FROM astronaut  a
   INNER JOIN mission_astronaut  ma ON a.astronaut_id = ma.astronaut_id
   INNER JOIN mission m ON ma.mission_id = m.mission_id
   WHERE m.name="Galileo Orbiter";
   ```
3. **Liste alle Astronauten, die an Missionen teilgenommen haben, sortiert nach Nachnamen.**
   ```sql
   SELECT DISTINCT a.vorname, a.nachname
   FROM astronaut a
   INNER JOIN mission_astronaut ma ON a.astronaut_id = ma.astronaut_id
   ORDER BY a.nachname;
   ```

4. **Zeige die Raumschiffe, die vor 1990 hergestellt wurden, zusammen mit den Missionen.**
   ```sql
   SELECT r.name raumschiff_name, r.herstellungsjahr, m.name mission_name
   FROM raumschiff_fahrzeug r
   INNER JOIN mission m 
   ON r.raumschiff_fahrzeug_id = m.raumschiff_fahrzeug_id
   WHERE r.herstellungsjahr < 1990;
   ```

5. **Liste die Astronauten auf, deren Flugstunden `150, 250, 350`sind.**
   ```sql
   SELECT a.vorname, a.nachname, a.flugstunde
   FROM astronaut AS a
   WHERE a.flugstunde IN (150, 250, 350);
   ```

6. **Finde alle Missionen, bei denen das Ziel "Space" enthält.**
   ```sql
   SELECT m.name AS mission_name, m.ziel
   FROM mission AS m
   WHERE m.ziel LIKE '%Space%';
   ```
7. **Zeige die Astronauten, die NICHT an Missionen teilgenommen haben.**
    ```sql
    SELECT a.vorname, a.nachname
    FROM astronaut AS a
    WHERE a.astronaut_id NOT IN (
       SELECT ma.astronaut_id FROM mission_astronaut AS ma
    );
    ```

8. **Liste alle Raumschiffe, deren Kapazität mehr als 10 beträgt, zusammen mit den Missionsnamen.**
    ```sql
    SELECT r.name AS raumschiff_name, r.kapasitaet, m.name AS mission_name
    FROM raumschiff_fahrzeug AS r
    INNER JOIN mission AS m 
    ON r.raumschiff_fahrzeug_id = m.raumschiff_fahrzeug_id
    WHERE r.kapasitaet > 10;
    ```
9. **Liste die Missionen und Astronauten, deren Flugstunden zwischen 200 und 400 liegen. 
   Sortiere die Datensätze nach flugstunde absteigend**
    ```sql
    SELECT a.vorname, a.nachname, a.flugstunde, m.name mission_name
    FROM astronaut a
    INNER JOIN mission_astronaut ma ON a.astronaut_id = ma.astronaut_id
    INNER JOIN mission m ON ma.mission_id = m.mission_id
    WHERE a.flugstunde BETWEEN 200 AND 400
    ORDER BY a.flugstunde DESC;
    ```
10. **Zeige alle Missionen, die zwischen 2015 und 2020 gestartet wurden, zusammen mit den Astronauten.**
    ```sql
    SELECT m.name mission_name, m.startdate, a.vorname, a.nachname
    FROM mission m
    INNER JOIN mission_astronaut ma ON m.mission_id = ma.mission_id
    INNER JOIN astronaut a ON ma.astronaut_id = a.astronaut_id
    WHERE m.startdate BETWEEN '2015-01-01' AND '2020-12-31';
    ```

11. **Liste Astronauten und Missionen, deren Ziel "Jupiter" oder "Saturn" ist.**
    ```sql
    SELECT a.vorname, a.nachname, m.name mission_name, m.ziel
    FROM astronaut a
    INNER JOIN mission_astronaut ma ON a.astronaut_id = ma.astronaut_id
    INNER JOIN mission m ON ma.mission_id = m.mission_id
    WHERE m.ziel IN ('Jupiter', 'Saturn');
    ```
    
# Left Join Aufgaben

- Liste aller Raumschiffe und ihrer zugehörigen Missionen Listen Sie alle Raumschiffe mit ihren Missionen auf. Zeigen Sie auch Raumschiffe an, die keiner Mission zugeordnet sind.

```sql
SELECT 
    r.name  fahrzeug_name,
    r.typ  fahrzeug_type,
    m.name  mission_name
FROM raumschiff_fahrzeug r
LEFT JOIN mission  m
ON r.raumschiff_fahrzeug_id = m.raumschiff_fahrzeug_id
ORDER BY m.name;

```

- Zeigen Sie alle Astronauten und die Namen der Missionen an, an denen sie teilnehmen. Astronauten ohne Mission sollen ebenfalls angezeigt werden.

```sql
SELECT 
    a.vorname,
    a.nachname,
    a.flugstunde,
    m.name  mission_name
FROM astronaut a
LEFT JOIN mission_astronaut  ma
ON a.astronaut_id = ma.astronaut_id
LEFT JOIN mission m 
ON ma.mission_id = m.mission_id
ORDER BY m.name;

```

- Listen Sie die Namen und Typen der Raumschiffe auf, die keiner Mission zugeordnet sind.

```sql
SELECT 
    r.name fahrzeug,
    r.typ fahrzeugtyp
FROM raumschiff_fahrzeug r
LEFT JOIN mission m
ON r.raumschiff_fahrzeug_id = m.raumschiff_fahrzeug_id
WHERE m.raumschiff_fahrzeug_id IS NULL
ORDER BY r.name;
```
- Listen Sie die Namen und Ausbildungsstufen der Astronauten auf, die keiner Mission zugeordnet sind.

```sql
SELECT 
    a.vorname,
    a.nachname,
    a.ausbildungs_stufe
FROM astronaut a
LEFT JOIN mission_astronaut ma 
ON a.astronaut_id = ma.astronaut_id
WHERE ma.mission_id IS NULL
ORDER BY a.vorname;

```

- Zeigen Sie die Namen der Missionen und die zugehörigen Raumschiffe an. Missionen ohne zugeordnetes Raumschiff sollen ebenfalls angezeigt werden.

```sql
SELECT 
    m.name mission_name,
    r.name fahrzeug_name
FROM mission m
LEFT JOIN raumschiff_fahrzeug  r
ON m.raumschiff_fahrzeug_id = r.raumschiff_fahrzeug_id
ORDER BY m.name;

```

- Listen Sie die Missionen und die Namen der daran teilnehmenden Astronauten auf. Missionen ohne Teilnehmer sollen ebenfalls angezeigt werden.

```sql
SELECT 
    m.name mission_name,
    CONCAT(a.vorname, ' ', a.nachname) astronaut_name
FROM mission m
LEFT JOIN mission_astronaut ma
ON m.mission_id = ma.mission_id
LEFT JOIN astronaut a
ON ma.astronaut_id = a.astronaut_id
ORDER BY m.name
LIMIT 100;

```