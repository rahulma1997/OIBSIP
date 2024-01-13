function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("errorMessage");
  
    // Replace this with your server-side authentication logic
    if (username === "example" && password === "password") {
      errorMessage.innerHTML = "Login successful!";
      errorMessage.style.color = "#4caf50";
    } else {
      errorMessage.innerHTML = "Invalid username or password.";
      errorMessage.style.color = "#ff0000";
    }
  }
  