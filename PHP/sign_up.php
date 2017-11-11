<?php

include 'DBConfig.php';

$connection = mysqli_connect($HostName, $HostUser, $HostPass, $DatabaseName);

$json = file_get_contents('php://input');

$obj = json_decode($json, true);

$usr = $obj['usr'];

$pass = $obj['pass'];

$SQL_Query = "insert into users (usr, pass) values ('$usr', '$pass')";

if(myspli_query($connection, $SQL_Query)) {
	$msg = 'Account Succesfully Created!';

	$json = json_encode($msg);

	echo $json;
}
else {
	echo 'Account Failed to Create, Please Try Again.';
}

mysqli_close($connection);

?>
