-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 02 Bulan Mei 2024 pada 12.13
-- Versi server: 10.4.24-MariaDB
-- Versi PHP: 8.0.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hotel`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `form`
--

CREATE TABLE `form` (
  `namaPemesan` varchar(30) NOT NULL,
  `jenisKelamin` varchar(20) NOT NULL,
  `nomorIdentitas` bigint(32) NOT NULL,
  `tipeKamar` varchar(20) NOT NULL,
  `tanggalPesan` varchar(30) NOT NULL,
  `durasiMenginap` int(10) NOT NULL,
  `breakfast` varchar(20) NOT NULL,
  `diskon` int(20) NOT NULL,
  `totalBayar` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `form`
--

INSERT INTO `form` (`namaPemesan`, `jenisKelamin`, `nomorIdentitas`, `tipeKamar`, `tanggalPesan`, `durasiMenginap`, `breakfast`, `diskon`, `totalBayar`) VALUES
('glbert', 'Laki-Laki', 2333737373737373, 'premium', '2024-05-29', 1, 'Ya', 0, 'Rp 880.000'),
('heritage', 'Laki-Laki', 12262626262622721, 'junior', '2024-05-16', 2, 'Ya', 0, 'Rp 1.160.000'),
('jaja', 'Laki-Laki', 61616161, 'premium', '2024-05-24', 3, 'Ya', 10, 'Rp 2.400.000'),
('gama', 'Laki-Laki', 101010101010101, 'premium', '2024-05-18', 2, 'Ya', 0, 'Rp 1.760.000'),
('cendana', 'Laki-Laki', 2228282828282828, 'executive', '21/05/2024', 3, 'Ya', 10, 'Rp 3.480.000'),
('kamar', 'Laki-Laki', 1122122128282861, 'premium', '21/05/2024', 3, 'Ya', 10, 'Rp 2.400.000'),
('hanif', 'Laki-Laki', 6262626262262626, 'premium', '21/05/2024', 4, 'Ya', 10, 'Rp 3.200.000'),
('hanif', 'Laki-Laki', 6262626262262626, 'premium', '', 4, '', 10, 'Rp 3.200.000'),
('hanif', 'Laki-Laki', 6262626262262626, 'premium', '', 4, '', 10, 'Rp 3.200.000'),
('hanif', 'Laki-Laki', 6262626262262626, 'premium', '', 4, '', 10, 'Rp 3.200.000'),
('hanif', 'Laki-Laki', 6262626262262626, 'premium', '', 4, '', 10, 'Rp 3.200.000'),
('penjas', 'Laki-Laki', 6262626181828282, 'premium', '08/05/2024', 1, 'Ya', 0, 'Rp 880.000'),
('kamal', 'Laki-Laki', 2172733737373737, 'executive', '11/05/2024', 2, 'Tidak', 0, 'Rp 2.400.000'),
('jaja', 'Laki-Laki', 616161626261616114, 'premium', '02/05/2024', 2, 'Ya', 0, 'Rp 1.760.000'),
('nadip', 'Laki-Laki', 16161616161616161, 'premium', '21/05/2024', 1, 'Tidak', 0, 'Rp 800.000');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
