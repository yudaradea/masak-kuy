if (localStorage.getItem("loginUser") === null) {
  window.location.assign("../signin.html");
}

document.addEventListener("DOMContentLoaded", () => {
  const logout = document.getElementById("logout");
  const userList = JSON.parse(localStorage.getItem("users"));
  const loginUser = JSON.parse(localStorage.getItem("loginUser"));
  const getDetailUser = userList.filter((user) => user.email === loginUser);

  logout.addEventListener("click", () => {
    localStorage.removeItem("loginUser");
    return (window.location.href = "../index.html");
  });

  //   change name user
  document.getElementById("nameUser").textContent = getDetailUser[0].name;

  //   change avatar user
  document.getElementById("avatarUser").src = getDetailUser[0].avatar;

  //   console.log(getDetailUser);
});
