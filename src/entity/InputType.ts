import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, IsNull } from "typeorm";
import { ListItem } from "./ListItem";
import { Need } from "./Need";

@Entity("InputTypes")
export class InputType {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    type: string;

    @Column()
    isActive: boolean;

}