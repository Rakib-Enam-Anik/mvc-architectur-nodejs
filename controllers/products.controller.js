const path = require("path")

const products = require("../models/products.model");



exports.getProducts = (req, res) => {
    res.sendFile(path.join(__dirname + "/../views/index.html"));
};

exports.saveProducts =  (req,res) => {
    const name = req.body.name;
    const age = Number(req.body.age);
    const user = {
        name,
        age,
    };

    users.push(user);
    res.status(201).json({
        success: true,
        users,
    });
};