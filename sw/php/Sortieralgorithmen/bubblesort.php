<?php

function swap(&$arr, $k, $l) {
    $temp = $arr[$k];
    $arr[$k] = $arr[$l];
    $arr[$l] = $temp;
}


function bubbleSort(&$x) {
    $length = count($x);
    for ($i = 0; $i < $length - 1; $i++) {
        for ($j = 0; $j < $length - $i - 1; $j++) {
            if ($x[$j] > $x[$j + 1]) {
                swap($x, $j,$j+1);
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