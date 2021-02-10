import * as express from "express";
import { Router, Request, Response } from "express";
import { createConnection, getConnection, getRepository, getConnectionManager } from "typeorm";
import { User } from '../entity/User';

const router: Router = express.Router();

async function find(req: Request, res: Response) {
  const users = await getRepository(User).find();
  res.json(users);
}

async function findOne(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const users = await getRepository(User).findOne(id);
    res.status(200).send(users);
  } catch (error) {
    res.status(400).send({status:400, message: error});
  }
}

async function getUserName(req: Request, res: Response) {
  const name = req.params.name;
  const users = await getRepository(User).find({ where: { firstName: name } })
  res.json(users);
}

router.get('/', find);
router.get('/:id', findOne);
router.get('/name/:name', getUserName);

module.exports = router