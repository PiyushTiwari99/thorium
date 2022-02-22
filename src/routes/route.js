const express = require('express');
const router = express.Router();
const logger = require("../logger/logger")
const util = require("../util/helper");
const validator = require("../validator/formatter")
const lod = require("../lodashMod/lod")
const { trim } = require('../validator/formatter');

router.get('/test-me', function (req, res) {
    logger.welcome("Welcome to my application. I am <name> and a part of FunctionUp Thorium cohort.")
    util.printDate()
    util.printMonth()
    util.getBatchInfo()
    validator.trim()
    validator.changetoLowerCase()
    validator.changetoUpperCase()
    res.send('My first ever api!')

});
router.get('/hello', function (req, res) {

    res.send('Hello World!')
    lod.arrSpliter()
    lod.giveTail()
    lod.arrUnion()
    lod.getPairs()
});

module.exports = router;


