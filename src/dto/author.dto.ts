/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString, MinLength, MaxLength } from "class-validator";

export class authorDto {

  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(100)
  readonly name: string;
  
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(100)
  readonly surname: string;
}
