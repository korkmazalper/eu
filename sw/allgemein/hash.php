<?php 
    $salt="sdlfhj";
    echo $salt . "\n";

    $txt1="test";

    echo $txt1 . "\n";
    echo md5($txt1) . "\n";
    echo md5($txt1 . $salt) . "\n";
    echo md5($salt . $txt1);

    
?>