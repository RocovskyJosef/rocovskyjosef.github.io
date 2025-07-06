function menuOpen() {
  var x = document.getElementById("mobile-menu");
  if (x.classList.contains("show")) {
    x.classList.remove("show");
  } else {
    x.classList.add("show");
  }
}