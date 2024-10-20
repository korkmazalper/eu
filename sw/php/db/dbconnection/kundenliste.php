<?php

$host = "localhost";
$dbname = "kunde_buch_v4";
$user = "root";
$password = "";

try {
    $db = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", 
    $user, $password);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Datenbank verbindung -> Erfolgreich <br>";
} catch (PDOException $e) {
    echo 'Verbindung-Fehler: ' . $e->getMessage();
    exit();
}

try {
    $q = $db->query("SELECT * FROM kunde");
    $kunden = $q->fetchAll(PDO::FETCH_ASSOC);
    //print_r($kunden);
} catch (PDOException $e) {
    echo 'Abfrage Fehler: <br> ' . $e->getMessage();
    exit();
}


?>
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <title>Kunden</title>
    <style>
        table {
            width: 50%;
            border-collapse: collapse;
        }
        table, th, td {
            border: 1px solid black;
        }
        th, td {
            padding: 10px;
            text-align: left;
            
        }
        tbody tr:nth-child(odd) {
            background-color: white;
        }
        tbody tr:nth-child(even) {
            background-color: gray;
        }
    </style>
</head>
<body>

<h2>KundenListe</h2>

<table>
    <thead>
        <tr style="background-color:yellowgreen">
            <th>Kunden-ID</th>
            <th>Name</th>
            <th>Vorname</th>
            <th>Telefonnummer</th> 
        </tr>
    </thead>
    
    <tbody>
        <?php if (!empty($kunden)): $anzahlDerDatensaetze=0; ?>
            <?php foreach ($kunden as $kunde): ?>
                <tr>
                    <?php if($kunde['kundennachname']=="Mustermann"): $anzahlDerDatensaetze++;?>
                        <td><?php echo $kunde['kundennummer']; ?></td>
                        <td><?php echo $kunde['kundennachname']; ?></td>
                        <td><?php echo $kunde['kundenvorname']; ?></td>
                        <td><?php echo $kunde['telefonnummer']; ?></td>
                    <?php else:?>
                        <td><?php echo "kundennummer"; ?></td>
                        <td><?php echo "kundennachname"; ?></td>
                        <td><?php echo 'kundenvorname'; ?></td>
                        <td><?php echo 'telefonnummer'; ?></td>
                    <?php endif; ?>

                </tr>
            <?php endforeach; ?>
        <?php else: ?>
            <tr>
                <td colspan="3">Keine Datensätze</td>
            </tr>
        <?php endif; ?>
    </tbody>

    <tfoot>
        <tr>
            <th>
                <?php echo $anzahlDerDatensaetze ." " . "Datensätze gefunden"; ?>
            </th>
            
        </tr>
    </tfoot>
</table>

</body>
</html>
