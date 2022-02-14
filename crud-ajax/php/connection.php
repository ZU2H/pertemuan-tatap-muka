<?php 
$connection = mysqli_connect("localhost", "root", "", "shop");
if (mysqli_connect_errno()) {
    echo "Database Connection Failed". mysqli_connect_error();
}
?>