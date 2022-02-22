let b = "    functionUp    "


function trims() {
    console.log(b.trim())
}




function changetoLowerCase() {
    let a = b.trim().toLowerCase()
    console.log(a)
}


function changetoUpperCase() {
    let a = b.trim().toUpperCase()
    console.log(a)
}


module.exports.trim = trims
module.exports.changetoLowerCase = changetoLowerCase
module.exports.changetoUpperCase = changetoUpperCase
