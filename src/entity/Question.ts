import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, OneToOne } from "typeorm";
import { QuestionDataType } from "./QuestionDataType";
import { ListItem } from "./ListItem";
import { Need } from "./Need";

@Entity("questions")
export class Question {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    name: string;

    @Column({ nullable: true })
    questionText: string;

    //@OneToOne(() => QuestionDataType, questionDataType => questionDataType.id)
    @Column()
    questionDataType: number;

    @Column()
    required: boolean;

    @Column()
    displayOrder: number;
    
    @OneToMany(() => ListItem, listItem => listItem.question, {cascade: true})
    listItems: ListItem[];

    @ManyToOne(() => Need, need => need.questions)
    need: Need;

}

