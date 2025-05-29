function tryLogin() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const error = document.getElementById("error");
  
    if (username === "user" && password === "1234") {
      error.style.display = "none";
      alert("Вход выполнен! Добро пожаловать в PumpItUp!");
      window.location.href = "info.html";
    } else {
      error.style.display = "block";
    }
  }
  
  