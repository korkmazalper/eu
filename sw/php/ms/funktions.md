### Funktionen

#### strpos

**strpos:** Sucht die Position des ersten Vorkommens des Suchstrings in einem String.

```php
strpos(string $haystack, string $needle, int $offset = 0); //Rückgabe: int|false
```

Gibt die numerische Position des ersten Vorkommens von needle innerhalb der Zeichenkette haystack zurück.

**haystack**
Die Zeichenkette, in der gesucht werden soll.

**needle**
Die Zeichenkette, nach der gesucht werden soll.

Wenn der Parameter needle keine Zeichenkette ist, wird er vor PHP 8.0.0 in eine Ganzzahl umgewandelt und als ordinaler Wert eines Zeichens betrachtet. Dieses Verhalten gilt seit PHP 7.3.0 als veraltet und es wird dringend empfohlen, sich nicht darauf zu verlassen. Ist das Verhalten gewünscht, so sollte needle explizit in eine Zeichenkette umgewandelt werden oder explizit die Funktion chr() aufgerufen werden.

**offset**
Wenn angegeben, wird die Suche diese Anzahl an Zeichen vom Anfang der Zeichenkette gezählt beginnen. Ist der Wert negativ, beginnt die Suche stattdessen diese Anzahl an Zeichen vom Ende des Strings gezählt.

##### Rückgabewerte

Gibt die Position des Vorkommens von needle relativ zum Anfang der Zeichenkette haystack (unabhängig von offset). Es ist ebenfalls zu beachten, dass Stringpositionen bei `0` beginnen, und nicht bei `1`. Gibt `false` zurück, wenn needle nicht gefunden wurde.

**Warnung**
Diese Funktion kann sowohl das boolsche false zurückliefern, als auch einen nicht-boolschen Wert, welcher zu false ausgewertet wird. Weitere Informationen entnehmen Sie bitte dem Abschnitt über die boolschen Typen. Benutzen Sie deshalb den === Operator, um den Rückgabewert dieser Funktion zu überprüfen.


**Beispiel:**

```php
$text='Wichtig: Wenn Sie aufgenommen wurden.';
$needle="Wichtig";

$pos=-1;
$n=1;
while($pos!=false){
    $pos=stripos($text,$needle,$pos+1);
    if($pos!==false){
        echo $n++. "$needle bei $pos \n";
    }
}
```

```php
$text='Wichtig: Wenn Sie aufgenommen wurden.';
$needle="Wichtig";

$pos=-1;
$n=1;
while(true){
    $pos=stripos($text,$needle,$pos+1);
    if($pos!==false){
        echo "$n. $needle bei $pos \n";
        $n++;
    }else{
        break;
    }

}
```
