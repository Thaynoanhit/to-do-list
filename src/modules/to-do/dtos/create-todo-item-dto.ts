import { IsInt, Length } from "class-validator";

export class CreateTodoItemDto {
    @Length(3, 100)
   text: string;
    @IsInt()
   dificulty: number;
  }