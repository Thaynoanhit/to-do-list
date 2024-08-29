import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { AppController } from './app.controller';
import { AppService } from './app.service';
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
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// postgresql://todo_owner:IsejV2W4SZPv@ep-red-queen-a5q7tbgv.us-east-2.aws.neon.tech/todo?sslmode=require