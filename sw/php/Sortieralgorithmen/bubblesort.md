# Bubblesort

### Pass by Value vs Pass by Reference

- Wertübergabe (Pass by Value): Es wird eine Kopie des Wertes erstellt, und Änderungen innerhalb der Funktion wirken sich nicht auf die ursprüngliche Variable aus.
- Referenzübergabe (Pass by Reference): Es wird die Speicheradresse der Variablen übergeben, und Änderungen innerhalb der Funktion wirken sich direkt auf die ursprüngliche Variable aus.

```php
<?php
function increment($num) {
$num++;
echo "Wert innerhalb der Funktion: $num\n";
}

$number = 5;
increment($number);
echo "Wert außerhalb der Funktion: $number\n";
?>
```

```php
<?php
function increment1(&$num) {
$num++;
echo "Wert innerhalb der Funktion: $num\n";
}

$number1 = 5;
increment1($number1);
echo "Wert außerhalb der Funktion: $number1\n";
?>
```

### Bubble Sort

Angenommen, wir haben das folgende Array, das wir sortieren möchten:

```
[5,3,8,4,2]
```

```pseudo
Schritt 1: Anfangszustand

Das anfängliche Array ist: [5,3,8,4,2]

```

- Durchlauf 1

```
Vergleiche 5 und 3. Da 5 > 3, vertausche sie.

[3,5,8,4,2]

Vergleiche 5 und 8. Da 5 < 8, belasse sie wie sie sind.

[3,5,8,4,2]

Vergleiche 8 und 4. Da 8 > 4, vertausche sie.

[3,5,4,8,2]

Vergleiche 8 und 2. Da 8 > 2, vertausche sie.

[3,5,4,2,8]

```

**Nach dem ersten Durchlauf ist das größte Element (8) am Ende des Arrays positioniert.**

- Durchlauf 2

```
Vergleiche 3 und 5. Da 3 < 5, belasse sie wie sie sind.

[3,5,4,2,8]

Vergleiche 5 und 4. Da 5 > 4, vertausche sie.

[3,4,5,2,8]

Vergleiche 5 und 2. Da 5 > 2, vertausche sie.

[3,4,2,5,8]

Vergleiche 5 und 8. Da 5 < 8, belasse sie wie sie sind.

[3,4,2,5,8]

```

**Nach dem zweiten Durchlauf sind die beiden größten Elemente (5 und 8) an den letzten beiden Positionen des Arrays.**

**_...._**

- Endzustand

Das vollständig sortierte Array ist

```
[2,3,4,5,8]

```

### Wertänderungstabelle

| Durchlauf | i   | j   | Vergleich        | Array-Zustand |
| --------- | --- | --- | ---------------- | ------------- |
| Anfang    | -   | -   |                  | 5, 3, 8, 4, 2 |
| 1         | 0   | 0   | 5 > 3 (tauschen) | 3, 5, 8, 4, 2 |
| 1         | 0   | 1   | 5 < 8 (belassen) | 3, 5, 8, 4, 2 |
| 1         | 0   | 2   | 8 > 4 (tauschen) | 3, 5, 4, 8, 2 |
| 1         | 0   | 3   | 8 > 2 (tauschen) | 3, 5, 4, 2, 8 |
| 2         | 1   | 0   | 3 < 5 (belassen) | 3, 5, 4, 2, 8 |
| 2         | 1   | 1   | 5 > 4 (tauschen) | 3, 4, 5, 2, 8 |
| 2         | 1   | 2   | 5 > 2 (tauschen) | 3, 4, 2, 5, 8 |
| 2         | 1   | 3   | 5 < 8 (belassen) | 3, 4, 2, 5, 8 |
| 3         | 2   | 0   | 3 < 4 (belassen) | 3, 4, 2, 5, 8 |
| 3         | 2   | 1   | 4 > 2 (tauschen) | 3, 2, 4, 5, 8 |
| 3         | 2   | 2   | 4 < 5 (belassen) | 3, 2, 4, 5, 8 |
| 3         | 2   | 3   | 5 < 8 (belassen) | 3, 2, 4, 5, 8 |
| 4         | 3   | 0   | 3 > 2 (tauschen) | 2, 3, 4, 5, 8 |
| 4         | 3   | 1   | 3 < 4 (belassen) | 2, 3, 4, 5, 8 |
| 4         | 3   | 2   | 4 < 5 (belassen) | 2, 3, 4, 5, 8 |
| 4         | 3   | 3   | 5 < 8 (belassen) | 2, 3, 4, 5, 8 |

Am Ende jedes Durchlaufs sind die größten Elemente an ihre endgültigen Positionen verschoben. Nach vier Durchläufen ist das Array vollständig sortiert.

- Schreibe eine Php-Funktion für Bubblesort Algorithmus

```php
<?php

// function swap(&$x, $i, $j) {
//     $temp = $x[$i];
//     $x[$i] = $x[$j];
//     $x[$j] = $temp;
// }

function swap(&$x, $k) {
    $temp = $x[$k];
    $x[$k] = $x[$k+1];
    $x[$k+1] = $temp;
}


function bubbleSort(&$x) {
    $length = count($x);
    for ($i = 0; $i < $length - 1; $i++) {
        for ($j = 0; $j < $length - $i - 1; $j++) {
            if ($x[$j] > $x[$j + 1]) {
                swap($x, $j, $j + 1);
            }

        }
    }
}

$numbers = array(5, 3, 8, 4, 2);

bubbleSort($numbers);


echo "\n\nSorted array: ";
echo json_encode($numbers);
echo "\n\n";
?>

```
