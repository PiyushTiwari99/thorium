let axios = require("axios")


let memeCreate = async function (req, res) {
    try {


        let options = {
            method: "post",
            //     url: `https://api.imgflip.com/caption_image?template_id=${mId}&text0=${t0}&text1=${t1}&username=${chewie12345}&password=${meme@123}`
            url: `https://api.imgflip.com/caption_image?template_id=180190441&text0=himan&text1=heybro&username=chewie12345&password=meme@123`
        }
        let result = await axios(options)
        res.status(200).send({ data: result.data })
    } catch (e) {
        res.status(401).send({ err: e.message })
    }
}

module.exports.memeCreate = memeCreate