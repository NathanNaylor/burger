const express = require("express");

const router = express.Router();

// Import the model (cat.js) to use its database functions.
const burger = require("../models/burger");

router.get("/", (req, res) => {
    burger.all((burgers) => {
        res.render("index", { burgers });
    });
});

router.post("/api/burgers", (req, res) => {
    const newBurger = {
        burger_name: req.body.burger_name,
        devoured: false
    }
    burger.create(newBurger, (result) => {
        if (result.affectedRows === 0) {
            return res.sendStatus(404);
        }
        res.sendStatus(200);
    });
});

router.put("/api/burgers/:id", (req, res) => {
    const condition = { id: req.params.id };
    const update = { devoured: req.body.value };

    burger.update(update, condition, (result) => {
        if (result.affectedRows === 0) {
            // If no rows were affected, then the ID must not exist, so 404
            return res.status(404).end();
        }
        res.status(200).end();
    });
});

// Export routes for server.js to use.
module.exports = router;