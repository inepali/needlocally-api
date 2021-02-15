import * as express from "express";
import { Router, Request, Response } from "express";
import { getRepository } from "typeorm";
import { Question } from '../entity/Question';

const router: Router = express.Router();

async function find(req: Request, res: Response) {
  const questions = await getRepository(Question).find();
  console.log(questions);
  res.json(questions);
}

async function findOne(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const need = await getRepository(Question).findOne(id);
    res.status(200).send(need);
  } catch (error) {
    res.status(400).send({ status: 400, message: error });
  }
}

async function save(req: Request, res: Response) {
  try {
    //console.log(req.body);
    const need = await getRepository(Question).create(req.body);
    console.log(need);
    const results = await getRepository(Question).save(need);
    console.log(results);
    res.json(results);
  } catch (error) {
    res.status(400).send({ status: 400, message: error });
  }
}

async function remove(req: Request, res: Response) {
  try {
    const results = await getRepository(Question).delete(req.params.id);
    console.log(results);
    res.json(results);
  } catch (error) {
    res.status(400).send({ status: 400, message: error });
  }
}

async function update(req: Request, res: Response) {
  const id = req.params.id;
  const question = await getRepository(Question).findOne(id);
  const data = req.body;
  console.log(data);
  getRepository(Question).merge(question, data);
  const results = await getRepository(Question).save(question);
  return res.send(results);
};


router.get('/', find);
router.get('/:id', findOne);

router.post('/save', save)

router.delete('/:id', remove)

router.put('/update/:id', update)

module.exports = router