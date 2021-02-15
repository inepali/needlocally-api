import * as express from "express";
import { Router, Request, Response } from "express";
import { createQueryBuilder, getRepository } from "typeorm";
import { Need } from '../entity/Need';

const router: Router = express.Router();

async function find(req: Request, res: Response) {
  const needs = await getRepository(Need).find();
  console.log(needs);
  res.json(needs);
}

async function findOne(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const need = await getRepository(Need).findOne(id);
    res.status(200).send(need);
  } catch (error) {
    res.status(400).send({ status: 400, message: error });
  }
}

async function save(req: Request, res: Response) {
  try {
    console.log(req.body);
    console.log("save called in need controller");
    const need = await getRepository(Need).create(req.body);
    console.log(need);
    const results = await getRepository(Need).save(need);
    console.log(results);
    res.json(results);
  } catch (error) {
    res.status(400).send({ status: 400, message: error });
  }
}

async function remove(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const results = await getRepository(Need).delete(id);
    console.log(results);
    res.json(results);
  } catch (error) {
    res.status(400).send({ status: 400, message: error });
  }
}

// return Need all tree data once.
async function tree(req: Request, res: Response) {
  try {
    const result = await getRepository(Need)
    .createQueryBuilder("need")
    .leftJoinAndSelect("need.questions", "question")
    .leftJoinAndSelect("question.listItems", "listItem")
    .where("need.id = :id", { id: req.params.id })
    .getOne();

    console.log(result);
    res.json(result);

  } catch (error) {
    console.log(error)
    res.status(400).send({ status: 400, message: error });
  }
}

async function questions(req: Request, res: Response) {
  try {
    console.log(req.params.id);
    const result = await getRepository(Need)
    .createQueryBuilder("need")
    .leftJoinAndSelect("need.questions", "question")
    .leftJoinAndSelect("question.listItems", "listItem")
    .where("need.id = :id", { id: req.params.id })
    .getOne();

    console.log(result);
    res.json(result.questions);

  } catch (error) {
    console.log(error)
    res.status(400).send({ status: 400, message: error });
  }
}


router.get('/', find);
router.get('/questions/:id', questions)
router.get('/tree/:id', tree);

router.get('/:id', findOne);
router.post('/save', save)
router.delete('/:id', remove)


module.exports = router