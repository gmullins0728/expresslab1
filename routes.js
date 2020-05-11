const router = require("express").Router();
const cartItems = require("./cartItems");

router.get("/", (req, res) => {
    console.log(req.body);
    res.json(cartItems);
});

router.get("/cart-items/", (req, res) => {
    res.json(cartItems);
});

router.get("/cart-items/:id", (req, res) => {
    let index = req.params.id;

    if(cartItems[index]) {
        res.status(200);
        res.json(cartItems[index]);
    } else {
        res.status(404);
        res.json("Item not found");
    }
});

router.post("/cart-items/", (req, res) => {
    console.log(req.body);
    res.json("Adding item");
});

router.put("/cart-items/:id", (req, res) => {
    console.log(req.body);
    console.log(req.params.id);
    res.json("Update an item");
});

router.delete("/cart-items/:id", (req, res) => {
    console.log(req.params.id);
    res.json("Delete an item");
});

module.exports = router;