"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const typeorm_1 = require("typeorm");
const Need_1 = require("../entity/Need");
const router = express.Router();
async function find(req, res) {
    const needs = await typeorm_1.getRepository(Need_1.Need).find();
    console.log(needs);
    res.json(needs);
}
async function findOne(req, res) {
    try {
        const id = req.params.id;
        const need = await typeorm_1.getRepository(Need_1.Need).findOne(id);
        res.status(200).send(need);
    }
    catch (error) {
        res.status(400).send({ status: 400, message: error });
    }
}
async function save(req, res) {
    try {
        //console.log(req.body);
        const need = await typeorm_1.getRepository(Need_1.Need).create(req.body);
        console.log(need);
        const results = await typeorm_1.getRepository(Need_1.Need).save(need);
        console.log(results);
        res.json(results);
    }
    catch (error) {
        res.status(400).send({ status: 400, message: error });
    }
}
async function remove(req, res) {
    try {
        const results = await typeorm_1.getRepository(Need_1.Need).delete(req.params.id);
        console.log(results);
        res.json(results);
    }
    catch (error) {
        res.status(400).send({ status: 400, message: error });
    }
}
router.get('/', find);
router.get('/:id', findOne);
router.post('/save', save);
router.delete('/:id', remove);
module.exports = router;
