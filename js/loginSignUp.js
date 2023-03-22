const logInMenuButton = document.querySelector(".login-signup");
const mainContainer = document.querySelector(".login-sign-up-container");
const signUpContainer = document.querySelector(".sign-up");
const loginContainer = document.querySelector(".login");
const username = document.querySelector("#username");
const registerNewUser = document.querySelector(".register-me");
const logInForm = document.querySelector("#login-form");
const signUpForm = document.querySelector("#sign-up-form");
const newPassword = document.querySelector("#new-password");
const confirmPassword = document.querySelector("#password-confirm");

const closeLoginWindowButton = document.querySelector(".close-login");
const closeRegistrationWindowButton = document.querySelector(".close-register");

logInMenuButton.addEventListener("click", () => {
  mainContainer.classList.toggle("show");
  loginContainer.classList.toggle("show");
});

logInForm.addEventListener("submit", (ev) => {
    ev.preventDefault();
    alert("Nu är du inloggad!");
    closeLoginWindow();
    logInMenuButton.textContent = "Inloggad som: " + username.value;
    logInMenuButton.disabled = true;
    logInMenuButton.style.cursor = "not-allowed";
    logInMenuButton.style.backgroundColor = "#9e2a2b";
});

closeLoginWindowButton.addEventListener("click",closeLoginWindow);

registerNewUser.addEventListener("click", (ev) => {
  ev.preventDefault();
  loginContainer.classList.remove("show");
  signUpContainer.classList.toggle("show");
});

closeRegistrationWindowButton.addEventListener("click", closeRegistrationWindow);

signUpForm.addEventListener("submit", (ev) => {
    alert("Nu är du registrerad! Välkommen till klubben!");
    closeRegistrationWindow();
});

function comparePassword(){
    if (newPassword.value != confirmPassword.value) {
        confirmPassword.setCustomValidity("Lösenorden matchar inte!");
      } else {
        confirmPassword.setCustomValidity("");
      }
}

newPassword.onchange = comparePassword;
confirmPassword.onkeyup = comparePassword;

function closeRegistrationWindow(){
    mainContainer.classList.remove("show");
    signUpContainer.classList.remove("show");
}

function closeLoginWindow() {
    mainContainer.classList.remove("show");
    loginContainer.classList.remove("show");
}
