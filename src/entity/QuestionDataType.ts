import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("QuestionDataTypes")
export class QuestionDataType {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    type: string;

    @Column()
    active: boolean;

}