function updatePrice() {
    var tipeKamar = document.getElementById("tipeKamar").value;
    var durasi = parseInt(document.getElementById("durasi").value);
    var includeBreakfast = document.getElementById("breakfast").checked;
  
    var harga;
    switch (tipeKamar) {
      case "junior":
        harga = 500000;
        break;
      case "premium":
        harga = 800000;
        break;
      case "executive":
        harga = 1200000;
        break;
    }
  
    var total = harga * durasi;
    if (durasi > 2) {
      total *= 0.9; // Diskon 10% jika menginap lebih dari 3 hari
    }
    if (includeBreakfast) {
      total += durasi * 80000; // Tambahan harga breakfast
    }
  
    document.getElementById("total").value = "Rp " + total.toLocaleString();
  }

// Tambahkan event listener pada form "bookingForm" untuk menangani pengiriman data form
document.getElementById('pesanKamarButton').addEventListener('submit', function(event) {
  event.preventDefault(); // Mencegah form dari pengiriman default

  // Ambil data form
  var nama = document.getElementById('nama').value;
  var identitas = document.getElementById('identitas').value;
  var gender = document.querySelector('input[name="gender"]:checked').value;
  var tipeKamar = document.getElementById('tipeKamar').value;
  var tanggal = document.getElementById('tanggal').value;
  var durasi = document.getElementById('durasi').value;
  var breakfast = document.getElementById('breakfast').checked;
  var total = document.getElementById('total').value;

  // Kirim data ke server menggunakan AJAX atau Fetch API
  var xhr = new XMLHttpRequest();
  var url = 'book.php'; // Ubah sesuai dengan nama file PHP yang akan menangani penyimpanan data
  var params = 'nama=' + encodeURIComponent(nama) + '&identitas=' + encodeURIComponent(identitas) + '&gender=' + encodeURIComponent(gender) + '&tipeKamar=' + encodeURIComponent(tipeKamar) + '&tanggal=' + encodeURIComponent(tanggal) + '&durasi=' + encodeURIComponent(durasi) + '&breakfast=' + encodeURIComponent(breakfast) + '&total=' + encodeURIComponent(total);
  xhr.open('POST', url, true);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

  xhr.onreadystatechange = function() {
      if(xhr.readyState == 4 && xhr.status == 200) {
          // Handle response dari server jika diperlukan
          console.log(xhr.responseText);
      }
  };

  xhr.send(params);
});

  
  document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Menghentikan pengiriman form
    updatePrice(); // Menghitung total bayar
  });
  
  function clearForm() {
    document.getElementById("bookingForm").reset();
  }
  $(function() {
    $("#tanggal").datepicker({
      dateFormat: 'dd/mm/yy' // Atur format tanggal
    });
  });