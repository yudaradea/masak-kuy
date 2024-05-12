if (localStorage.getItem("loginUser") !== null) {
  window.location.assign("../index.html");
}

document.addEventListener("DOMContentLoaded", () => {
  const userForm = document.getElementById("userForm");
  const userManager = new User();

  userForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const userData = {
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    };

    const result = userManager.signUser(userData);

    if (result.success) {
      return (window.location.href = "../index.html");
    } else {
      alert("email atau password salah");
      document.getElementById("email").focus();
      document.getElementById("password").value = "";
    }
  });
});
