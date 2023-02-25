import {Entity,PrimaryGeneratedColumn,Column} from "typeorm";


@Entity()
export class Authors{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    first_name:string;

    @Column()
    last_name:string;
}