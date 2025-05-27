<?php
header("Content-Type: application/xml; charset=utf-8");

echo "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";
echo "<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n";

$pages = [
    "index.php" => "https://cahayabambunusantara.my.id/",
    "beranda.php" => "https://cahayabambunusantara.my.id/beranda",
    "layanan.php" => "https://cahayabambunusantara.my.id/layanan",
    "produk.php" => "https://cahayabambunusantara.my.id/produk",
    "kontak.php" => "https://cahayabambunusantara.my.id/kontak"
];

foreach ($pages as $file => $url) {
    if (file_exists($file)) {
        $lastmod = date("Y-m-d\TH:i:sP", filemtime($file));
    } else {
        $lastmod = date("Y-m-d\TH:i:sP"); // Gunakan tanggal sekarang jika file tidak ditemukan
    }

    echo "  <url>\n";
    echo "    <loc>$url</loc>\n";
    echo "    <lastmod>$lastmod</lastmod>\n";
    echo "    <changefreq>weekly</changefreq>\n";
    echo "    <priority>0.8</priority>\n";
    echo "  </url>\n";
}

echo "</urlset>";
?>
