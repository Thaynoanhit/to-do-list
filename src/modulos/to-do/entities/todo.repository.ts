import { Injectable } from "@nestjs/common";
import { Between, ILike, Repository } from "typeorm";
import { TodoEntity } from "../entities/todo.entity";
import { InjectDataSource, InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class TodoRepository extends Repository <TodoEntity> {
    constructor(@InjectRepository(TodoEntity) Repository: Repository<TodoEntity>){
        super(Repository.target, Repository.manager)
    }
    async getOneById(id: string): Promise <TodoEntity> {
        const entity = await this.findOneBy({
            id
        })

        if(!entity) 
        throw new Error("Item com esse id existe no banco de dados!")

        return entity
    }


    async list(params:{
        page: number,
        perPage: number,
        createdAt?: Date,
        dificult?: number,
        completed?: boolean
        search: string
    }): Promise<Array<TodoEntity>>{

        const where = {}
        if(params.createdAt){
            const startOfDay = new Date(params.createdAt)
            startOfDay.setHours(0)
            startOfDay.setMinutes(0)
            startOfDay.setSeconds(0)
            startOfDay.setMilliseconds(0)

            const endOfDay = new Date(params.createdAt)
            startOfDay.setHours(23)
            startOfDay.setMinutes(59)
            startOfDay.setSeconds(59)
            startOfDay.setMilliseconds(999)
            where['createdAt'] = Between(startOfDay, endOfDay)
        }

        if(params.dificult){
            where["dificult"] = params.dificult
        }

        if(params.completed){
            where["completed"] = params.completed
        }

        if(params.search){
            where["text"] = ILike(`%${params.search}%`)
        }

        const skip = (params.page - 1) * params.perPage

        const entities = await this.find({
            where,
            skip,
            order: {
                complete: "ASC",
                createAt: "DESC"
            }
        })

        return entities
    }

    async registerItem(input: Partial<TodoEntity>): Promise<TodoEntity> {
        const entity = this.create(input)
        await this.save(entity)
        return entity
    }

}
