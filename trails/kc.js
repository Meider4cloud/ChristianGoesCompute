var p = { lastname : "Clinton", firstname : "Bill" };
console.log("p (before modification of p2) =", p);
// p = { lastname : "Clinton", firstname : "Bill" }
var p2 = p;
p2.city = "Washington";
console.log("p (after modification of p2) =", p);
// p = { lastname : "Clinton", firstname : "Bill",
// city : "Washington"}
console.log("p2 =", p2);