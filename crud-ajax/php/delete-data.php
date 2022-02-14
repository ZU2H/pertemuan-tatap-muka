<?php 
include "connection.php";

$id = $_POST["id"];
$sql = mysqli_query($connection, "DELETE FROM tbl_data WHERE id = $id");

if ($sql) {
    $result["status"] = "1";
    $result["message"] = "Berhasil";
} else {
    $result["status"] = "0";
    $result["message"] = "Gagal";
}
echo json_encode($result);
?>