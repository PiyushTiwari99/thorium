// const express = require('express');
// const router = express.Router();
// const userController = require("../controllers/userController")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

// router.post("/users", userController.createUser)

// router.post("/login", userController.loginUser)

// // //The userId is sent by front end
// router.get("/users/:userId", userController.getUserData)

// router.put("/users/:userId", userController.updateUser)

// module.exports = router;

const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController")
const auth = require("../middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", userController.createUser)

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", auth.auth, userController.getUserData)

router.put("/users/:userId", auth.auth, userController.updateUser)

router.delete("/users/:userId", auth.auth, userController.deleteUser)
// router.post("/users/:usersId/posts", userController.postMessage)


module.exports = router;