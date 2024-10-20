<?php
$host="localhost";
$dbname="kunde_buch_v4";
$user="root";
$password="";
try{
        $db=new PDO("mysql:host=$host;dbname=$dbname",$user,$password);
        echo "Success<br>";
        $q=$db->query("SELECT * FROM kunde");
        $data = $q->fetchAll();
        
        print_r($data);
}catch(PDOException $e){
    echo "Error:" . $e->getMessage();
}

?>
