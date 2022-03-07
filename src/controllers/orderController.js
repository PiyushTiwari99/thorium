const orderModel = require("../models/orderModel")

const orderUser = async function (req, res) {
    let data = req.body
    let savedData = await orderModel.create(data)

    res.send({ msg: savedData })
}



module.exports.orderUser = orderUser