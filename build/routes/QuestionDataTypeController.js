"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const typeorm_1 = require("typeorm");
const QuestionDataType_1 = require("../entity/QuestionDataType");
const router = express.Router();
async function find(req, res) {
    const questionDataTypes = await typeorm_1.getRepository(QuestionDataType_1.QuestionDataType).find();
    console.log(questionDataTypes);
    res.json(questionDataTypes);
}
router.get('/', find);
module.exports = router;
