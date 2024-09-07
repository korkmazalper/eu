## Hash

### md5

"....." (Länge ist egal) --> "\_\_\_"(32 Zeichen)

- Anwendung: Datenbank-> Passwort: Hash von des Passwortes wird in die Datenbank gespeichert.
- Salting:
- Blockchain:
-
```php
<?php 
    $salt="xyz";
    echo $salt . "\n";

    $txt1="xyz";

    echo $txt1 . "\n";
    
    echo md5($txt1) . "\n";

    echo md5($txt1 . $salt);

?>
```
