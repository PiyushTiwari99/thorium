const jwt = require("jsonwebtoken")
const auth = function (req, res, next) {
    let token = req.headers["x-auth-token"];
    if (!token) return res.send({ msg: "token must be present" });
    console.log(token);

    let decodedToken = jwt.verify(token, "functionup-thorium");
    if (!decodedToken)
        return res.send({ status: false, msg: "token is invalid" });


    let userId = req.params.userId;

    if (decodedToken.userId != userId) {
        res.send({ error: " Login user is not authorize" })
    }


    next()

}
module.exports.auth = auth