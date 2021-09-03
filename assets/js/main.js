/**
 * On page load
 */
window.onload = function () {
  //copy right output message
  const curr_year = new Date().getFullYear();
  const output = `© 2018 - ${curr_year} by www.eshmaelsevilla.com. All rights reserved.`;
  document.getElementById("copyright_output").innerHTML = output;
};
/**
 * Menu click navigation
 */
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

function toggleMenu() {
  var menuToggle = document.querySelector(".toggle");
  var menu = document.querySelector(".menu");
  menuToggle.classList.toggle("active");
  menu.classList.toggle("active");
}
