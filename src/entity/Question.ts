import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn, OneToOne } from "typeorm";
import { InputType } from "./InputType";
import { ListItem } from "./ListItem";
import { Need } from "./Need";

@Entity("questions")
export class Question {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    name: string;

    @Column({ nullable: true })
    label: string;

    @OneToOne(() => InputType, inputType => inputType.id)
    @JoinColumn()
    inputType: InputType;

    @Column()
    isRequired: boolean;

    @Column()
    displayOrder: number;
    
    @OneToMany(() => ListItem, listItem => listItem.question, {cascade: true})
    listItems: ListItem[];

    @ManyToOne(() => Need, need => need.questions)
    need: Need;

}

