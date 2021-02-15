"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const typeorm_1 = require("typeorm");
const Question_1 = require("../entity/Question");
const router = express.Router();
async function find(req, res) {
    const questions = await typeorm_1.getRepository(Question_1.Question).find();
    console.log(questions);
    res.json(questions);
}
async function findOne(req, res) {
    try {
        const id = req.params.id;
        const need = await typeorm_1.getRepository(Question_1.Question).findOne(id);
        res.status(200).send(need);
    }
    catch (error) {
        res.status(400).send({ status: 400, message: error });
    }
}
async function save(req, res) {
    try {
        //console.log(req.body);
        const need = await typeorm_1.getRepository(Question_1.Question).create(req.body);
        console.log(need);
        const results = await typeorm_1.getRepository(Question_1.Question).save(need);
        console.log(results);
        res.json(results);
    }
    catch (error) {
        res.status(400).send({ status: 400, message: error });
    }
}
async function remove(req, res) {
    try {
        const results = await typeorm_1.getRepository(Question_1.Question).delete(req.params.id);
        console.log(results);
        res.json(results);
    }
    catch (error) {
        res.status(400).send({ status: 400, message: error });
    }
}
async function update(req, res) {
    const id = req.params.id;
    const question = await typeorm_1.getRepository(Question_1.Question).findOne(id);
    const data = req.body;
    console.log(data);
    typeorm_1.getRepository(Question_1.Question).merge(question, data);
    const results = await typeorm_1.getRepository(Question_1.Question).save(question);
    return res.send(results);
}
;
router.get('/', find);
router.get('/:id', findOne);
router.post('/save', save);
router.delete('/:id', remove);
router.put('/update/:id', update);
module.exports = router;
