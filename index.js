function togglePasswordVisibility() {
    const passwordInput = document.getElementById("password");
    const eyeIcon = document.getElementById("eye-icon");
  
    if (passwordInput.type === "password") {
      passwordInput.type = "text"; // إظهار كلمة السر
      eyeIcon.classList.remove("fa-eye"); // إزالة أيقونة العين المفتوحة
      eyeIcon.classList.add("fa-eye-slash"); // إضافة أيقونة العين المغلقة
    } else {
      passwordInput.type = "password"; // إخفاء كلمة السر
      eyeIcon.classList.remove("fa-eye-slash"); // إزالة أيقونة العين المغلقة
      eyeIcon.classList.add("fa-eye"); // إضافة أيقونة العين المفتوحة
    }
  }
  