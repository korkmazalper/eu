# Left Join Aufgaben

- Liste aller Raumschiffe und ihrer zugehörigen Missionen Listen Sie alle Raumschiffe mit ihren Missionen auf. Zeigen Sie auch Raumschiffe an, die keiner Mission zugeordnet sind.

```sql
SELECT 
    r.name  vehicle_name,
    r.typ  vehicle_type,
    m.name  mission_name
FROM raumschiff_fahrzeug r
LEFT JOIN mission  m
ON r.raumschiff_fahrzeug_id = m.raumschiff_fahrzeug_id
ORDER BY m.name;

```

- Zeigen Sie alle Astronauten und die Namen der Missionen an, an denen sie teilnehmen. Astronauten ohne Mission sollen ebenfalls angezeigt werden.

```sql
SELECT 
    a.vorname first_name,
    a.nachname last_name,
    a.flugstunde flight_hours,
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
    r.name vehicle_name,
    r.typ vehicle_type
FROM raumschiff_fahrzeug r
LEFT JOIN mission m
ON r.raumschiff_fahrzeug_id = m.raumschiff_fahrzeug_id
WHERE m.raumschiff_fahrzeug_id IS NULL
ORDER BY r.name;
```
- Listen Sie die Namen und Ausbildungsstufen der Astronauten auf, die keiner Mission zugeordnet sind.

```sql
SELECT 
    a.vorname  first_name,
    a.nachname  last_name,
    a.ausbildungs_stufe training_level
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
    r.name vehicle_name
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