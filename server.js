const express = require("express");
const exphbs = require("express-handlebars");
const burger_controller = require("./controller/burgers_controller");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use("/", burger_controller);

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});