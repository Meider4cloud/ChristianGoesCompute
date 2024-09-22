class Person {
    Lastname= "";
    Firstname= "";
    Age= 0;

    display() {
        console.log( "The person's last name is = " + this .Lastname +
             ", firstname = " + this .Firstname);
    }
    
}
var p = new Person;
p.Lastname= "Christian";
p.Firstname = "Kawanguzi"
p.Age = 16

var a = new Person 
a.Lastname ="Mark"
a.Firstname = "Filly" 
a.Age= 25
console.log("variable p =", p)
console.log("varible a =", a)
p.display();
a.display();


