"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var connection;
var DbConnection = typeorm_1.createConnection().then(function (connection) {
    // here you can start to work with your entities
    console.log("DB Connection established.");
}).catch(function (error) { return console.log(error); });
module.exports = DbConnection;
exports.default = connection;
