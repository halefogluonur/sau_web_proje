<?php
// Başarılı Giriş (basari.php)
// Login başarılı olunca bu sayfaya yönlendirilir
session_start();
?>
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <!-- 3 saniye sonra otomatik olarak ana sayfaya yönlendiriyorum -->
    <meta http-equiv="refresh" content="3;url=index.html">
    <title>Başarılı Giriş | Onur Halefoğlu</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="tasarım.css">
</head>
<body class="bg-light d-flex align-items-center" style="min-height: 100vh;">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6 text-center">
                <div class="p-5 bg-white shadow rounded">
                    <!-- Başarılı giriş ikonu olarak Bootstrap SVG kullandım -->
                    <div class="mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="#28a745" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                        </svg>
                    </div>

                    <h1 class="display-5 fw-bold text-success">Hoş Geldiniz</h1>
                    <p class="fs-3 mt-2"><strong>b251210073</strong></p>
                    <p class="text-muted mt-3">Giriş başarılı. 3 saniye içinde ana sayfaya yönlendiriliyorsunuz...</p>
                    
                    <div class="spinner-border text-primary mt-3" role="status"></div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
