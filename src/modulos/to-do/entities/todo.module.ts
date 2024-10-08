import { Module } from "@nestjs/common";
import { TodoController } from "./todo.controller";
import { TodoService } from "./todo.service";
import { TodoEntity } from "./todo.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TodoRepository } from "./todo.repository";


@Module({
    imports: [TypeOrmModule.forFeature([TodoEntity])],
    controllers: [TodoController],
    providers: [TodoService, TodoRepository],
})
export class TodoModule {}