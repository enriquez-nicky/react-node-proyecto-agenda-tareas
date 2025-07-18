import { IsNotEmpty, IsString, IsDateString } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  titulo: string;

  @IsNotEmpty()
  @IsString()
  descripcion: string;

  @IsDateString()
  fecha: string;
}
