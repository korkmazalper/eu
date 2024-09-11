<?php

function increment(&$num) {
    $num++;
    echo "Wert innerhalb der Funktion: $num\n";
}

$number = 5;
increment($number);
echo "Wert außerhalb der Funktion: $number\n";
?>
