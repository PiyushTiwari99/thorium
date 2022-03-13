let axios = require("axios")

let getWeather = async function (req, res,) {
    let city = req.query.q
    let app_id = req.query.app_id
    console.log(`query params are: ${city} ${app_id}`)
    var options = {
        method: "get",
        url: ` http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${app_id}`
    }
    let result = await axios(options);
    console.log(result)
    let data = result.data.main.temp
    res.status(200).send({ msg: data, status: true })

}


const allCity = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]

let sortCityByTemp = async function (req, res) {
    try {
        const { app_id } = req.body
        const tempArr = []
        for (let city of allCity) {
            const options = {
                method: "get",
                url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${app_id}`
            }
            let result = await axios(options)
            let temp = result.data.main.temp
            tempArr.push(temp)
        }

        const a = tempArr.map((num, i) => {
            return { city: allCity[i], temp: num }
        })
        const sort = a.sort((i, j) => i.temp - j.temp)
        res.status(200).send({ data: sort })
    } catch (e) {
        res.status(401).send({ Err: e.message })
    }
}










module.exports.getWeather = getWeather
module.exports.sortCityByTemp = sortCityByTemp