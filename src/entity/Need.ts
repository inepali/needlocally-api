import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import { Question } from "./Question";

@Entity("needs")
export class Need {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    keywords: string;

    @Column()
    description: string;

    @OneToMany(() => Question, question => question.need,  { cascade: true })
    questions: Question[];

    @Column()
    active: boolean;
}