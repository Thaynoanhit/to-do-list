import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({
    driver: "postgres",
    database: "todo",
    host: "ep-red-queen-a5q7tbgv.us-east-2.aws.neon.tech",
    username: "todo_owner",
    password: "IsejV2W4SZPv",
    ssl: true,
    synchronize: true,
    autoLoadEntities: true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// postgresql://todo_owner:IsejV2W4SZPv@ep-red-queen-a5q7tbgv.us-east-2.aws.neon.tech/todo?sslmode=require