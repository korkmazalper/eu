<?php
include "bubblesort.php";

function createRandomArrayWithUniqueElements($lengthOfArray, $minNumber, $maxNumber) {
    if($lengthOfArray<=($maxNumber-$minNumber+1)){
        $returnedArray = [];
        while (count($returnedArray) < $lengthOfArray) {
            $tempNumber=rand($minNumber, $maxNumber);
            if(!in_array($tempNumber,$returnedArray)){
                array_push($returnedArray,$tempNumber);
            }         
        }
        return $returnedArray;
    }
    return false;
}

function minsort($arr) {
    $n = count($arr);
    for ($i = 0; $i < $n - 1; $i++) {
        $min_index = $i;
        for ($j = $i + 1; $j < $n; $j++) {
            if ($arr[$j] < $arr[$min_index]) {
                $min_index = $j;
            }
        }
        if ($min_index != $i) {
            swap($arr,$min_index,$i);
        }
    }

    return $arr;
}


$createdArray=createRandomArrayWithUniqueElements(5, 1, 100);
echo "created array:" . json_encode ($createdArray) . "\n";
//sort($createdArray);
//echo json_encode($createdArray);

echo "sorted array:" . json_encode(minsort($createdArray)) . "\n";


?>