let btn = document.querySelector(".toggle");
let icon = document.querySelector(".fa-bars");

btn.onclick = function () {
  if (icon.classList.contains("fa-times")) {
    icon.classList.replace("fa-times", "fa-bars");
    document.getElementById("sidebar").style.top = "-250px";
  } else {
    icon.classList.replace("fa-bars", "fa-times");
    document.getElementById("sidebar").style.top = "60px";
  }
};
