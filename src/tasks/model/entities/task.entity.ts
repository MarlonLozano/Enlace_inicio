import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('tasks')
export class Task {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    createdAt: Date;

    @Column()
    updatedAt: Date;

}
