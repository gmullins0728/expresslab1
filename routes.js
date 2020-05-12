const router = require("express").Router();
const cartItems = require("./cartItems");

router.get("/cart-items", (req, res) => {
    console.log(req.body);
    res.json(cartItems);
});

router.get("/cart-items", (req, res) => {
    const {maxPrice, prefix, pageSize} = req.query;
    let items;
    let cached = {};
    if (maxPrice) {
        items = cartItems.filter((x) => x.price <= Number(maxPrice));
        cached["maxPrice"] = items.sort((a, b) => a -b);
    
    }

    if (pageSize) {
        items = cached["maxPrice"] ? cached["maxPrice"].slice(0, Number(pageSize))
        : cartItems.slice(0, Number(pageSize));
        cached["pageSize"] = items.sort((a,b) => a-b);
    }

    if (prefix) {
        items = cartItems.filter((x) => x.product.startsWith(prefix));
    }
    console.log("*** Cached Items ***", cached);
    res.json(items);
});

router.get("/cart-items/:id", (req, res) => {
    const item = cartItems.filter((x) => x.id === Number(req.params.id));
    if (item.length >= 1) {
        res.status(200);
        res.json(item)
    } else {
        res.status(404);
        res.json({
            message: `ID: ${req.params.id} not found`,
        });
    }
    console.log("item", item);
    res.json(item);
});

router.post("/cart-items/", (req, res) => {
    // cartItems.push(req.body);
    cartItems.push({
        id: `${Number(cartItems.length +1)}`,
        product: req.body.product,
        price: req.body.price,
        quantity: req.body.quantity,
    });
    res.json(cartItems);
});

router.put("/cart-items/:id", (req, res) => {
    const index = cartItems.indexOf(req.params.id);
    cartItems.splice(index, 1, req.body);
    res.status(200);
    res.json(cartItems);
});

router.delete("/cart-items/:id", (req, res) => {
    cartItems.splice(index, 1);
    res.status(200);
    res.json(cartItems);
});

module.exports = router;