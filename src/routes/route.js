const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController = require("../controllers/userController")
const ProductController = require("../controllers/productController")
const orderController = require("../controllers/orderController")
const middleware1 = require("../middleware/middleware1")
// const BookController = require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", middleware1.middleware1, UserController.createUser)

router.post("/createProduct", ProductController.createProduct)
router.post("/orderUser", orderController.orderUser)

module.exports = router;