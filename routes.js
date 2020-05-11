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
    cartItems.push(req.body);
    res.json(cartItems);
});

router.put("/cart-items/:id", (req, res) => {
    const index = cartItems.indexOf(req.params.id);
    cartItems.splice(index, 1, req.body);
    res.json(cartItems);
});

router.delete("/cart-items/:id", (req, res) => {
    cartItems.splice(index, 1);
    res.json(cartItems);
});

module.exports = router;