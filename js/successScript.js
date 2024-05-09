const urlParams = new URLSearchParams(window.location.search);
const email = urlParams.get("email");

document.getElementById("email-box").innerText = email;

const dismissBtn = document.getElementById("dismiss-button");

dismissBtn.addEventListener("click", () => {
  window.location.href = "/index.html";
});
