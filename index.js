// Here I'm creatin a team builder
import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

let players = ["Filipe", "Joao", "Marcos", "Junior", "Danilo", "Guga", "Jef", "Bob", "Maniac", "Marquin", "Pedro", "Lan", "Alisson"];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", {players});
});

app.post("/team", (req, res) => {
  const team = [];
  
  res.redirect("/");
})

app.listen(port, () => {
  console.log(`Linstening on port ${port}`);
});