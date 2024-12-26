console.log("Hello World")

class User {
    public constructor(private name: string, public email: string, private password: string) {
      this.name = name;
      this.email = email
      this.password = password

    // Save to json file

        console.log("Created", this);
        
    }
  
    public signIn(email: string, password: string): string {
        if (email === this.email || password === this.password) {
            return this.name;
        }
        else {
            return "Wrong user credentials"
        }
    }

    public deleteUser(email: string, password: string) {
        console.log("Develop code to delete the user here.");
        
    }
  }

const marcus = new User("Marcus", "test@test.com", "supersecret")
console.log(`Logged in as: ${marcus.signIn("test@test.com", "supersecret")}`)
marcus.deleteUser("test@test.com", "supersecret")