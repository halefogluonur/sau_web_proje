// formkontrol.js - İletişim Formu Kontrol
// Native JavaScript ve Vue.js ile iki ayrı butonda denetim

// ----- 1. Native JavaScript ile Denetim -----
// Bu fonksiyon "JS ile Denetle" butonuna tıklandığında çalışır
function validateJS() {
    // Form alanlarından değerleri alıyorum
    const ad = document.getElementById('ad').value;
    const email = document.getElementById('email').value;
    const tel = document.getElementById('tel').value;

    // Boş alan kontrolü - ad, email veya tel boşsa uyarı ver
    if (ad === "" || email === "" || tel === "") {
        alert("JS Hatası: Lütfen tüm alanları doldurun!");
        return false;
    }

    // Email formatı kontrolü - @ işareti var mı diye bakıyorum
    if (!email.includes("@")) {
        alert("JS Hatası: Geçersiz e-posta formatı!");
        return false;
    }

    // Telefon sadece rakamlardan oluşmalı, isNaN ile kontrol ediyorum
    if (isNaN(tel)) {
        alert("JS Hatası: Telefon sadece rakamlardan oluşmalıdır!");
        return false;
    }

    // Tüm kontroller geçildiyse formu gönderiyorum
    alert("JS Kontrolü Başarılı! Form gönderiliyor...");
    document.getElementById('contactForm').submit();
}

// ----- 2. Vue.js ile Denetim -----
// "Vue.js ile Denetle" butonunda Vue.js kullanıyorum
const { createApp } = Vue;

createApp({
    data() {
        return {
            // Form verilerini Vue ile iki yönlü bağladım (v-model)
            form: {
                ad: '', 
                soyad: '',
                email: '', 
                tel: null, 
                cinsiyet: '', 
                mesaj: '', 
                evren: '', 
                hobiler: [], // Checkbox'lar dizi olarak tutuluyor
                tarih: ''
            }
        }
    },
    methods: {
    validateVue() 
    {
        // Önce zorunlu alanların boş olup olmadığını kontrol ediyorum
        if (!this.form.ad || !this.form.email || !this.form.tel || !this.form.sifre) {
            alert("Vue Hatası: Lütfen tüm zorunlu alanları ve şifreyi doldurun!");
        } else if (this.form.sifre.length < 4) {
            // Şifre en az 4 karakter olmalı diye kontrol ediyorum
            alert("Vue Hatası: Şifre en az 4 karakter olmalı!");
        } else if (isNaN(this.form.tel)) {
            // Telefon alanının sadece rakam içerdiğini doğruluyorum
            alert("Vue Hatası: Telefon yalnızca rakamlardan oluşmalıdır!");
        } else {
            // Her şey doğruysa formu POST ediyorum
            alert("Vue.js Denetimi Başarılı!");
            document.getElementById('contactForm').submit();
        }
    }
    }
}).mount('#app');
