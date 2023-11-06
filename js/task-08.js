const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = loginForm.elements.email.value;
  const password = loginForm.elements.password.value;

  if (email.trim() === "" || password.trim() === "") {
    alert("Всі поля повинні бути заповнені!");
    return;
  }
  const formData = {
    email,
    password,
  };

  console.log(formData);

  loginForm.reset();
});
