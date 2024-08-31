    <?php
//phpinfo();
echo date("Y-m-d") . "<br>\n";
echo date("Y/m/d"). "<br>\n";
echo date("Y.m.d"). "<br>\n";
echo "============================<br>\n";
echo date("l"). "<br>\n";
echo date("2"). "<br>\n";
echo "============================<br>\n";

date_default_timezone_set('Europe/Istanbul');
echo date("Y-m-d H:i:s") ."<br>\n";
echo "Heute: " . date("l") . ". " . "<br>\n";
echo "============================<br>\n";
$timestamp = 1634764800;
echo date("Y-m-d H:i:s", $timestamp);
?>