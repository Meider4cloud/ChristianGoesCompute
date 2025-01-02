const fs = require('fs');

class User {
    constructor(Username, Password) {
        this.Username = Username;
        this.Password = Password;

    }
    login(Username, Password) {
        if (this.Username === Username && this.Password === Password) { console.log("Login successful!") }
        else { console.log("Login failed!") }
    };
    saveTojson(filename) {
        const data = JSON.stringify(this,null,2) 
    fs.writeFileSync(filename, data, 'utf8');
    console.log("File created!")
    

}

}

const Chris = new User("Chris", 1234)

Chris.saveTojson("userchris.json")
Chris.login("Chris", 1234)


