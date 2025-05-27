<?php
include "includes/security.php"; // Tambahkan keamanan

$pages = ["beranda", "layanan", "produk", "kontak"]; // Halaman yang diizinkan
$page = isset($_GET['x']) && in_array($_GET['x'], $pages) ? "pages/" . $_GET['x'] . ".php" : "pages/beranda.php";

include "includes/header.php"; // Panggil header
include $page; // Panggil halaman yang dipilih
include "includes/footer.php"; // Panggil footer

