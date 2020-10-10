const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));


let todoLists = [];


app.get("", function (req, res) {
const today = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

let day = today.toLocaleDateString("en-US", options);

res.render("lists", {
	dayName : day,
	listItems : todoLists
});

});


app.post("", function (req, res) {

	let todoList = req.body.listItem;

	todoLists.push(todoList);

	res.redirect("");
});



app.listen(3000, function(){
	console.log("Server is running on port 3000 ......")
});
