function validateJS() {
    const ad = document.getElementById('ad').value;
    const email = document.getElementById('email').value;
    const tel = document.getElementById('tel').value;

    if (ad === "" || email === "" || tel === "") {
        alert("JS Hatası: Lütfen tüm alanları doldurun!");
        return false;
    }

    if (!email.includes("@")) {
        alert("JS Hatası: Geçersiz e-posta formatı!");
        return false;
    }

    if (isNaN(tel)) {
        alert("JS Hatası: Telefon sadece rakamlardan oluşmalıdır!");
        return false;
    }

    alert("JS Kontrolü Başarılı! Form gönderiliyor...");
    document.getElementById('contactForm').submit();
}

const { createApp } = Vue;

createApp({
    data() {
        return {
            form: {
                ad: '', 
                soyad: '',
                email: '', 
                tel: null, 
                cinsiyet: '', 
                mesaj: '', 
                evren: '', 
                hobiler: '', 
                tarih: ''
            }
        }
    },
    methods: {
    validateVue() 
    {
        if (!this.form.ad || !this.form.email || !this.form.tel || !this.form.sifre) {
            alert("Vue Hatası: Lütfen tüm zorunlu alanları ve şifreyi doldurun!");
        } else if (this.form.sifre.length < 4) {
            alert("Vue Hatası: Şifre en az 4 karakter olmalı!");
        } else {
            alert("Vue.js Denetimi Başarılı!");
            document.getElementById('contactForm').submit(); // Formu POST et
        }
    }
    }
}).mount('#app');