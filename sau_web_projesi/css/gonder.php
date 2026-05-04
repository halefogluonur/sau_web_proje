<?php
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
                if ($_POST) {
                    foreach ($_POST as $anahtar => $deger) {
                        if (is_array($deger)) {
                            $deger = implode(", ", $deger);
                        }
                        
                        echo "<tr>";
                        echo "<td class='fw-bold'>" . ucfirst($anahtar) . "</td>";
                        echo "<td>" . htmlspecialchars($deger) . "</td>";
                        echo "</tr>";
                    }
                } else {
                    echo "<tr><td colspan='2' class='text-center'>Hiç veri gönderilmedi!</td></tr>";
                }
                ?>
            </tbody>
        </table>
        
        <div class="text-center mt-4">
            <a href="iletisim.html" class="btn btn-secondary">Geri Dön</a>
        </div>
    </div>
</body>
</html>