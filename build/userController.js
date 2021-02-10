"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var typeorm_1 = require("typeorm");
var User_1 = require("./entity/User");
var router = express.Router();
router.use(function (req, res, next) {
    console.log('Time: ', Date.now());
    next();
});
var getUsers = function (req, res) {
    typeorm_1.createConnection().then(function (connection) {
        var userRepository = connection.getRepository(User_1.User);
        return userRepository.find();
    });
};
router.get('/', function (req, res) {
    res.send('Users REST API');
});
router.get('/getall', getUsers);
exports.default = router;
