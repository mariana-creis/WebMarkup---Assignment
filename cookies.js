const cookieBanner = document.getElementById("cookieBanner");
const acceptBtn = document.getElementById("acceptCookies");
const rejectBtn = document.getElementById("rejectCookies");

cookieBanner.style.display = "flex";

acceptBtn.addEventListener("click", () => {
  cookieBanner.style.display = "none";
});

rejectBtn.addEventListener("click", () => {
  cookieBanner.style.display = "none";
});
