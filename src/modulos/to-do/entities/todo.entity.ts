import { BaseEntity ,Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class TodoEntity extends BaseEntity{

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    text: string

    @Column({
        default: false
    })
    complete: boolean

    @Column()
    dificult: number

    @CreateDateColumn()
    createAt: Date

    @UpdateDateColumn()
    updateAt: Date

    @DeleteDateColumn()
    deleteAt: Date | null

}