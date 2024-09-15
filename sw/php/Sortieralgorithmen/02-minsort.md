# Minsort Algorithmus

##

Schreiben Sie eine PHP-Funktion, die ein Array mit zufälligen Ganzzahlen erstellt und zurückgibt, dessen Elemente eindeutig sind und die Länge und den Bereich der als Parameter übergebenen Zahlen haben.

```php
function createRandomArrayWithUniqueElements($lengthOfArray, $minNumber, $maxNumber) {
...
}
```

## Algorithmus

Nehmen wir ein Array mit 5 Elementen als Beispiel:

```
[5, 2, 4, 1, 3]

```

1. Suche das kleinste Element:

Wir durchsuchen das gesamte Array und finden die kleinste Zahl. In unserem Beispiel ist das die 1.

2. Tausche das kleinste Element:
   Wir tauschen die 1 mit dem ersten Element (der 5) im Array.
   Das Array sieht jetzt so aus: `[1, 2, 4, 5, 3]`

3. Wiederhole für den unsortierten Teil:
   Wir wiederholen die Schritte 1 und 2 für den noch unsortierten Teil des Arrays (ab dem zweiten Element).
   Wir finden die kleinste Zahl (die 2) und tauschen sie mit dem ersten Element des unsortierten Teils.
   Das Array sieht jetzt so aus: `[1, 2, 4, 5, 3]`
4. Fahre fort, bis das gesamte Array sortiert ist:
   Wir setzen diesen Prozess fort, bis das gesamte Array sortiert ist.

- Visuelle Darstellung:

```
[5, 2, 4, 1, 3] // Anfangsarray
[1, 2, 4, 5, 3] // Nach dem ersten Durchlauf
[1, 2, 4, 5, 3] // Nach dem zweiten Durchlauf
[1, 2, 3, 5, 4] // Nach dem dritten Durchlauf
[1, 2, 3, 4, 5] // Nach dem vierten Durchlauf (sortiert!)

```

**Aufgabe**
Schreiben Sie eine PHP-Funktion, die das Array, das sie in ihrem Parameter erhält, mit dem Minsort-Algorithmus sortiert und zurückgibt.

```php
function minsort($arr) {
...
}

```
