import * as express from "express";
import {createConnection} from "typeorm";

const userController = require('./routes/UserController');
const needController = require('./routes/NeedController');
const questionController = require('./routes/QuestionController');

// PORT
const PORT = 3000;

// create and setup express app
createConnection().then(connection => {
    const app = express();
    app.use(express.json());


    app.use(function (req, res, next) {
        console.log('Time:', Date.now())
        next()
    })

    //app.use('/', index);
    app.use('/user', userController);
    app.use('/need', needController);
    app.use('/question', questionController);

    // start express server
    const application = app.listen(PORT, () => {
        console.log(`App running on port ${PORT}.`)
    })
});
