import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import { Question } from "./Question";


@Entity("listItems")
export class ListItem {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    value: string;

    @Column()
    active: boolean = false;

    @ManyToOne(() => Question, question => question.listItems)
    question: Question;

}