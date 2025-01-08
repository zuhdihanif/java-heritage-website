//Fungsi untuk mencegah input saat nomor identitas belum sesuai
function checkNomorIdentitas() {
    var input = document.getElementById('nomorIdentitas');
    var value = input.value;
    if (!Number.isInteger(Number(value)) || value.length !== 16) {
        return true;
    } else {
        return false;
    }
}

//Fungsi untuk mencegah input saat tanggal menginap belum sesuai
function checkDateFormat() {
    var input = document.getElementById('tanggalPesan');
    var value = input.value;
    var datePattern = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19|20)\d\d$/;
    if (!datePattern.test(value)) {
        return true;
    } else {
        return false;
    }
}

//Fungsi untuk mencegah input saat durasi menginap belum sesuai
function checkDurasiMenginap() {
    var input = document.getElementById('durasiMenginap');
    var value = input.value;
    if (!Number.isInteger(Number(value))) {
        return true;
    } else {
        return false;
    }
}


// Fungsi untuk melakukan pengecekan dan memberi feedback pada nomor identitas
$(document).ready(function() {
    $('#nomorIdentitas').on('input', function() {
        var input=$(this);
        var re=/^\d{16}$/; // Regular expression untuk 16 digit
        if(!re.test(input.val())) {
            input.addClass('is-invalid'); // Tambah class 'is-invalid' untuk highlight input yang tidak valid
            input.removeClass('is-valid');
        } else {
            input.removeClass('is-invalid');
            input.addClass('is-valid'); // Tambah class 'is-valid' untuk highlight input yang valid
        }
    });

    // Fungsi untuk melakukan pengecekan dan memberi feedback pada durasi menginap
    $('#durasiMenginap').on('input', function() {
        var input=$(this);
        var re=/^\d+$/; // Regular expression untuk angka positif
        if(!re.test(input.val())) {
            input.addClass('is-invalid');
            input.removeClass('is-valid');
        } else {
            input.removeClass('is-invalid');
            input.addClass('is-valid');
        }
    });

    // Fungsi untuk menghitung total bayar berdasarkan tipe kamar, durasi menginap, dan opsi sarapan
    $('#hitungTotal').click(function() {
        var namaPemesan = document.getElementById('namaPemesan').value;
        var jenisKelamin = document.querySelector('input[name="jenisKelamin"]:checked');
        var nomorIdentitas = document.getElementById('nomorIdentitas').value;
        var tipeKamar = document.getElementById('tipeKamar').value;
        var tanggalPesan = document.getElementById('tanggalPesan').value;
        var durasiMenginap = document.getElementById('durasiMenginap').value;

        if (!nomorIdentitas || !durasiMenginap || !namaPemesan || !jenisKelamin || !tipeKamar || !tanggalPesan) {
            alert('Lengkapi formulir terlebih dahulu!');
        } else {
            // Check date format
            if (checkNomorIdentitas() || checkDurasiMenginap()) {
                alert('Format data yang dimasukkan tidak sesuai!');
                return;
            }

        var tipeKamar = $('#tipeKamar').val();
        var durasiMenginap = parseInt($('#durasiMenginap').val());
        var breakfast = $('#breakfast').is(':checked');
        var harga;

        switch(tipeKamar) {
            case 'junior':
                harga = 500000;
                break;
            case 'premium':
                harga = 800000;
                break;
            case 'executive':
                harga = 1200000;
                break;
        }

        var total = harga * durasiMenginap;

        if(durasiMenginap > 2) {
            total *= 0.9; // Diskon 10% jika durasi menginap lebih dari 2 hari
        }
        
        if(breakfast) {
            total += (80000 * durasiMenginap); // Tambah biaya sarapan ke total
        }
        $('#totalBayar').val("Rp " + total.toLocaleString()); // Tampilkan total bayar dengan format mata uang
    }
    });

    // Fungsi untuk mencegah pengiriman formulir jika total bayar belum diisi
    $('#simpan').click(function (e) {
        var totalBayar = $('#totalBayar').val();

        if (!totalBayar) {
            e.preventDefault(); // Mencegah pengiriman formulir
            alert('Lengkapi formulir terlebih dahulu!'); // Munculkan peringatan jika total bayar belum diisi
        }
    })

    // Handle event keypress pada formulir untuk mencegah pengiriman ketika tombol Enter ditekan
    $('#bookingForm').keypress(function(event) {
        // Cek apakah tombol yang ditekan adalah Enter (kode tombol 13)
        if (event.which === 13) {
            event.preventDefault(); // Mencegah perilaku default (pengiriman formulir)
        }
    });
});

// Fungsi untuk mereset formulir
function clearForm() {
    document.getElementById("bookingForm").reset();
}