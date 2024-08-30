import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TodoEntity } from "./entities/todo.entity";
import { TodoRepository } from "./repositories/todo.repository";
import { TodoController } from "./todo.controller";
import { TodoService } from "./todo.service";

@Module({
    imports: [TypeOrmModule.forFeature([TodoEntity])],
    controllers: [TodoController],
    providers: [TodoService, TodoRepository]
})
export class TodoModule {}