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
