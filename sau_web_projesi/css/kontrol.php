<?php
session_start();

$email = $_POST['email'];
$sifre = $_POST['password'];

$dogruEmail = "onur.halefoglu@ogr.sakarya.edu.tr";
$dogruSifre = "b251210073";

if ($email == $dogruEmail && $sifre == $dogruSifre) {
    $_SESSION['user'] = $email;
    echo "<script>alert('Hoş geldiniz b251210073!'); window.location.href='index.html';</script>";
} else {
    echo "<script>alert('Hatalı e-posta veya şifre!'); window.location.href='login.html';</script>";
}
?>