<?php
// Login Kontrol (kontrol.php)
// Gönderilen email ve şifreyi kontrol eder

// Oturum başlatıyorum ki başarılı girişte kullanıcıyı tanıyabileyim
session_start();

// POST ile gelen verileri alıyorum, eğer gönderilmemişse boş string kabul ediyorum
$email = $_POST['email'] ?? '';
$sifre = $_POST['password'] ?? '';

$dogruEmail = "b251210073@sakarya.edu.tr";
$dogruSifre = "b251210073";

// Eğer email veya şifre boşsa uyarı verip login sayfasına geri gönderiyorum
if (empty($email) || empty($sifre)) {
    echo "<script>alert('E-posta ve şifre boş bırakılamaz!'); window.location.href='login.html';</script>";
    exit;
}

// Bilgileri karşılaştırıyorum
if ($email === $dogruEmail && $sifre === $dogruSifre) {
    // Doğruysa session'a kaydedip başarı sayfasına yönlendiriyorum
    $_SESSION['user'] = $email;
    echo "<script>window.location.href='basari.php';</script>";
} else {
    // Yanlışsa hata mesajı gösterip login sayfasına error parametresiyle yönlendiriyorum
    echo "<script>alert('Hatalı e-posta veya şifre!'); window.location.href='login.html?error=1';</script>";
}
?>
