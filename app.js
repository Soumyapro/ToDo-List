const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
console.log(date());
const app = express();
var items = ["Breakfast","Sleep","Code"];
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended : true}));

app.use(express.static("public"));

app.get("/",(req,res)=>{

    var day = date();
    res.render("list", {kindOfday : day, newListItems : items});
});

app.post("/", (req,res)=>{

    item = req.body.newItem;
    items.push(item);
    res.redirect("/");
});


app.listen(3000,()=>{

    console.log("Your server is running on port no. : 3000");
})