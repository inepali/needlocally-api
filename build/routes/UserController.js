"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const typeorm_1 = require("typeorm");
const User_1 = require("../entity/User");
const router = express.Router();
async function find(req, res) {
    const users = await typeorm_1.getRepository(User_1.User).find();
    res.json(users);
}
async function findOne(req, res) {
    try {
        const id = req.params.id;
        const users = await typeorm_1.getRepository(User_1.User).findOne(id);
        res.status(200).send(users);
    }
    catch (error) {
        res.status(400).send({ status: 400, message: error });
    }
}
async function getUserName(req, res) {
    const name = req.params.name;
    const users = await typeorm_1.getRepository(User_1.User).find({ where: { firstName: name } });
    res.json(users);
}
router.get('/', find);
router.get('/:id', findOne);
router.get('/name/:name', getUserName);
module.exports = router;
