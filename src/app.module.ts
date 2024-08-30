import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { AppController } from './app.controller';
import { AppService } from './app.service';
<<<<<<< HEAD
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { TodoModule } from './modulos/to-do/entities/todo.module';

@Module({
  imports:[
  TypeOrmModule.forRoot({
  type: "postgres",
  database: "todo",
  host:"ep-shy-forest-a5nev4ct.us-east-2.aws.neon.tech",
  port: 5432,
  username: "todo_owner",
  password: "IeX1vNkUPu6L",
  ssl: true,
  synchronize: true,
  autoLoadEntities: true,
  uuidExtension: "pgcrypto",
  namingStrategy: new SnakeNamingStrategy()
  }), TodoModule],
=======
import { TodoModule } from './modules/to-do/todo.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      database: "todo",
      host: "ep-red-queen-a5q7tbgv.us-east-2.aws.neon.tech",
      port: 5432,
      username: "todo_owner",
      password: "IsejV2W4SZPv",
      ssl: true,
      synchronize: true,
      autoLoadEntities: true,
      uuidExtension: 'pgcrypto',
      namingStrategy: new SnakeNamingStrategy(),
    }), 
    TodoModule
  ],
>>>>>>> 31665a654ace40c526fa4b8371eb8daa5de70709
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

<<<<<<< HEAD

//postgresql://todo_owner:IeX1vNkUPu6L@ep-shy-forest-a5nev4ct.us-east-2.aws.neon.tech/todo?sslmode=requires
=======
// postgresql://todo_owner:IsejV2W4SZPv@ep-red-queen-a5q7tbgv.us-east-2.aws.neon.tech/todo?sslmode=require
>>>>>>> 31665a654ace40c526fa4b8371eb8daa5de70709
