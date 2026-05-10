<?php
// Form Verilerini Görüntüleme (gonder.php)
// POST ile gönderilen tüm form verilerini tablo halinde gösterir
?>
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <title>Form Verileri | Onur Halefoğlu</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light p-5">
    <div class="container bg-white shadow p-4 rounded">
        <h2 class="text-center text-primary mb-4">Gönderilen Form Bilgileri</h2>
        
        <table class="table table-striped table-bordered">
            <thead class="table-dark">
                <tr>
                    <th>Alan</th>
                    <th>Girilen Bilgi</th>
                </tr>
            </thead>
            <tbody>
                <?php
                // POST ile gelen tüm verileri döngüyle tabloya yazdırıyorum
                if ($_POST) {
                    foreach ($_POST as $anahtar => $deger) {
                        // Checkbox'lardan dizi geliyor, onu virgülle birleştiriyorum
                        if (is_array($deger)) {
                            $deger = implode(", ", $deger);
                        }
                        
                        echo "<tr>";
                        echo "<td class='fw-bold'>" . ucfirst($anahtar) . "</td>";
                        // XSS saldırılarına karşı htmlspecialchars kullanıyorum
                        echo "<td>" . htmlspecialchars($deger) . "</td>";
                        echo "</tr>";
                    }
                } else {
                    echo "<tr><td colspan='2' class='text-center'>Hiç veri gönderilmedi!</td></tr>";
                }

                // Eğer dosya yüklemesi yapıldıysa dosya bilgilerini de tabloya ekliyorum
                if (!empty($_FILES['dosya']['name'])) {
                    $dosyaAdi = $_FILES['dosya']['name'];
                    $dosyaBoyut = $_FILES['dosya']['size'] . " byte";
                    $dosyaTur = $_FILES['dosya']['type'];
                    echo "<tr><td class='fw-bold'>Dosya Adı</td><td>" . htmlspecialchars($dosyaAdi) . "</td></tr>";
                    echo "<tr><td class='fw-bold'>Dosya Türü</td><td>" . htmlspecialchars($dosyaTur) . "</td></tr>";
                    echo "<tr><td class='fw-bold'>Dosya Boyutu</td><td>" . htmlspecialchars($dosyaBoyut) . "</td></tr>";
                }
                ?>
            </tbody>
        </table>
        
        <!-- Geri dönüş bağlantısı -->
        <div class="text-center mt-4">
            <a href="iletisim.html" class="btn btn-secondary">Geri Dön</a>
        </div>
    </div>
</body>
</html>
