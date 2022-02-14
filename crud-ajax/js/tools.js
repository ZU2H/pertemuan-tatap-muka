$(document).ready(function () {
    readData();

    $(".btn-tambah").click(function() { addData(); });

    $(".btn-ubah").click(function() { editData(); });

    $(".btn-batal").click(function () {
        resetForm();
        readData();
    });

    function readData() {
        $(".target-data").html("");
        $(".btn-tambah").show();
        $(".btn-ubah").hide();
        $(".btn-batal").hide();
        $.ajax({
            type: "GET",
            url: "php/get-data.php",
            dataType: "JSON",
            success: function (response) {
                let data = ``;
                for (const[index, value] of response.entries()) {
                    // console.log(`[${index}] ${element.nama_barang}`);
                    data +=
                    `<tr>
                    <td>${index+1}</td>
                    <td>${value.nama_barang}</td>
                    <td>${value.harga_barang}</td>
                    <td>${value.stok}</td>
                    <td>
                    <button class="btn-edit" id="${value.id}">EDIT</button>
                    <button class="btn-delete" id="${value.id}">DEL</button>
                    </td>
                    </tr>`;
                }
                $(".target-data").append(data);
                $(".btn-edit").click(function() { getSingleData($(this).attr("id")); });
                $(".btn-delete").click(function() { deleteData($(this).attr("id")); });
            }
        });
    }

    function addData() {
        let nama_barang = $(".text-nama-barang").val();
        let harga_barang = $(".text-harga-barang").val();
        let stok = $(".text-stok").val();
        $.ajax({
            type: "POST",
            url: "php/add-data.php",
            data: `nama_barang=${nama_barang}&harga_barang=${harga_barang}&stok=${stok}`,
            dataType: "JSON",
            success: function (response) {
                if (response.status == "1") {
                    alert(response.message);
                    readData();
                    resetForm()
                } else {
                    alert(response.message);
                    readData();
                    resetForm();
                }
            }
        });
    }

    function editData() {
        let id = $(".text-id").val();
        let nama_barang = $(".text-nama-barang").val();
        let harga_barang = $(".text-harga-barang").val();
        let stok = $(".text-stok").val();
        $.ajax({
            type: "POST",
            url: "php/edit-data.php",
            data: `id=${id}&nama_barang=${nama_barang}&harga_barang=${harga_barang}&stok=${stok}`,
            dataType: "JSON",
            success: function (response) {
                // console.log(response);
                if (response.status == "1") {
                    alert(response.message);
                    readData();
                    resetForm();
                } else {
                    alert(response.message);
                    readData();
                    resetForm();
                }
            }
        });
    }

    function deleteData(id) {
        $.ajax({
            type: "POST",
            url: "php/delete-data.php",
            data: `id=${id}`,
            dataType: "JSON",
            success: function (response) {
                if (response.status == "1") {
                    alert(response.message);
                    readData();
                } else {
                    alert(response.message);;
                }
            }
        });
    }

    function getSingleData(id) {
        $.ajax({
            type: "POST",
            url: "php/get-single-data.php",
            data: `id=${id}`,
            dataType: "JSON",
            success: function (response) {
                // console.log(response);
                $(".text-id").val(response.id);
                $(".text-nama-barang").val(response.nama_barang);
                $(".text-harga-barang").val(response.harga_barang);
                $(".text-stok").val(response.stok);
                $(".btn-tambah").hide();
                $(".btn-ubah").show();
                $(".btn-batal").show();
            }
        });
    }

    function resetForm() {
        $("text-id").val();
        $("text-nama-barang").val();
        $("text-harga-barang").val();
        $("text-stok").val();
    }
});