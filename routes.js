const router = require("express").Router();
const cartItems = require("./cartItems");

router.get("/", (req, res) => {
    console.log(req.body);
    res.json(cartItems);
});

router.get("/cart-items/", (req, res) => {
    console.log("*** Query - Server ***", req.query);
    res.json(cartItems);
});

router.get("/api/cart-items/:id", (req, res) => {
    let index = req.params.id;

    if(cartItems[index]) {
        res.json(cartItems[index]);
    } else {
        res.json("Item not found");
    }
});

router.post("/api/cart-items/", (req, res) => {
    console.log(req.body);
    res.json("Adding item");
});

router.put("/api/cart-items/:id", (req, res) => {
    console.log(req.body);
    console.log(req.params.id);
    res.json("Update an item");
});

router.delete("/api/cart-items/:id", (req, res) => {
    console.log(req.params.id);
    res.json("Delete an item");
});

module.exports = router;