if (localStorage.getItem("loginUser") !== null) {
  window.location.assign("../index.html");
}

function checkPasswordLength(password) {
  const validText = document.getElementById("validText");
  const validIcon = document.getElementById("validIcon");
  const validTextNumber = document.getElementById("validTextNumber");
  const validIconNumber = document.getElementById("validIconNumber");
  const numbers = /[0-9]/g;
  if (password.length >= 6) {
    validText.classList.remove("text-secondaryText");
    validText.classList.add("text-mainText");
    validIcon.classList.add("bg-primary");
    validIcon.classList.remove("bg-secondaryText");
  } else {
    validText.classList.add("text-secondaryText");
    validIcon.classList.add("bg-secondaryText");
  }

  if (password.match(numbers)) {
    validTextNumber.classList.remove("text-secondaryText");
    validTextNumber.classList.add("text-mainText");
    validIconNumber.classList.add("bg-primary");
    validIconNumber.classList.remove("bg-secondaryText");
  } else {
    validTextNumber.classList.add("text-secondaryText");
    validIconNumber.classList.add("bg-secondaryText");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const userForm = document.getElementById("userForm");
  const userManager = new User();

  userForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const password = document.getElementById("password").value;
    const encryptPassword = btoa(password);

    const userData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      avatar: document.getElementById("avatar").value,
      password: encryptPassword,
    };

    const numbers = /[0-9]/g;
    const addPasswordNumber = userData.password.match(numbers);

    if (addPasswordNumber == null) {
      alert("password harus menggunakan number");
    } else if (userData.password.length < 6) {
      alert("password minimal 8 karakter");
    } else {
      const result = userManager.saveUser(userData);

      if (result.emailExists) {
        alert("Email sudah terdaftar!");
        document.getElementById("email").value = "";
        document.getElementById("email").focus();
      }

      if (result.success) {
        alert("Registrasi berhasil, silakan login");
        return (window.location.href = "../signin.html");
      } else {
        alert("Registrasi gagal");
      }
    }
  });
});
