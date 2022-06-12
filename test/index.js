import CSV from "../csv.js";

const cs = new CSV("test.csv", "Name, Email, Password\n");

cs.addData(["John Doe", "John@gmail.com", "John Doe"]);
console.log(cs.getFile())
    // window.open(URL.createObjectURL(cs.getFile()))