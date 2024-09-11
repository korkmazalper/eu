<?php

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
                swap($x, $j);
            }
            // echo json_encode($x) .  "\n\n";
        }
    }
}

$numbers = array(5, 3, 8, 4, 2);

bubbleSort($numbers);

echo "\n\nSorted array: ";
echo json_encode($numbers);
echo "\n\n";
?>