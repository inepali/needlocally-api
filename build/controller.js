"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("./entity/User");
var dbConnection = require('dbConnection');
var app = require("app");
var getUsers = function (req, res) {
    // here we will have logic to return all users
    var userRepository = dbConnection.getRepository(User_1.User);
};
module.exports = {
    getUsers: getUsers
};
