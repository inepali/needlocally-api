import * as express from "express";
import { Router, Request, Response } from "express";
import { getRepository } from "typeorm";
import { QuestionDataType } from "../entity/QuestionDataType";


const router: Router = express.Router();

async function find(req: Request, res: Response) {
  const questionDataTypes = await getRepository(QuestionDataType).find();
  console.log(questionDataTypes);
  res.json(questionDataTypes);
}

router.get('/', find);

module.exports = router