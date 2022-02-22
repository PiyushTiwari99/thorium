var today = new Date();
var dd = String(today.getDate());
var mm = String(today.getMonth());

const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];




function printDate() {
    console.log(dd)

}

function printMonth() {
    console.log(month[mm])
}

function getBatchInfo() {
    console.log("Thorium, W3D1, the topic for today is Nodejs module system")
}
module.exports.printDate = printDate
module.exports.printMonth = printMonth
module.exports.getBatchInfo = getBatchInfo