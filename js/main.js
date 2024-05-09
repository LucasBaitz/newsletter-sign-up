const emailInput = document.getElementById("email-input");
const submitButton = document.getElementById("submit-button");
const errorLabel = document.getElementById("error-label");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  const inputedEmailValue = emailInput.value;
  console.log(inputedEmailValue);

  if (!inputedEmailValue) {
    placeError("Please provide an email address");
    setInputErrorStyle();
    return;
  }

  const result = validateEmail(inputedEmailValue);

  if (!result) {
    placeError("Invalid email provided");
    setInputErrorStyle();
    return;
  }

  const url = `/success.html?email=${encodeURIComponent(inputedEmailValue)}`;
  
  window.location.href = url;
});

emailInput.addEventListener("input", () => {
  setInputDefaultStyle();
});

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validateEmail = (emailValue) => {
  return emailRegex.test(emailValue);
};

const placeError = (message) => {
  errorLabel.innerText = message;
};

const setInputDefaultStyle = () => {
  emailInput.style.backgroundColor = "";
  emailInput.style.borderColor = "";
};

const setInputErrorStyle = () => {
  emailInput.style.backgroundColor = "#FFE8E6";
  emailInput.style.borderColor = "#F78B87";
};
