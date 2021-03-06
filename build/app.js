"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const typeorm_1 = require("typeorm");
var cors = require('cors');
const userController = require('./routes/UserController');
const needController = require('./routes/NeedController');
const questionController = require('./routes/QuestionController');
const questionDataTypeController = require('./routes/QuestionDataTypeController');
// PORT
const PORT = 3000;
// create and setup express app
typeorm_1.createConnection().then(connection => {
    const app = express();
    app.use(express.json());
    app.use(cors());
    app.use(function (req, res, next) {
        console.log('Time:', Date.now());
        next();
    });
    //app.use('/', index);
    app.use('/user', userController);
    app.use('/need', needController);
    app.use('/question', questionController);
    app.use('/questionDataType', questionDataTypeController);
    // start express server
    const application = app.listen(PORT, () => {
        console.log(`App running on port ${PORT}.`);
    });
});
