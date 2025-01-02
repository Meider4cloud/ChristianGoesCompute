class User {
  constructor(username, password) {
      this.username = username;
      this.password = password;
      this.isLoggedIn = false;
  }

  login(password) {
      if (password === this.password) {
          this.isLoggedIn = true;
          console.log("Login successful!");
      } else {
          console.log("Incorrect password.");
      }
  }

  logout() {
      this.isLoggedIn = false;
      console.log("Logged out.");
  }
}

// Example usage
const user = new User("exampleUser", "correct_password");

if (user.isLoggedIn) {
  // Do something that requires the user to be logged in
  console.log("Welcome, " + user.username + "!");
}

// Attempt to log in with an incorrect password
user.login("wrong_password");

// Log out
user.logout();