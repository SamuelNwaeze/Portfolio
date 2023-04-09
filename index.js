/*?// JavaScript code to add event listener to the button
const gmailButton = document.getElementById("mailButton");
gmailButton.addEventListener("click", () => {
  // Redirect to Gmail address
  window.location.href = "https://mail.google.com/";
});

const username = "Samuel Nwaeze";
const gmailUrl = `https://mail.google.com/mail/u/${username}/`;
window.location.href = gmailUrl;
*/

const mail = document.getElementById("mailButton");
mail.addEventListener("click", () => {
  window.location.href =
    "https://accounts.google.com/SignOutOptions?hl=en&continue=https://mail.google.com&service=mail";
});

const toggleButton = document.getElementsByid("togglerButton")[0];
const navLeft = document.getElementsByid("sideNav")[0];

toggleButton.addEventListener("click", () => {
  navLeft.classList.toggle("active");
});
