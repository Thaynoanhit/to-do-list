import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
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
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


//postgresql://todo_owner:IeX1vNkUPu6L@ep-shy-forest-a5nev4ct.us-east-2.aws.neon.tech/todo?sslmode=requires