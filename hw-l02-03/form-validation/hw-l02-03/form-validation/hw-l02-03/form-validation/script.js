const form = document.getElementById("signupForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const usernameError = document.getElementById("usernameError");
const passwordError = document.getElementById("passwordError");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;
  const usernameVal = usernameInput.value.trim();
  const passwordVal = passwordInput.value;

  // اعتبارسنجی نام کاربری (حداقل ۵ کاراکتر)
  if (usernameVal.length < 5) {
    usernameError.textContent = "Username must be at least 5 characters.";
    usernameInput.classList.add("input-error");
    usernameInput.classList.remove("input-success");
    isValid = false;
  } else {
    usernameError.textContent = "";
    usernameInput.classList.remove("input-error");
    usernameInput.classList.add("input-success");
  }

  // اعتبارسنجی رمز عبور (حداقل یک حرف بزرگ، یک حرف کوچک و یک عدد)
  const hasUpper = /[A-Z]/.test(passwordVal);
  const hasLower = /[a-z]/.test(passwordVal);
  const hasNumber = /[0-9]/.test(passwordVal);

  if (!hasUpper || !hasLower || !hasNumber) {
    passwordError.textContent = "Password must include uppercase, lowercase, and a number.";
    passwordInput.classList.add("input-error");
    passwordInput.classList.remove("input-success");
    isValid = false;
  } else {
    passwordError.textContent = "";
    passwordInput.classList.remove("input-error");
    passwordInput.classList.add("input-success");
  }

  // نمایش پیام موفقیت
  if (isValid) {
    successMessage.textContent = "Form submitted successfully!";
    form.reset();
    setTimeout(() => {
      usernameInput.classList.remove("input-success");
      passwordInput.classList.remove("input-success");
    }, 2000);
  } else {
    successMessage.textContent = "";
  }
});
