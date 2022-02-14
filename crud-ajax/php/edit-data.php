<?php 
include "connection.php";

$id = $_POST["id"];
$nama_barang = $_POST["nama_barang"];
$harga_barang = $_POST["harga_barang"];
$stok = $_POST["stok"];

// $result = "UPDATE tbl_data SET nama_barang = '$nama_barang', harga_barang = '$harga_barang', stok = '$stok', WHERE id = $id";
$sql = mysqli_query($connection, "UPDATE tbl_data SET nama_barang = '$nama_barang', harga_barang = '$harga_barang', stok = '$stok' WHERE id = $id");

if ($sql) {
    $result["status"] = "1";
    $result["message"] = "Berhasil";
} else {
    $result["status"] = "0";
    $result["message"] = "Gagal";
}
echo json_encode($result);  
?>