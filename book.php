<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Pemesanan Kamar</title>
    <!-- Include Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
</head>


<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "hotel";


$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Ambil data dari formulir
if (isset($_POST['simpan'])){
$namaPemesan = $_POST['namaPemesan'];
$jenisKelamin = $_POST['jenisKelamin'];
$nomorIdentitas = $_POST['nomorIdentitas'];
$tipeKamar = $_POST['tipeKamar'];
$tanggalPesan = $_POST['tanggalPesan'];
$durasiMenginap = $_POST['durasiMenginap'];
$breakfast = isset($_POST['breakfast']) ? "Ya" : "Tidak"; // Mengubah checkbox menjadi 1 atau 0
$totalBayar = $_POST['totalBayar'];
if ($durasiMenginap > 2) {
    $diskon = 10;
} else {
    $diskon = 0;
}
// Query SQL untuk menyimpan data pemesanan ke dalam database

// Query SQL untuk menyimpan data pemesanan ke dalam database
$sql = "INSERT INTO form (namaPemesan, jenisKelamin, nomorIdentitas, tipeKamar, tanggalPesan, durasiMenginap, breakfast, diskon, totalBayar) 
        VALUES ('$namaPemesan', '$jenisKelamin', '$nomorIdentitas', '$tipeKamar', '$tanggalPesan', '$durasiMenginap', '$breakfast', '$diskon','$totalBayar' )";

if ($conn->query($sql) === TRUE) {
    // Jika berhasil disimpan, langsung tampilkan data yang baru saja dimasukkan
    echo "<div class='success-message'>";
    echo "<h2>Data yang baru saja dimasukkan:</h2>";
    echo "<p>Nama Pemesan: $namaPemesan</p>";
    echo "<p>Nomor Identitas: $nomorIdentitas</p>";
    echo "<p>Jenis Kelamin: $jenisKelamin</p>";
    echo "<p>Tipe Kamar: $tipeKamar</p>";
    echo "<p>Durasi Menginap: $durasiMenginap hari</p>";
    // echo "<p>Breakfast: " . ($breakfast == 1 ? 'Tidak' : 'Ya') . "</p>";
    echo "<p>Diskon: $diskon%</p>";
    echo "<p>Total Bayar: $totalBayar</p>";
    echo "</div>";

    // Tambahkan tombol kembali ke index.html
    // echo "<a href='result.php' class='btn btn-secondary'>Lihat Data Pemesan</a><br>";
    // echo "<a href='index.html' class='btn btn-secondary'>Beranda</a>";
    ?>
        <a href="index.html" class="btn btn-primary mr-3">Beranda</a>
        <a href="result.php" class="btn btn-success mr-3">Lihat Data Pemesan</a>
    <?php


} else {
    echo "<div class='error-message'>Error: " . $sql . "<br>" . $conn->error . "</div>";

    // Tambahkan tombol kembali ke index.html
    echo "<a href='index.html' class='btn btn-secondary'>Kembali ke Beranda</a>";
}
// Tutup koneksi ke database
$conn->close();
}
?>