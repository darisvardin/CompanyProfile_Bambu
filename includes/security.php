<?php 
header("X-Frame-Options: DENY"); // Mencegah iframe dari situs lain
header("X-XSS-Protection: 1; mode=block"); // Cegah XSS
header("X-Content-Type-Options: nosniff"); // Mencegah MIME sniffing