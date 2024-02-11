import express from "express";
import bodyParser from "body-parser";

const app = new express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/contact", (req, res) => {
    res.render("contact.ejs");
});

app.get("/about", (req, res) => {
    res.render("about.ejs");
});

app.get("/myprocess", (req, res) => {
    res.render("myprocess.ejs");
});

app.listen(port, ()=>{
    console.log(`Server is runnin on port ${port}`);
});