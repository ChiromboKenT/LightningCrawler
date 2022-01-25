import {Entity, ObjectIdColumn, ObjectID, Column, BaseEntity} from "typeorm";

@Entity()
export class Assets {

    @ObjectIdColumn()
    id!: ObjectID;

    @Column()
    type! : string

    @Column()
    objects?: Array<string>;

}
