document.addEventListener("DOMContentLoaded", () => {
  const profileLink = document.getElementById("profileLink");
  if (localStorage.getItem("loginUser") == null) {
    profileLink.href = "../signin.html";
  } else {
    profileLink.href = "../profile.html";
  }
});
