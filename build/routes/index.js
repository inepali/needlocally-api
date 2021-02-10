var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function (req, res) {
    res.send({ title: 'Express' });
});
/* GET Hello World page. */
router.get('/about', function (req, res) {
    res.send({ title: 'Hello, World!' });
});
module.exports = router;
