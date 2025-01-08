<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Data Pemesanan Hotel</title>

<!-- <link href="css/styles.css" rel="stylesheet" /> -->
</head>
<body>
<header id="header" class="d-flex align-items-center">
    <div class="container d-flex align-items-center justify-content-between">

      <!-- <h1 class="logo"><a href="index.html">Java Heritage</a></h1> -->
      <!-- Uncomment below if you prefer to use an image logo -->
      <a href="index.html" class="logo"><img src="assets/img/logo-jh.png" alt=""></a>
      </nav><!-- .navbar -->

    </div>
  </header>
<?php
// membuat koneksi ke database
$host = 'localhost';
$username = 'root';
$password = '';
$database = 'hotel';

$koneksi = mysqli_connect($host, $username, $password, $database);

// mengambil data dari tabel
$sql = "SELECT * FROM form";
$result = mysqli_query($koneksi, $sql);

if (mysqli_num_rows($result) > 0) {
  // menampilkan data pada halaman result
  echo '<table>';
  echo '<tr><th>Nama Pemesan</th><th>Jenis Kelamin</th><th>Nomor Identitas</th><th>Tipe Kamar</th><th>Tanggal Pesan</th><th>Durasi Menginap</th><th>Breakfast</th><th>Total Bayar</th></tr>';
  while ($row = mysqli_fetch_assoc($result)) {
    echo '<tr>';
    echo '<td>' . $row['namaPemesan'] . '</td>';
    echo '<td>' . $row['jenisKelamin'] . '</td>';
    echo '<td>' . $row['nomorIdentitas'] . '</td>';
    echo '<td>' . $row['tipeKamar'] . '</td>';
    echo '<td>' . $row['tanggalPesan'] . '</td>';
    echo '<td>' . $row['durasiMenginap'] . '</td>';
    echo '<td>' . $row['breakfast'] . '</td>';
    echo '<td>' . $row['totalBayar'] . '</td>';

    echo '</tr>';
  }
  echo '</table>';
} else {
  echo "Data tidak ditemukan";
}


?>

      <div style="width: 800px;margin: 0px auto;">
        <canvas id="myChart"></canvas>
      </div>
  <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js"></script>
  <script>
		var ctx = document.getElementById("myChart").getContext('2d');
		var myChart = new Chart(ctx, {
			type: 'bar',
			data: {
				labels: ["Junior","Premium","Executive"],
				datasets: [{
					label: '',
					data: [
					<?php 
					$jumlah_junior = mysqli_query($koneksi,"select * from form where tipeKamar='Junior'");
					echo mysqli_num_rows($jumlah_junior);
					?>, 
                    <?php 
					$jumlah_premium = mysqli_query($koneksi,"select * from form where tipeKamar='Premium'");
					echo mysqli_num_rows($jumlah_premium);
					?>,
                    <?php 
					$jumlah_executive = mysqli_query($koneksi,"select * from form where tipeKamar='Executive'");
					echo mysqli_num_rows($jumlah_executive);
					?>,
					],
					backgroundColor: [
					'#DD5746','#FFC470', '#4793AF'
					],
				}]
			},
			options: {
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero:true
						}
					}]
				}
			}
		});
	</script>
</body>
</html>
