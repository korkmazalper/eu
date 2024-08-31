<?php
$host="localhost";
$dbname="kunde_buch";
$user="root";
$password="";

$mysqli =mysqli_connect($host, $user, $password, $dbname);
if (mysqli_connect_errno())
 {
 throw new Exception("MySQL connection error: " . mysqli_connect_error());
 } else {
    echo "Success!";
 }
$sql="SELECT * FROM kunde"; 
$result=mysqli_query($mysqli,$sql);

If($result===null)
{
 throw new Exception("No records retrieved from Database");
}
$data = [];
while ($row = mysqli_fetch_assoc($result)) {
    $data[] = $row;
}
print_r($data);

//  $data = mysqli_fetch_assoc($result); 
mysqli_free_result($result);
mysqli_close($mysqli);
?>