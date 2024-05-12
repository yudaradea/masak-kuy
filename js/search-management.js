const hapusSearch = document.getElementById("hapusSearch");

function checkSearchLenght(search) {
  if (search.length >= 1) {
    hapusSearch.classList.remove("hidden");
  } else {
    hapusSearch.classList.add("hidden");
  }
}

hapusSearch.addEventListener("click", () => {
  const search = (document.getElementById("search").value = "");
  hapusSearch.classList.add("hidden");
});
